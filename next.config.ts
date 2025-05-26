import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/camellia",
  assetPrefix: "/camellia/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  output: "export",
  distDir: "dist",
};

export default nextConfig;
