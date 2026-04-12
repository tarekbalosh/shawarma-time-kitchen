/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (smallest), fallback to WebP, then source format.
    // next/image handles the Accept header negotiation automatically.
    formats: ['image/avif', 'image/webp'],

    // Match common device widths (mobile → 4K). The browser picks the
    // smallest image ≥ its rendered size from this list.
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Intermediate sizes used for fixed-width images (width/height props).
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache TTL (seconds). 60 days for production assets.
    minimumCacheTTL: 60 * 60 * 24 * 60,

    // Set to false to enable Next.js optimisation (required for
    // blur placeholders, automatic format conversion, and srcset generation).
    // Only set back to true if deploying to a host with no image server.
    unoptimized: false,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
