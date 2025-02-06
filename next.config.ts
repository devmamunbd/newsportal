import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
 images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
        },
    ],
 },

};

export default nextConfig;
