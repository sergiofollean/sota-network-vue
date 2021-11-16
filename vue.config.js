const Dotenv = require('dotenv-webpack');


module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },

  devServer: {
    // changeOrigin: true,
    // https: true,
    // proxy: 'https://sota-network.com/',
    // proxy: {
    //   '^/api': {
    //     target: 'https://api.binance.com',
    //     changeOrigin: true
    //   }
    // },
    clientLogLevel: "warning",
    hot: true,
    contentBase: "dist",

    compress: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: "/",
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    },
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ],
    node: {
      fs: "empty",
      dgram: "empty",
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap(options => {
  //       options.compilerOptions.preserveWhitespace = true;
  //       return options;
  //     });
  // },
  lintOnSave: false,
  transpileDependencies: ["vuetify"]
};
