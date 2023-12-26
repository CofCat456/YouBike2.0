/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/site',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/site',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
