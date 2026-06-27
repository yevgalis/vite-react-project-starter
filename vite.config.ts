import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names ?? [];

          if (name.length === 0) {
            return 'assets/[name].[hash][extname]';
          }

          const ext = path.extname(name[0]).slice(1);

          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
            return 'images/[name].[hash][extname]';
          }

          if (['woff', 'woff2', 'ttf'].includes(ext)) {
            return 'fonts/[name][extname]';
          }

          if (ext === 'css') {
            return 'css/[name].[hash][extname]';
          }

          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
});
