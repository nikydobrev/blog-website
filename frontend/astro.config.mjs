import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dobrev.pages.dev', // Update this with your actual Cloudflare Pages URL
  integrations: [mdx(), sitemap()],
  output: 'static',
  adapter: undefined, // Cloudflare Pages uses static export
  
  vite: {
    plugins: [tailwindcss()],
  },
});