import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',

  // basePath: '/simple-porto',
  // assetPrefix: '/simple-porto/',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
