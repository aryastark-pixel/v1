import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
     base:"/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        // Add more pages if needed
        // about: resolve(__dirname, 'about.html'),
        // team: resolve(__dirname, 'team.html'),
      },
    },
  },   
})
