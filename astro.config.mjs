import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://daniel123gt.github.io',
  base: '/',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['preact']
          }
        }
      }
    },
    // Optimizaciones de performance
    optimizeDeps: {
      include: ['preact']
    }
  },
  integrations: [preact()],
  build: {
    inlineStylesheets: 'auto'
  }
});