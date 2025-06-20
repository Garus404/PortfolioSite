import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: "/PortfolioSite/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(), // можно оставить, если работает
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
