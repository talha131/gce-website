// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The public site URL. Update to the final production domain before deploy.
// Used for canonical URLs, Open Graph tags and sitemap.xml generation.
export default defineConfig({
  site: 'https://gce.edu.pk',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Astro's built-in sharp service handles all responsive/optimized images.
    responsiveStyles: true,
  },
});
