const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  assetPrefix:  isProduction? 'https://denredsky.github.io/wedding' : '',
  future: {
    webpack5: true
  },
  basePath: isProduction ? '/wedding' : '',
  pwa: {
    dest: 'public'
  }
});
