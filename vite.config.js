import biomePlugin from 'vite-plugin-biome';

export default {
  base: '/csspad/',
  plugins: [
    biomePlugin({
      mode: 'check',
      files: '.',
      applyFixes: true,
    }),
  ],
};
