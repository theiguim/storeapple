/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'store.storeimages.cdn-apple.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
