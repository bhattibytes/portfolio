const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pngpress.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
