import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/loginManage/login'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
