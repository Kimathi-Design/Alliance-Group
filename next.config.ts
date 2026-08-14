import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    ...(isDev ? { unoptimized: true } : {}),
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
    turbopackFileSystemCacheForDev: false,
  },
  async headers() {
    return [
      {
        source: "/Enhancesoft-Proposal-Brian-Kimathi.pdf",
        headers: [
          { key: "Content-Type", "value": "application/pdf" },
          { key: "Cache-Control", "value": "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
