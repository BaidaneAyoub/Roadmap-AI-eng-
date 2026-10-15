import { defineConfig } from "vite";
export default defineConfig({
  server: { headers: { "Cache-Control": "no-store" } },
  build: {
    target: "es2022",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom/client"],
          curriculum: ["./src/catalog.ts"],
        },
      },
    },
  },
});
