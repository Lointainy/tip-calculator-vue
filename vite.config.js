import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const path = require('path')
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: false,
    // assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:math";
        @import "@/assets/scss/partials";
        @import "@/assets/scss/grid";
        `,
      },
    },
  },
})
