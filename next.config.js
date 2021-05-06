const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix:  isProduction? 'https://denredsky.github.io/wedding' : '',
  future: {
    webpack5: true
  }
}
