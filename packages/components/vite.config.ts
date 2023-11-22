import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts"; 


export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "mw-ui",
      fileName: "mw-ui",
    },
  },
});
