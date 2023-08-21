import type { ManifestV3Export } from '@crxjs/vite-plugin';

import { crx } from '@crxjs/vite-plugin';
import { defineConfig } from 'vitest/config';
import manifest from './manifest.json';

export default defineConfig({
  plugins: [crx({ manifest: manifest as ManifestV3Export })],
  test: {
    globals: true,
  },
});
