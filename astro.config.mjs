import { defineConfig } from 'astro/config';
import markdownIntegration from '@astropub/md'

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [markdownIntegration(), preact()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
});
