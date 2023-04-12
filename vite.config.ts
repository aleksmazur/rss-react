/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      exclude: ['src/types/types.ts', 'src/utils/*', 'src/index.tsx', 'src/vite-env.d.ts'],
    },
  },
});
