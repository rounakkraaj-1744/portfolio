import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fonts.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
