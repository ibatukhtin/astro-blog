import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
