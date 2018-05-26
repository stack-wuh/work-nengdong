import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/loginManage/login'
import Home from '@/components/home'

const FirendIndex  = resolve =>require(['@/components/firendManage/index'],resolve)
const FirendDetail = resolve => require(['@/components/firendManage/detail'],resolve)

const ActionIndex = resolve => require(['@/components/actionManage/index'],resolve)
const ActionDetail = resolve => require(['@/components/actionManage/detail'],resolve)

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
        },
        {
          path:'/firend/detail',
          name:'firendDetail',
          component:FirendDetail
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/action',
          name:'action',
          component:ActionIndex
        },
        {
          path:'/action/detail',
          name:'actionDetail',
          component:ActionDetail
        }
      ]
    }
  ]
})
