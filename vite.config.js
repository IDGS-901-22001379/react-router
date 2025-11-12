// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: { enabled: true, type: "module" },
      includeAssets: [
        "web/favicon-16x16.png",
        "web/favicon-32x32.png",
        "web/apple-touch-icon.png",
      ],
      manifest: {
        name: "React Router PWA",
        short_name: "RR PWA",
        description: "App React Router con rutas protegidas y PWA",
        theme_color: "#0d6efd",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/login",
        icons: [
          {
            src: "/web/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/web/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          // opcionales:
          { src: "/web/icon-384x384.png", sizes: "384x384", type: "image/png" },
          { src: "/web/icon-144x144.png", sizes: "144x144", type: "image/png" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/api/"),
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 10,
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) =>
              url.origin.includes("cdn.jsdelivr.net") ||
              url.origin.includes("unpkg.com"),
            handler: "CacheFirst",
            options: {
              cacheName: "cdn-cache",
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
});
