/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
    ],
  },

  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
