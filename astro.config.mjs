import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kaimin-labo.net',
  integrations: [sitemap()],
});
