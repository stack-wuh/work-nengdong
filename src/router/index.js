import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/loginManage/login'
import Home from '@/components/home'

import FirendIndex from '@/components/firendManage/index'

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
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/firend',
          name:'firendIndex',
          component:FirendIndex
        }
      ]
    }
  ]
})
