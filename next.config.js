/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { EDITOR_API: process.env.EDITOR_API },
};

module.exports = nextConfig;
