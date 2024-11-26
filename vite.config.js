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
    host: '0.0.0.0', // Allow external access (this binds the server to all network interfaces)
    port: 5173, // Ensure the port matches the one you're using
    strictPort: true, // Ensures the server only runs on the given port
  }
})

