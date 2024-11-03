/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {    
    return config; // Make sure to return the modified config
  },
  images: {
    domains: ['utfs.io', 'res.cloudinary.com'], // Add any other domains you need
  },
  experimental: {
    middlewarePrefetch: true, 
  },
};

export default nextConfig;
 