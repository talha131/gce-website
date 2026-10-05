/*
 * Renders the 1200×630 JPEG share images (og:image / twitter:image) that
 * link previews on WhatsApp, Facebook, X, LinkedIn etc. show for each page.
 *
 * How it fits together:
 *   - Pages choose a source image and hand it to Layout → SEO through
 *     `shareImage()` in src/lib/og.ts, which only builds a URL. The URL itself
 *     says how to draw the image:
 *
 *       /og/<layout>/<source>.<hash>.jpg
 *
 *       layout  cover          photo cropped to fill 1200×630, centred
 *               cover-y<NN>    …with the crop's vertical focus at NN %
 *               card           whole image (portrait, book cover, logo) on a
 *                              brand-indigo card with the college crest
 *               card-<rrggbb>  …with transparent areas filled with that colour
 *      source   path of the original under src/ or public/, without its
 *               extension, e.g. assets/content/faculty/Prof_Habib_Ahmed
 *      hash     cache-buster from og.ts (changes when the source changes)
 *
 *   - At the end of every `astro build` (an integration in astro.config.mjs,
 *     so Netlify's CI build gets it too) generateShareImages() reads the og:image
 *     URLs out of the built HTML and renders each one into dist/ at that path.
 *     In `astro dev` the same renderer answers /og/* requests on the fly.
 *
 * Pure sharp (already Astro's image service), no fonts or system tools, so it
 * runs the same on macOS and on Netlify's Linux build image.
 */
import sharp from 'sharp';
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';

export const SHARE_WIDTH = 1200;
export const SHARE_HEIGHT = 630;

/** WhatsApp drops previews whose image is much over ~300 KB. */
const MAX_BYTES = 280 * 1024;
const QUALITIES = [82, 74, 66, 58, 50];

// Brand tokens (src/styles/theme.css).
const BRAND = '#2504B1';
const BRAND_950 = '#0F0248';
const GOLD = '#D4AF37';

const SHARE_PATH = /^\/og\/(cover(?:-y(\d{1,3}))?|card(?:-([0-9a-f]{6}))?)\/((?:assets|public)\/[^?#]+?)\.[0-9a-f]{8}\.jpg$/;
const SOURCE_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];

/** Parse a share-image URL path, or return null if it is not one. */
export function parseSharePath(pathname) {
  const m = SHARE_PATH.exec(pathname);
  if (!m || m[4].split('/').includes('..')) return null;
  const [, layout, focusY, panel, source] = m;
  return layout.startsWith('cover')
    ? { fit: 'cover', focusY: focusY === undefined ? 50 : Math.min(100, Number(focusY)), source }
    : { fit: 'card', panel: panel ? `#${panel}` : '#ffffff', source };
}

/** The original file for a `source` key: src/<key>.<ext> or public/<key minus "public/">.<ext>. */
async function resolveSource(root, source) {
  const base = source.startsWith('public/') ? join(root, source) : join(root, 'src', source);
  const dir = dirname(base);
  const name = basename(base);
  const matches = existsSync(dir)
    ? (await readdir(dir)).filter((f) => SOURCE_EXT.some((ext) => f === name + ext))
    : [];
  if (matches.length !== 1) {
    throw new Error(`share image: ${matches.length ? 'more than one' : 'no'} source file for "${source}"`);
  }
  return join(dir, matches[0]);
}

/** Decode, apply EXIF rotation, and return raw pixels with their size. */
async function load(file, background) {
  let img = sharp(await readFile(file), { failOnError: false }).rotate();
  if (background) img = img.flatten({ background });
  const { data, info } = await img.toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

/** Photo cropped to fill the frame, with the crop's vertical centre at focusY %. */
async function renderCover(file, focusY) {
  const src = await load(file, '#ffffff');
  const scale = Math.max(SHARE_WIDTH / src.width, SHARE_HEIGHT / src.height);
  const w = Math.max(SHARE_WIDTH, Math.round(src.width * scale));
  const h = Math.max(SHARE_HEIGHT, Math.round(src.height * scale));
  return sharp(src.data)
    .resize(w, h)
    .extract({
      left: Math.round((w - SHARE_WIDTH) / 2),
      top: Math.round((h - SHARE_HEIGHT) * (focusY / 100)),
      width: SHARE_WIDTH,
      height: SHARE_HEIGHT,
    });
}

let crest;
async function loadCrest(root, size) {
  crest ??= readFile(join(root, 'src/assets/brand/logo.png'));
  return sharp(await crest).resize({ height: size, width: size, fit: 'inside' }).png().toBuffer({ resolveWithObject: true });
}

/**
 * The whole image — never cropped, so faces and covers stay intact — framed on
 * a brand-indigo card, centred (so a square thumbnail crop still shows it),
 * with the college crest beside it when there is room.
 */
async function renderCard(root, file, panel) {
  const PAD = 48;
  const RADIUS = 18;
  const src = await load(file, panel);
  const scale = Math.min((SHARE_WIDTH - 2 * PAD - 160) / src.width, (SHARE_HEIGHT - 2 * PAD) / src.height);
  const w = Math.round(src.width * scale);
  const h = Math.round(src.height * scale);
  const left = Math.round((SHARE_WIDTH - w) / 2);
  const top = Math.round((SHARE_HEIGHT - h) / 2);

  const roundMask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${RADIUS}" ry="${RADIUS}"/></svg>`,
  );
  const picture = await sharp(src.data)
    .resize(w, h)
    .ensureAlpha()
    .composite([{ input: roundMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const backdrop = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${SHARE_WIDTH}" height="${SHARE_HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BRAND_950}"/>
      <stop offset="1" stop-color="${BRAND}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.6">
      <stop offset="0" stop-color="${GOLD}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <rect x="${left}" y="${top + 10}" width="${w}" height="${h}" rx="${RADIUS}" fill="#000" opacity="0.45" filter="url(#shadow)"/>
  <rect x="${left - 6}" y="${top - 6}" width="${w + 12}" height="${h + 12}" rx="${RADIUS + 6}" fill="none" stroke="${GOLD}" stroke-opacity="0.75" stroke-width="2"/>
</svg>`);

  const layers = [{ input: picture, left, top }];
  const side = left - PAD; // free width beside the picture
  if (side >= 150) {
    const { data, info } = await loadCrest(root, Math.min(side - 40, 220));
    layers.push({ input: data, left: Math.round((left - info.width) / 2), top: Math.round((SHARE_HEIGHT - info.height) / 2) });
  }
  return sharp(backdrop).composite(layers);
}

/** Render the share image a URL path describes; returns JPEG bytes. */
export async function renderShareImage(root, pathname) {
  const spec = parseSharePath(pathname);
  if (!spec) throw new Error(`share image: not a share-image path: ${pathname}`);
  const file = await resolveSource(root, spec.source);
  // Render losslessly once, then encode at falling quality until it fits.
  const pipeline = spec.fit === 'cover' ? await renderCover(file, spec.focusY) : await renderCard(root, file, spec.panel);
  const png = await pipeline.png().toBuffer();
  let jpeg;
  for (const quality of QUALITIES) {
    jpeg = await sharp(png).flatten({ background: BRAND_950 }).jpeg({ quality, mozjpeg: true }).toBuffer();
    if (jpeg.length <= MAX_BYTES) break;
  }
  return jpeg;
}

async function htmlFiles(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await htmlFiles(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const OG_IMAGE_META = /<meta property="og:image" content="([^"]+)"/g;

/**
 * Render every share image the built pages in `distDir` point at, into
 * `distDir` at the URL's path. Returns the number of images written.
 */
export async function generateShareImages({ distDir, root }) {
  const paths = new Set();
  for (const file of await htmlFiles(distDir)) {
    for (const [, url] of (await readFile(file, 'utf8')).matchAll(OG_IMAGE_META)) {
      const pathname = decodeURIComponent(new URL(url.replaceAll('&amp;', '&')).pathname);
      if (pathname.startsWith('/og/')) paths.add(pathname);
    }
  }
  for (const pathname of paths) {
    const out = join(distDir, pathname);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, await renderShareImage(root, pathname));
  }
  return paths.size;
}
