/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {    
    return config; // Make sure to return the modified config
  },
};

export default nextConfig;
