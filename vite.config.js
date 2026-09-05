import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "/versatility/2021/",
  resolve: {
    alias: {
      components: path.resolve(rootDir, "src/components"),
      content: path.resolve(rootDir, "src/content"),
      hooks: path.resolve(rootDir, "src/hooks"),
      theme: path.resolve(rootDir, "src/theme.js"),
      utils: path.resolve(rootDir, "src/utils.js"),
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    open: true,
  },
});
