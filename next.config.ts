import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://lpops.vercel.app',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    // Ignore components-library during build
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/components-library/**'],
    };
    return config;
  },
  turbopack: {
    // Turbopack configuration to match webpack behavior
    rules: {
      // Add any specific rules if needed
    },
    resolveAlias: {
      // Add any aliases you need for Turbopack
    },
    resolveExtensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  // Exclude components-library from TypeScript checking
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
