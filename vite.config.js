import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Shows errors in the browser overlay
    },
  },
  logLevel: 'info', // Set log level to show all logs
  clearScreen: false, // Prevents Vite from clearing the terminal screen on each update
})
