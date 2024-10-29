import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'calmind-nine.vercel.app',
      },
    ],
    unoptimized: true, // Menonaktifkan optimisasi gambar
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
