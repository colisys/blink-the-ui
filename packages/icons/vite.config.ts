import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { autoImportIcons } from './plugins/autoImportIcons';

// https://vite.dev/config/
export default defineConfig({
  plugins: [autoImportIcons(), vue(), vueJsxPlugin()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});