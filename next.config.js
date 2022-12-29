/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  nextConfig,
};
