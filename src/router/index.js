import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/loginManage/login'
import Home from '@/components/home'

const FirendIndex  = resolve =>require(['@/components/firendManage/index'],resolve)
const FirendDetail = resolve => require(['@/components/firendManage/detail'],resolve)

const ActionIndex = resolve => require(['@/components/actionManage/index'],resolve)
const ActionDetail = resolve => require(['@/components/actionManage/detail'],resolve)
const ActionItem  = resolve => require(['@/components/actionManage/action'],resolve)
const ActionList = resolve => require(['@/components/actionManage/list'],resolve)
const ActionListDetail = resolve => require(['@/components/actionManage/listDetail'],resolve)

const PagesIndex = resolve => require(['@/components/pagesManage/index'],resolve)
const PagesDetail = resolve => require(['@/components/pagesManage/detail'],resolve)
const PagesNew = resolve => require(['@/components/pagesManage/new'],resolve)
const PagesSchool = resolve => require(['@/components/pagesManage/school'],resolve)

const ConcatIndex = resolve => require(['@/components/concatManage/index'],resolve)
const ConcatDetail = resolve => require(['@/components/concatManage/detail'],resolve)

const DonateIndex = resolve => require(['@/components/donateManage/index'],resolve)

const SettingIndex = resolve => require(['@/components/settingManage/index'],resolve)
const SettingYear = resolve => require(['@/components/settingManage/child/year'],resolve)
const SettingConcat = resolve => require(['@/components/settingManage/child/concat'],resolve)
const SettingAction = resolve => require(['@/components/settingManage/child/action'],resolve)
const SettingHelp = resolve => require(['@/components/settingManage/child/help'],resolve)
const SettingFirends = resolve => require(['@/components/settingManage/child/firends'],resolve)
const SettingMajor = resolve => require(['@/components/settingManage/child/major'],resolve)
const SettingKlass = resolve => require(['@/components/settingManage/child/klass'],resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      redirect:'/firend',
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
        },
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
          path:'/action/detail/:id',
          name:'actionDetail',
          component:ActionDetail
        },
        {
          path:'/action/active',
          name:'actionItem',
          component:ActionItem
        },
        {
          path:'/action/list/:type',
          name:'actionList',
          component:ActionList,
        },
        {
          path:'/action/list/detail',
          name:'actionListDetail',
          component:ActionListDetail
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/pages',
          name:'pages',
          component:PagesIndex
        },
        {
          path:'/pages/detail/:id/:sid',
          name:'pagesDetail',
          component:PagesDetail
        },
        {
          path:'/pages/new',
          name:'pagesNew',
          component:PagesNew
        },
        {
          path:'/pages/school',
          name:'pagesSchool',
          component:PagesSchool
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/concat',
          name:'concat',
          component:ConcatIndex
        },
        {
          path:'/concat/detail',
          name:'concatDetail',
          component:ConcatDetail
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/donate',
          name:'donate',
          component:DonateIndex,
        }
      ]
    },
    {
      path:'/',
      name:"home",
      component:Home,
      children:[
        {
          path:'/setting',
          name:'setting',
          redirect:'/setting/year',
          component:SettingIndex,
          children:[
            {
              path:'/setting/year',
              name:'year',
              component:SettingYear
            },
            {
              path:'/setting/concat',
              name:'settingConcat',
              component:SettingConcat
            },
            {
              path:'/setting/action',
              name:'settingAction',
              component:SettingAction
            },
            {
              path:'/setting/help',
              name:'settingHelp',
              component:SettingHelp
            },
            {
              path:'/setting/firends',
              name:'settingFirends',
              component:SettingFirends
            },
            {
              path:'/setting/major',
              name:'major',
              component:SettingMajor
            },
            {
              path:'/setting/klass',
              name:'klass',
              component:SettingKlass
            }
          ]
        }
      ]
    }
  ]
})
