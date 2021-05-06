const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  distDir: 'build',
  assetPrefix:  isProduction? 'https://denredsky.github.io/wedding' : '',
  basePath: isProduction ? 'https://denredsky.github.io/wedding' : '',
  future: {
    webpack5: true
  }
}
