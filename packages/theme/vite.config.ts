import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BlinkTheUITheme',
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
  },
  plugins: [],
});
