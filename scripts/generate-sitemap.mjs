#!/usr/bin/env node
/*
 * Generates dist/sitemap.xml from the built site. Run AFTER `astro build`
 * (which populates dist/). Walks dist/ for every shipped page (index.html
 * files), so the sitemap always matches exactly what was deployed — static
 * routes and dynamic getStaticPaths routes alike. Zero dependencies.
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const SITE = 'https://gce.edu.pk';
const EXCLUDE = new Set(['/404']);

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (entry.name === 'index.html') out.push(full);
  }
  return out;
}

const files = await walk(DIST);

const entries = [];
for (const file of files) {
  const rel = relative(DIST, file)
    .split(sep).join('/')
    .replace(/index\.html$/, '')
    .replace(/\/$/, '');
  const path = '/' + rel;
  if (EXCLUDE.has(path)) continue;
  const { mtime } = await stat(file);
  entries.push({ loc: SITE + (path === '/' ? '/' : path), lastmod: mtime.toISOString().slice(0, 10) });
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

await writeFile(join(DIST, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml written with ${entries.length} URLs`);
