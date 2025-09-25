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
        about: resolve(__dirname, 'about.html'),
        team: resolve(__dirname, 'team.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        contact: resolve(__dirname, 'contact.html'),
        tss: resolve(__dirname, 'tss.html'),
        pd: resolve(__dirname, 'portfolio_detail1.html'),
      },
    },
  },   
})
