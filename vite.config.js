import { defineConfig } from 'vite';
/** @type {import('vite').UserConfig} */
import biomePlugin from 'vite-plugin-biome';

const IS_DEV = process.env.DEV === 'true';

console.log('IS_DEV', IS_DEV);
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'build') {
    return {
      base: '/csspad/',
      plugins: [
        biomePlugin({
          mode: 'check',
          files: '.',
          applyFixes: true,
        }),
      ],
    };
  }

  return {
    base: '/',
    plugins: [
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
      }),
    ],
  };
});
