import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static export into the `out` directory
 
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
};

export default nextConfig;
