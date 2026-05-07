import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dwvmjpgxh/image/upload/**",
      },
    ],
  },
};

export default nextConfig;