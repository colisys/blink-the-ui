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
      '@blink-the-ui/overlays': resolve(__dirname, '../overlays/src'),
      '@blink-the-ui/i18n': resolve(__dirname, '../i18n/src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BlinkTheUIComponents',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', '@blink-the-ui/overlays', '@blink-the-ui/i18n'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
