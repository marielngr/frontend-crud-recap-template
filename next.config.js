/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["unsplash.com", "upload.wikimedia.org", "loremflickr.com"],
  },
};

module.exports = nextConfig;
