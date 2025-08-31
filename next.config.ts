// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.catbox.moe',
      },
    ],
  },
  typescript: {
    // Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

