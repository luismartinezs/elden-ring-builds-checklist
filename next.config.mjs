import ReactComponentName from "react-scan/react-component-name/webpack";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

/** @type {import("next").NextConfig} */
const config = {
  // Static export, served by the Cloudflare Worker in ./worker (see wrangler.jsonc).
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },

  webpack: (config) => {
    config.plugins.push(ReactComponentName({}));
    return config;
  },
};

export default withPWA(config);
