const { withContentlayer } = require('next-contentlayer');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules');

const withTranspiler = withTM(['react-github-btn']);

/** @type {import('next').NextConfig} */
module.exports = withTranspiler(
  withContentlayer()({
    eslint: {
      dirs: ['src'],
    },

    reactStrictMode: true,

    // Uncoment to add domain whitelist
    images: {
      domains: [
        'images.unsplash.com',
        'i.scdn.co',
        'spotify.com',
        'imjes.se',
        'unavatar.now.sh',
        'unavatar.io',
        'lh3.googleusercontent.com',
        'cdn.discordapp.com',
      ],
    },

    // SVGR
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              icon: true,
            },
          },
        ],
      });

      return config;
    },
  })
);
