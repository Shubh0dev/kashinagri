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
    // Custom loader that prepends basePath for local images in static export.
    // next/image with unoptimized:true writes src verbatim into HTML, bypassing basePath.
    // The loader prepends NEXT_PUBLIC_BASE_PATH (/kashinagri in prod, empty in dev).
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
