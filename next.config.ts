import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },
  // Thêm dòng này để thỏa mãn Turbopack, dù ta dùng Webpack ở dưới
  turbopack: {}, 
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;