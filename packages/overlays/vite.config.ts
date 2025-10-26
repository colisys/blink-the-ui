import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsxPlugin()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@blink-the-ui/components': resolve(__dirname, '../components/src'),
    },
  },
  build: {
    emitAssets: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BlinkTheUIOverlays',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', '@blink-the-ui/components'],
      output: {
        globals: {
          vue: 'Vue',
          '@blink-the-ui/components': 'BlinkTheUIComponents',
        },
      },
    },
  },
});
