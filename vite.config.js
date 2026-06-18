import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep legacy `(max-width: …)` media query syntax instead of the modern
    // range form `(width <= …)`, which needs Safari 16.4+. Older iOS Safari
    // (e.g. in-app WeChat browsers on iOS 16.0–16.3) silently drops range
    // queries, breaking all responsive layout (nav fails to collapse, etc.).
    cssTarget: 'safari14',
  },
})
