/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 5000,
      aggregateTimeout: 300,
    }

    return config
  },
}

module.exports = nextConfig
