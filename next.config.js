/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: ['Jason_Bhatti-Resume.pdf', 'HRCertificate.pdf', 'Testimonials.pdf'],
        },
      }
    });
    return config;
  },
  images: {
    domains: ['pngpress.com'],
  },
  nextConfig
}
