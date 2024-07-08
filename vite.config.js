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
          floor: resolve(__dirname, '/floor/index.html'),
          gemini: resolve(__dirname, '/gemini/index.html'),
          popover: resolve(__dirname, '/popover/index.html'),
          scrollprogressanimation: resolve(__dirname, '/scrollprogressanimation/index.html'),
          viewprogressanimations: resolve(__dirname, '/viewprogressanimations/index.html'),
          viewtransitions: resolve(__dirname, '/viewtransitions/index.html'),
          viewtransitionsgallery: resolve(__dirname, '/viewtransitionsgallery/index.html'),
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
