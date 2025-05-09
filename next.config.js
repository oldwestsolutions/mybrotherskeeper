/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig; 