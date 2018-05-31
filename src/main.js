// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from '../static/js/index'
import '../static/element-default/index.css'
import '../static/css/base.css'
import '../static/css/base.less'
import '../static/css/font/iconfont.css'
import store from './vuex/store'
import _g from '../static/js/global'
import apiMethods from '../static/js/http'

Vue.use(ElementUI)

Vue.prototype.$http = apiMethods
// Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

window.axios = axios
window._g = _g
window.store = store
window.$bus = new Vue()

axios.interceptors.request.use((config)=>{

  return config
})
axios.interceptors.response.use((config)=>{

  return config
})
window.rootPath = '/api/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
