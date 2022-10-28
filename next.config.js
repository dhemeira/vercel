/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: false,
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  swcMinify: true,
});

