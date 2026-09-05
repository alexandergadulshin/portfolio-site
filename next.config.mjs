/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin file tracing to this folder so a stray lockfile in a parent
  // directory does not change the build root.
  outputFileTracingRoot: import.meta.dirname,
};
export default nextConfig;
