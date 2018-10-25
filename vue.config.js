module.exports = {
    productionSourceMap: false,
    configureWebpack: {
    output: {
        filename: "js/order_manager.js",
    },
      optimization: {
        splitChunks: false
      }
    }
  }