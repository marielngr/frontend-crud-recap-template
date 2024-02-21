/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["unsplash.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "assets.example.com",
    //     port: "",
    //     pathname: "loremflickr.com/",
    //   },
    // ],
  },
};

module.exports = nextConfig;
