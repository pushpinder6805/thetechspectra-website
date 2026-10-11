/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Content is read from disk for dynamic routes and the not-found view.
    outputFileTracingIncludes: {
      "/*": ["./content/**/*"],
    },
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/images/favicon.png",
        permanent: true,
      },
      {
        source: "/favicon.png",
        destination: "/images/favicon.png",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/ai-integration",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
