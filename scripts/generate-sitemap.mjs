#!/usr/bin/env node
/*
 * Generates <dist>/sitemap.xml from a built site. Walks the output dir for
 * every shipped page (index.html files), so the sitemap always matches exactly
 * what was deployed — static routes and dynamic getStaticPaths routes alike.
 * Zero dependencies.
 *
 * This runs automatically at the end of every `astro build` (wired as an
 * integration in astro.config.mjs), so it is present on ALL build paths —
 * local, `make`, and Netlify's CI build — not just `make deploy`. It can also
 * be run standalone against an existing dist/: `node scripts/generate-sitemap.mjs`.
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { argv } from 'node:process';
import { pathToFileURL } from 'node:url';

const DEFAULT_DIST = 'dist';
const DEFAULT_SITE = 'https://gce.edu.pk';
const EXCLUDE = new Set(['/404']);

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (entry.name === 'index.html') out.push(full);
  }
  return out;
}

/**
 * Walk `distDir` and write `distDir/sitemap.xml` with absolute URLs under
 * `site`. Returns the number of URLs written.
 */
export async function generateSitemap({ distDir = DEFAULT_DIST, site = DEFAULT_SITE } = {}) {
  const files = await walk(distDir);

  const entries = [];
  for (const file of files) {
    const rel = relative(distDir, file)
      .split(sep).join('/')
      .replace(/index\.html$/, '')
      .replace(/\/$/, '');
    const path = '/' + rel;
    if (EXCLUDE.has(path)) continue;
    const { mtime } = await stat(file);
    entries.push({ loc: site + (path === '/' ? '/' : path), lastmod: mtime.toISOString().slice(0, 10) });
  }

  entries.sort((a, b) => a.loc.localeCompare(b.loc));

  const body = entries
    .map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  await writeFile(join(distDir, 'sitemap.xml'), xml, 'utf8');
  return entries.length;
}

// Standalone CLI use (e.g. `node scripts/generate-sitemap.mjs` against an
// existing dist/). Skipped when this module is imported (e.g. by astro.config).
if (import.meta.url === pathToFileURL(argv[1] ?? '').href) {
  const count = await generateSitemap();
  console.log(`sitemap.xml written with ${count} URLs`);
}
