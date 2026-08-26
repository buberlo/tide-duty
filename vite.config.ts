import { defineConfig } from 'vite';

/**
 * Vite configuration for Tide Duty.
 *
 * This project is a plain TypeScript canvas game, so no framework plugins
 * are required. The config only needs to give us a sensible local dev server,
 * a stable production build layout, and TypeScript-friendly module resolution.
 */
export default defineConfig({
  // Relative base so the built game can be served from any subpath
  // (for example, a local folder or a static hosting prefix).
  base: './',

  // Keep the project root explicit.
  root: '.',

  // The current source tree does not include a public/ directory.
  // Disabling it avoids unnecessary warnings during development.
  publicDir: false,

  server: {
    // Allow the second player to join from the same machine or nearby devices
    // during local testing.
    host: true,

    // Vite's default port. strictPort is left off so the dev server can
    // automatically pick the next free port if 5173 is already in use.
    port: 5173,
    strictPort: false,

    // Keep the terminal output clean; players can open the URL manually.
    open: false,

    // Useful when testing the built game locally or embedding it in another page.
    cors: true,

    // Canvas games often change assets frequently during development.
    headers: {
      'Cache-Control': 'no-cache',
    },
  },

  preview: {
    // Same host/port behavior for `npm run preview`.
    host: true,
    port: 4173,
    strictPort: false,
  },

  build: {
    // Standard output directory for production assets.
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,

    // A modern browser target is fine for a local co-op canvas game.
    target: 'es2020',

    // Source maps are helpful while tuning water/valve behavior.
    sourcemap: true,

    // Keep the default esbuild minifier.
    minify: 'esbuild',

    // The game is small, but this gives a little headroom before warnings.
    chunkSizeWarningLimit: 512,

    rollupOptions: {
      // The browser entry point is index.html.
      input: 'index.html',

      output: {
        // Deterministic, cache-friendly asset names.
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },

  resolve: {
    // Allow importing TypeScript modules without extensions in the source tree.
    extensions: ['.ts', '.js', '.mjs', '.json'],
  },

  css: {
    // Helpful when adjusting the HUD/panic overlay styling.
    devSourcemap: true,
  },

  optimizeDeps: {
    // No external runtime dependencies are expected in the initial build.
    include: [],
  },
});