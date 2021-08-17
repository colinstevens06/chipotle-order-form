module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss"; @import "@/assets/styles/_mixins.scss";`

      }
    }
  },
  pages: {
    index: {
      entry: './src/main.js',
      title: 'Chipotle Order Form'
    }
  }
}