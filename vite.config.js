import { defineConfig } from "vite"

// Minimal config for the existing static HTML/CSS/JS site.
// Vite serves index.html from the project root and picks up the
// /photos assets automatically. Nothing about the site is changed.
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
})
