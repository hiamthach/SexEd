/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'topebox-news.appspot.com', 'www.topebox.com'],
  },
  nextConfig,
};
