// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { generateSitemap } from './scripts/generate-sitemap.mjs';
import { generateShareImages, parseSharePath, renderShareImage } from './scripts/share-images.mjs';

// The public site URL. Update to the final production domain before deploy.
// Used for canonical URLs, Open Graph tags and sitemap.xml generation.
const SITE = 'https://gce.edu.pk';

// Generate dist/sitemap.xml at the end of every build. As an integration it
// runs on ALL build paths — `astro build`, `make`, and Netlify's CI build —
// so the deployed site always has a matching sitemap.
const sitemapIntegration = {
  name: 'gce-sitemap',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const count = await generateSitemap({ distDir: fileURLToPath(dir), site: SITE });
      logger.info(`sitemap.xml written with ${count} URLs`);
    },
  },
};

// Render the 1200×630 link-preview images the built pages point at (see
// scripts/share-images.mjs and src/lib/og.ts). Also on every build path, and
// served on the fly in `astro dev` so previews can be checked locally.
let projectRoot = fileURLToPath(new URL('.', import.meta.url));
/** @type {import('astro').AstroIntegration} */
const shareImagesIntegration = {
  name: 'gce-share-images',
  hooks: {
    'astro:config:done': ({ config }) => {
      projectRoot = fileURLToPath(config.root);
    },
    'astro:server:setup': ({ server, logger }) => {
      server.middlewares.use(async (req, res, next) => {
        const pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://dev').pathname);
        if (!parseSharePath(pathname)) return next();
        try {
          const jpeg = await renderShareImage(projectRoot, pathname);
          res.setHeader('Content-Type', 'image/jpeg');
          res.end(jpeg);
        } catch (err) {
          logger.error(String(err));
          res.statusCode = 404;
          res.end();
        }
      });
    },
    'astro:build:done': async ({ dir, logger }) => {
      const count = await generateShareImages({ distDir: fileURLToPath(dir), root: projectRoot });
      logger.info(`${count} share images rendered`);
    },
  },
};

export default defineConfig({
  site: SITE,
  integrations: [sitemapIntegration, shareImagesIntegration],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Astro's built-in sharp service handles all responsive/optimized images.
    responsiveStyles: true,
  },
});
