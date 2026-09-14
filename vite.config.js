import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Relative assets support both username.github.io and repository subpaths.
export default defineConfig({ plugins: [react()], base: "./" });
