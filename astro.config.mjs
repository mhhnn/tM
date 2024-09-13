import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import svelte from '@astrojs/svelte';
import sveltePreprocess from 'svelte-preprocess';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    tailwind(),
    icon(),
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['pdfjs-dist'],
    },
    optimizeDeps: {
      exclude: ['pdfjs-dist'],
    },
  },
  // Add this section to handle assets in the src folder
  assets: {
    baseFolder: 'src/assets',
    publicFolder: 'TM',
  },
});