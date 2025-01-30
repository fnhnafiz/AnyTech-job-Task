import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/backgrounds/banner.jpg')",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
