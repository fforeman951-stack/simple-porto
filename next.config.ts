import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  basePath: '/simple-porto',
  assetPrefix: '/simple-porto/',
};

export default nextConfig;
