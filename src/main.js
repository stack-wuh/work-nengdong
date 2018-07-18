// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from '../static/js/index.min.js'
import '../static/element-default/index.css'
import '../static/css/base.css'
import '../static/css/base.less'
import '../static/css/font/iconfont.css'
import store from './vuex/store'
import _g from '../static/js/global'
import apiMethods from '../static/js/http'
import vueEventCalendar from 'vue-event-calendar'
import E from 'wangeditor'

Vue.use(ElementUI)

Vue.prototype.$http = apiMethods
Vue.prototype.$store = store
Vue.config.productionTip = false

window.axios = axios
window._g = _g
window.store = store
window.$bus = new Vue()

router.beforeEach((to,from,next)=>{
  const userId = sessionStorage.getItem('userId')
  if(to.name != 'login'){
    if(userId){
      next()
    }else{
      router.push({name:'login'})
    }
  }
  next()
})

axios.interceptors.request.use((config)=>{
  store.commit('changeLoading',{state:true})
  return config
})
axios.interceptors.response.use((config)=>{
  store.commit('changeLoading',{state:false})
  return config
})

//开发地址
// window.rootPath = '/adminapi'
//发布地址
window.rootPath = ''

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.filter('format',(value)=>{
  let date = new Date(value)
  let year = date.getFullYear() , month = date.getMonth() + 1 , day = date.getDate()
    return year +'-'+ month +'-'+ day 
})
Vue.filter('trueType',value=>{
  return value == 1 ? true : false
})

Vue.use(vueEventCalendar, {locale: 'zh', color: '#00998D'})