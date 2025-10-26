// @ts-check
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";

import db from '@astrojs/db';

export default defineConfig({
  integrations: [clerk(), db()],
  adapter: cloudflare({
    imageService: "passthrough",
    platformProxy: {
      enabled: true,
    },
  }),
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
     define: {
      'process.env.TURSO_DATABASE_URL': JSON.stringify(process.env.TURSO_DATABASE_URL),
      'process.env.TURSO_AUTH_TOKEN': JSON.stringify(process.env.TURSO_AUTH_TOKEN),
      'process.env.ASTRO_DB_REMOTE_URL': JSON.stringify(process.env.ASTRO_DB_REMOTE_URL),
      'process.env.ASTRO_DB_APP_TOKEN': JSON.stringify(process.env.ASTRO_DB_APP_TOKEN),
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV)
    },
  },
  devToolbar: {
    enabled: false
  }
})