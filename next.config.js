/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
