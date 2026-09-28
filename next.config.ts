import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static hosting
  output: "export",

  // GitHub Pages serves this repo at /kashinagri/
  basePath: "/kashinagri",

  // Trailing slash ensures pages are served as directory/index.html
  // which GitHub Pages handles correctly without a server
  trailingSlash: true,

  images: {
    // Static export has no image optimization server; disable it
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
