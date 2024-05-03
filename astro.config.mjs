import { defineConfig } from 'astro/config';
import markdownIntegration from '@astropub/md';
import preact from "@astrojs/preact";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [markdownIntegration(), preact(), react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});