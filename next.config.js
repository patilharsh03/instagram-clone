/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "images.unsplash.com",
      "cloudflare-ipfs.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
