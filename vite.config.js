import { resolve } from 'path';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          cube: resolve(__dirname, '/cube/index.html'),
        },
      },
    },
    base: command === 'build' ? '/csspad/' : '/',
    plugins: [
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
      }),
    ],
  };
});
