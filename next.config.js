/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['firebasestorage.googleapis.com', 'topebox-news.appspot.com', 'www.topebox.com'],
  },
  nextConfig,
};
