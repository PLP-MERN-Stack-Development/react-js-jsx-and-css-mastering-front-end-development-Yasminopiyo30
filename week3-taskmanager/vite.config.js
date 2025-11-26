import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind CSS should be configured via postcss.config.js and tailwind.config.js
// Keep only the Vite React plugin here.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})


