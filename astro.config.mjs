import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://thehorizoncollective.co',
  output: 'static',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
