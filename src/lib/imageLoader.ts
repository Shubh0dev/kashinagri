/**
 * Custom image loader for Next.js static export deployed to GitHub Pages.
 *
 * Problem: When `next/image` is used with `unoptimized: true` in a static
 * export, it writes `src` attributes verbatim to the HTML — it does NOT
 * automatically prepend `basePath`. On GitHub Pages the site lives at
 * /kashinagri/, so bare /images/... paths resolve to the domain root and 404.
 *
 * Solution: This loader intercepts every `next/image` src call:
 *  - For external URLs (http/https) it returns them unchanged.
 *  - For local paths it prepends the NEXT_PUBLIC_BASE_PATH env variable,
 *    which is set to "" in dev and "/kashinagri" for production builds.
 *
 * Usage: configured in next.config.ts via images.loaderFile.
 */

interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function githubPagesImageLoader({
  src,
}: ImageLoaderParams): string {
  // External URLs (unsplash, etc.) — return as-is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // For local images, prepend the basePath.
  // NEXT_PUBLIC_BASE_PATH is "" in dev and "/kashinagri" in production builds.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}
