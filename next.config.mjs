/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    return config; // Make sure to return the modified config
  },
  images: {
    domains: [
      'utfs.io',
      'res.cloudinary.com',
      'kachabazar-store-nine.vercel.app',
      'i.ibb.co',
    ],
  },
  experimental: {
    middlewarePrefetch: true,
  },
};

export default nextConfig;
