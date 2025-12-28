import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: true,  // 👈 allow external devices
    port: 5173   // optional: default port
  },
})
