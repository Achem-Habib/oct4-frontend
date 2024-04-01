/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oct4-admin.onrender.com",
        port: "",
      },
    ],
  },
};
