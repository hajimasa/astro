import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      'process.env.MICROCMS_SERVICE_DOMAIN': JSON.stringify(process.env.MICROCMS_SERVICE_DOMAIN),
      'process.env.MICROCMS_API_KEY': JSON.stringify(process.env.MICROCMS_API_KEY)
    }
  },
  output: "server",
  adapter: cloudflare()
});