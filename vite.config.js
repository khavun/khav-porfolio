import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Define @ alias to point to src/
    },
  },
  plugins: [vue()],
  build: {
    sourcemap: false, // Disable source maps for production
  },
  server: {
    open: true, // Automatically open the app in the browser
  }
})
