import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Make generated asset URLs work for both custom domains and project subpaths.
  base: "./",
});
