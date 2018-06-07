<template>
  <section class="wrapper">
    <h3>校友端<span>管理平台</span></h3>
    <ul>
      <li v-on:mouseover="mouseOver(item,$event)" v-on:mouseout="mouseOut(item,$event)" @click.stop="handleClick(item,$event)" :class="{'active' : item.active}" v-for="(item,index) in menuList" :key="index">
        <img class="nav-icon" :src="item.navIcon" alt="nav-icon">
        <span>{{item.name}}</span>
        <i :class="[item.active ? 'my-icon-moreunfold' : 'my-icon-more',item.subList.length>0 ? 'full':'empty']"></i>
        
        <transition name="fade">
          <subnav  v-show="item.active && format.length>0" :class="[list.length > 6 ? 'sub-list-other sub-list' : 'sub-list']" :subList="format" />
        </transition>
      </li>
    </ul>
  </section>  
</template>

<script>
import Subnav  from '@/components/common/subnav'
const iconRootPath = '../../../static'
  export default{
    components:{
      Subnav
    },
    data(){
      return{
        iconRootPath:iconRootPath,
        menuList:[
          {
            navIcon:iconRootPath + '/img/index-list1.png',
            name:'消息中心',
            subList:[],
            tips:0,
            urlPath:'/message',
            active:false,
            mouse:false
          },  
          {
            navIcon:iconRootPath + '/img/index-list2.png',
            name:'校友管理',
            subList:[],
            tips:0,
            urlPath:'/firend/firend',
            active:false,
            mouse:false,
          },              
          {
            navIcon:iconRootPath + '/img/index-list3.png',
            name:'活动管理',
            urlPath:'/action',
            subList:[
              {
                name:'活动列表',
                urlPath:'/action'
              },
              {
                name:"待审核活动",
                urlPath:'/action/list/' + 'action'
              }
            ],
            tips:0,
            active:false,
            mouse:false
          },              
          {
            navIcon:iconRootPath + '/img/index-list4.png',
            name:'黄页管理',
            active:false,
            mouse:false,
            subList:[
              {
                name:'杰出校友名录',
                urlPath:'/firend/' + 'pages'
              },
              {
                name:'校友会黄页',
                urlPath:'/pages'
              },
              {
                name:'院校黄页',
                urlPath:'/pages/school'
              },
              {
                name:'待审核校友会',
                urlPath:'/action/list/'+ 'pages'
              }
            ],
            tips:0,
            urlPath:'/pages'
          },              
          {
            navIcon:iconRootPath + '/img/index-list7.png',
            name:'互联互助',
            active:false,
            mouse:false,
            subList:[
              {
                name:'消息列表',
                urlPath:'/concat'
              },
              {
                name:'待审核列表',
                urlPath:'/action/list/' + 'concat'
              }
            ],
            tips:0,
            urlPath:'/concat'
          },             
          {
            navIcon:iconRootPath + '/img/index-list5.png',
            name:'联系学院',
            subList:[],
            tips:0,
            urlPath:'/school',
            active:false,
            mouse:false
          },            
          {
            navIcon:iconRootPath + '/img/index-list6.png',
            name:'校友捐赠',
            subList:[],
            tips:0,
            urlPath:'/donate',
            active:false,
            mouse:false
          },            
          {
            navIcon:iconRootPath + '/img/index-list8.png',
            name:'系统设置',
            subList:[
              {
                name:'入学年份',
                urlPath:'/setting/year'
              },
              {
                name:'专业',
                urlPath:'/setting/major'
              },
              {
                name:'班级',
                urlPath:'/setting/klass'
              },
              {
                name:'活动类型',
                urlPath:'/setting/type'
              },
              {
                name:'官方组织',
                urlPath:'/setting/official'
              },
              {
                name:'联系学院',
                urlPath:'/setting/concat'
              },
              { 
                name:'校友捐赠公告',
                urlPath:'/setting/firends'
              },
              {
                name:'互帮互助公告',
                urlPath:'/setting/helpList'
              },
              {
                name:'互帮互助类型',
                urlPath:'/setting/helpType'
              }
            ],
            tips:0,
            urlPath:'/setting',
            active:false,
            mouse:false
          },            
        ],
        list:[]
      }
    },
    computed:{
      format(){
        return this.list
      }
    },
    methods:{ 
      mouseOver(data,$event){
        data.active = true
        this.list = data.subList
      },
      mouseOut(data,$event){
        data.active = false
        this.list = []
      },
      handleClick(data,$event){
        // data.active = true
        // this.list = data.subList
        this.menuList.map(item=>{
          if(item.name == data.name){
            // item.active = false
            this.$router.push(item.urlPath)
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .wrapper{
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width:220px;
    height: 100%;
    color: #fff;
    background-color: #2F3534;
    h3{
      align-self:center;
      width:100%;
      height: 80px;
      line-height: 80px;
      color: #E0E0E0;
      background-color:#1B1D1D;
      font-size: 28px;
      font-weight: normal;
      text-align: center;
      span{
        margin-left: 5px;
        font-size: 18px;
        font-weight: normal;
      }
    }

    ul{
      flex:1;
      width: 220px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      
      li{
        position:relative;
        height: 60px;
        line-height: 60px;
        user-select: none;
        .nav-icon{
          width: 24px;
          height:24px;
          padding-top:5px;
          margin-right: 5px;
          vertical-align: -4px;
        }

        .my-icon-more{
          margin-left: 10px;
        }
        .sub-list{
          position: relative;
          right:-100%;
          top:-60px;
          height: 100%;
          background-color: #E3EEED;
          width: 180px !important;
          height:100% !important;
          background-color: #fff;
          box-sizing: border-box;
          border-radius: 4px;
        }
        .sub-list-other{
          top:-320px !important;
        }

        .fade-enter-active , .fade-leave-active{
          transition: opacity .5s;
        }
        .fade-enter , .fade-leave-to{
          opacity: 0;
        }
      }
      li:hover{
        cursor:pointer;
      }
      li.active,
      li:hover{
        background-color: #00776E;
        transition: all .5s linear;
      }
    }

    .full{
      opacity: 1;
    }
    .empty{
      opacity: 0;
    }
  }
</style>
