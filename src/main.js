// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from '../static/js/index'
import '../static/element-default/index.css'
import '../static/css/base.css'
import '../static/css/base.less'
import '../static/css/font/iconfont.css'

Vue.use(ElementUI)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
