module.exports = {
  distDir: 'build',
  assetPrefix:  process.env.NODE_ENV === 'production' ? 'https://denredsky.github.io/wedding' : '',
  future: {
    webpack5: true
  }
}
