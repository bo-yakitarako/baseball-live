import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: 'src/main.tsx',
      },
      output: {
        entryFileNames: 'content.js',
        format: 'iife',
      },
      plugins: [
        copy({
          targets: [{ src: 'manifest.json', dest: 'dist' }],
          hook: 'writeBundle',
        }),
      ],
    },
  },
});
