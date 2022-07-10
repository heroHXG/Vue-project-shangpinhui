
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: {
   
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      // 'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
      'Swiper': 'Swiper',
      'mock.js': 'mockjs'
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      // {src: '@/plugins/vue-lazyload', ssr: false}

    ]
  },

  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  }
}