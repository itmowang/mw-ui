import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: "../../docs",
  integrations: [
    // Enable Preact to support Preact JSX components.
    vue(),
    tailwind(),
    react(),
  ],
});
