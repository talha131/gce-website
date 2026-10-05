/*
 * Share images — the picture a link preview shows (og:image / twitter:image)
 * when a page is shared on WhatsApp, Facebook, X, LinkedIn and the like.
 *
 * A page picks one of its own pictures and passes
 * `shareImage(picture, alt, layout)` to Layout as `image`. This only builds a
 * URL that names the source and the layout; scripts/share-images.mjs renders
 * the 1200×630 JPEG behind it at the end of the build (and on the fly in dev).
 * See that file for the URL scheme.
 */
import type { ImageMetadata } from 'astro';

/** A share image as the SEO head describes it. */
export interface ShareImage {
  /** Site-relative path, e.g. "/og-default.png"; SEO makes it absolute. */
  url: string;
  width: number;
  height: number;
  type: 'image/jpeg' | 'image/png';
  /** What the image shows; SEO falls back to the page title. */
  alt?: string;
}

/** The site-wide card in /public, for pages with no picture of their own. */
export const defaultShareImage: ShareImage = {
  url: '/og-default.png',
  width: 1200,
  height: 630,
  type: 'image/png',
};

const WIDTH = 1200;
const HEIGHT = 630;
/** Bump to re-issue every share image under a new URL after a change to how they are drawn. */
const RECIPE = 1;

/*
 * Every image under src/assets, keyed by the ImageMetadata object itself, so a
 * page can pass the image it already has and we can name the original file.
 * Keyed by identity on purpose: reading any property of an imported image
 * (even .src) tells Astro to ship the full-size original in dist/_astro.
 */
const assets = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
});
const sourceByImage = new Map<ImageMetadata, string>();
for (const [path, mod] of Object.entries(assets)) {
  sourceByImage.set(mod.default, path.slice('/src/'.length).replace(/\.[^./]+$/, ''));
}

/**
 * The image's built URL (content-hashed in a build), read through Astro's
 * untracked `clone` so it does not mark the original as used — see above.
 */
function builtSrc(image: ImageMetadata): string {
  return ((image as ImageMetadata & { clone?: ImageMetadata }).clone ?? image).src;
}

/**
 * How to fit the picture into 1200×630:
 * - `cover` (default): a photo, cropped to fill the frame. `focusY` (0–100,
 *   default 50) moves the crop up or down, like PageHero's `imagePosition`.
 * - `card`: shown whole — portraits, book covers, logos — on a brand-indigo
 *   card with the college crest. `panel` (#rrggbb, default white) fills any
 *   transparent areas.
 */
export type ShareLayout = { fit?: 'cover'; focusY?: number } | { fit: 'card'; panel?: string };

/** 32-bit FNV-1a as 8 hex digits: a cache-buster, not a security hash. */
function hash(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(16).padStart(8, '0');
}

/**
 * The share image for a page, made from one of its pictures — an imported
 * image (anything under src/assets) or a path to an image in /public, e.g.
 * '/magazine/mashal-e-ilm/pages/001.webp'. Returns undefined when there is no
 * picture, so Layout falls back to the site default.
 */
export function shareImage(
  picture: ImageMetadata | string | undefined,
  alt: string,
  layout: ShareLayout = {},
): ShareImage | undefined {
  if (!picture) return undefined;

  let source: string;
  if (typeof picture === 'string') {
    if (!picture.startsWith('/') || picture.split('/').includes('..')) {
      throw new Error(`shareImage: "${picture}" is not a path under /public`);
    }
    source = 'public' + picture.replace(/\.[^./]+$/, '');
  } else {
    const found = sourceByImage.get(picture);
    if (!found) throw new Error(`shareImage: ${builtSrc(picture)} is not an image under src/assets`);
    source = found;
  }

  let name: string;
  if (layout.fit === 'card') {
    const panel = (layout.panel ?? '#ffffff').toLowerCase();
    if (!/^#[0-9a-f]{6}$/.test(panel)) throw new Error(`shareImage: panel "${layout.panel}" is not #rrggbb`);
    name = panel === '#ffffff' ? 'card' : `card-${panel.slice(1)}`;
  } else {
    const focusY = Math.round(layout.focusY ?? 50);
    name = focusY === 50 ? 'cover' : `cover-y${Math.min(100, Math.max(0, focusY))}`;
  }

  const version = hash(`${typeof picture === 'string' ? picture : builtSrc(picture)}|${name}|${RECIPE}`);
  return { url: `/og/${name}/${source}.${version}.jpg`, width: WIDTH, height: HEIGHT, type: 'image/jpeg', alt };
}
