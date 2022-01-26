import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
});
