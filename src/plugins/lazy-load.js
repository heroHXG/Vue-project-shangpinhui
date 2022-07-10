
import Vue from 'vue'


// 引入vue插件
import VueLazyload from 'vue-lazyload'
// 配置项
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error:  require('@/assets/error.gif'),
    loading: require('@/assets/loading.gif'),
    attempt: 1
  })