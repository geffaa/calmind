import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'calmind-nine.vercel.app',
      },
    ],
  },
};

export default nextConfig;
