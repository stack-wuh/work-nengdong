<template>
  <section class="wrapper">
    <h3>校友端<span>管理平台</span></h3>
    <ul>
      <li @click="handleClick(item,$event)" :class="{'active' : item.active}" v-for="(item,index) in menuList" :key="index">
        <span>{{item.name}}</span>
        <subnav v-if="list.length>0" v-show="item.active" class="sub-list" :subList="list" />
      </li>
    </ul>
  </section>  
</template>

<script>
import Subnav  from '@/components/common/subnav'
  export default{
    components:{
      Subnav
    },
    data(){
      return{
        menuList:[
          {
            navIcon:'',
            name:'消息中心',
            subList:[],
            tips:0,
            urlPath:'',
            active:false,
          },  
          {
            navIcon:'',
            name:'校友管理',
            subList:[],
            tips:0,
            urlPath:'',
            active:false
          },              
          {
            navIcon:'',
            name:'活动管理',
            urlPath:'',
            subList:[
              {
                name:'活动列表',
                urlPath:''
              },
              {
                name:"待审核活动",
                urlPath:''
              }
            ],
            tips:0,
            active:false,
          },              
          {
            navIcon:'',
            name:'黄页管理',
            active:false,
            subList:[
              {
                name:'杰出校友名录',
                urlPath:''
              },
              {
                name:'校友会黄页',
                urlPath:''
              },
              {
                name:'院校黄页',
                urlPath:''
              },
              {
                name:'待审核校友会',
                urlPath:''
              }
            ],
            tips:0,
            urlPath:''
          },              
          {
            navIcon:'',
            name:'互联互助',
            active:false,
            subList:[
              {
                name:'消息列表',
                urlPath:''
              },
              {
                name:'待审核列表',
                urlPath:''
              }
            ],
            tips:0,
            urlPath:''
          },             
          {
            navIcon:'',
            name:'联系学院',
            subList:[],
            tips:0,
            urlPath:'',
            active:false,
          },            
          {
            navIcon:'',
            name:'校友捐赠',
            subList:[],
            tips:0,
            urlPath:'',
            active:false,
          },            
          {
            navIcon:'',
            name:'系统设置',
            subList:[
              {
                name:'入学年份',
                urlPath:''
              },
              {
                name:'专业',
                urlPath:''
              },
              {
                name:'班级',
                urlPath:''
              },
              {
                name:'活动类型',
                urlPath:''
              },
              {
                name:'官方组织',
                urlPath:''
              },
              {
                name:'权限设置',
                urlPath:''
              },
              { 
                name:'校友捐赠公告',
                urlPath:''
              },
              {
                name:'联系学院',
                urlPath:''
              },
              {
                name:'互帮互助公告',
                urlPath:''
              },
              {
                name:'互帮互助类型',
                urlPath:''
              }
            ],
            tips:0,
            urlPath:'',
            active:false,
          },            
        ],
        list:[]
      }
    },
    methods:{ 
      handleClick(data,$event){
        data.active = true
        this.list = data.subList
        this.menuList.map(item=>{
          if(item.name !== data.name){
            item.active = false
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
      width: 100%;
      font-size: 20px;
      color: #fff;
      text-align: center;
      
      li{
        position:relative;
        height: 60px;
        line-height: 60px;

        .sub-list{
          position: relative;
          right:-100%;
          top:-60px;
          width: 180px !important;
          height:100% !important;
          background-color: #fff;
          box-sizing: border-box;
        }
      }

      li.active,
      li:hover{
        background-color: #00776E;
        transition: all .5s linear;
      }
    }
  }
</style>
