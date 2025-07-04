import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from '@astrojs/preact';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['preact']
          }
        }
      }
    }
  },
  integrations: [preact()],
  build: {
    inlineStylesheets: 'auto'
  }
});