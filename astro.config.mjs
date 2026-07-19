// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { generateSitemap } from './scripts/generate-sitemap.mjs';

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

export default defineConfig({
  site: SITE,
  integrations: [sitemapIntegration],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Astro's built-in sharp service handles all responsive/optimized images.
    responsiveStyles: true,
  },
});
