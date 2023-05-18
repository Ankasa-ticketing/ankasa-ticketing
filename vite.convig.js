import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsDir: "assets",
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
