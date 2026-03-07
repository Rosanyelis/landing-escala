import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig(({ mode }) => ({
  base: "./",
  plugins: [
    react(),

    // Solo analizar bundle en build de producción
    mode === "production" &&
      visualizer({
        open: false, // We use "start dist/stats.html" natively in package.json
        gzipSize: true,
        brotliSize: true,
        filename: "dist/stats.html",
        title: "Landing Page Bundle Analysis",
      }),

    // Optimización de imágenes
    viteImagemin({
      mozjpeg: {
        quality: 80,
        progressive: true,
      },
      pngquant: {
        quality: [0.7, 0.9],
        speed: 4,
      },
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ].filter(Boolean),

  build: {
    target: "esnext",
    cssCodeSplit: true,
    sourcemap: mode === "development",

    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": [
            "react",
            "react-dom",
            "react-router-dom",
            "react-helmet-async",
          ],
          "vendor-motion": ["framer-motion"],
          "vendor-forms": ["react-hook-form"],
          "vendor-ui": ["@headlessui/react", "lucide-react"],
        },
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          let ext = "ext";
          if (assetInfo.name) {
            const info = assetInfo.name.split(".");
            ext = info[info.length - 1];
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },

    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
}));
