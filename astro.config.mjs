import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [preact(), react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
