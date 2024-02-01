import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@header": path.resolve(__dirname, "./src/components/Header"),
      "@paymentDetails": path.resolve(__dirname, "./src/store/paymentDetails"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
