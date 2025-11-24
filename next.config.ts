import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
    ],

    // Izinkan IP private
    dangerouslyAllowSVG: true,
    // allowFutureImage: true,
  },
};

export default nextConfig;
