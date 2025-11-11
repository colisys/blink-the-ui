import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BlinkTheUIi18n',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue', 'vue-i18n'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-i18n': 'VueI18n',
        },
        exports: 'named',
      },
    },
    copyPublicDir: false,
  },
  plugins: [
    {
      name: 'copy-locales',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'locales/en/common.json',
          source: JSON.stringify(require('./src/locales/en/common.json')),
        });
        this.emitFile({
          type: 'asset',
          fileName: 'locales/en/datetime.json',
          source: JSON.stringify(require('./src/locales/en/datetime.json')),
        });
        this.emitFile({
          type: 'asset',
          fileName: 'locales/zh/common.json',
          source: JSON.stringify(require('./src/locales/zh/common.json')),
        });
        this.emitFile({
          type: 'asset',
          fileName: 'locales/zh/datetime.json',
          source: JSON.stringify(require('./src/locales/zh/datetime.json')),
        });
      },
    },
  ],
});
