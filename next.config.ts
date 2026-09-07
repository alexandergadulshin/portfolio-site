import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root here so a stray lockfile in a parent folder
  // does not change the build root.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
