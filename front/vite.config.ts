import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import type { UserConfig } from 'vitest/config';

const vitestConfig: UserConfig = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
  },
};

export default defineConfig({
  plugins: [react(), svgr()],
  test: vitestConfig.test,
});
