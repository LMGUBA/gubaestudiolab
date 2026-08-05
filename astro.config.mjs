// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// `site` es obligatorio para que Astro genere el sitemap y las URLs
// canónicas absolutas; si cambias de dominio, cámbialo aquí y en src/config.ts.
// https://astro.build/config
export default defineConfig({
  site: 'https://www.gubaestudio.com',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
