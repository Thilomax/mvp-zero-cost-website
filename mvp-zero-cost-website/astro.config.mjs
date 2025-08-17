import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.pages.dev', // placeholder; Cloudflare Pages will set real URL
  integrations: [tailwind({
    applyBaseStyles: true,
  })],
  build: {
    format: 'directory'
  }
});