import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'funailog.assets.newt.so',
      },
    ],
  },
  /* config options here */
}

export default nextConfig
