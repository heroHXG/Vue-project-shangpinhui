
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import * as API from '@/api'
import '@/assets/scss/index.scss'


Vue.config.productionTip = false

// 引入全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button, MessageBox, Select } from 'element-ui';

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert


// //引入mockServe.js----mock数据
import '@/mock/mockServe'

// 引入表单校验插件
import '@/plugins/validate'

// 引入vue-lazyload插件
import '@/plugins/lazy-load'


new Vue({
	el:'#app',
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  }
})
