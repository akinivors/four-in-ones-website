import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root explicitly: an unrelated package-lock.json in the
    // parent directory (outside this project) was making Turbopack guess wrong.
    root: __dirname,
  },
};

export default nextConfig;
