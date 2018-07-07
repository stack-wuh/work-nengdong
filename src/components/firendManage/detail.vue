<template>
  <section class="wrapper">
    <search type='2' />
    <div class="content">
      <p class="nav-title">当前位置: 校友管理>校友详情</p>
      <nav class="nav flex-box">
        <span class="btn active">毕业档案</span>
        <span class="btn">在校档案</span>
        <span class="empty"></span>
        <span @click="handleClickAdd" class="info">添加至杰出校友名录</span>
        <span @click="export2excel" class="success">导出个人信息</span>
        <span @click="handleClickEdit" class="default">编辑</span>
        <span @click="handleClickDel" class="danger">删除</span>
      </nav>
      
      <ul class="list-content">
        <li>
          <img src="../../../static/img/logo.png" alt="avatar">
          <div>
            <h3>{{info.name}}</h3>
            <div>
              <span>入学年份:<span>{{info.school_age}}级</span></span>
              <span>专业班级:<span>{{info.line}}{{info.classes}}</span></span>
              <span>学号:<span>{{info.number}}</span></span>
              <span>身份证号:<span>{{info.no}}</span></span>
            </div>
          </div>
        </li>
        <li>
          <h3>基础信息</h3>
          <div>
            <span>手机号：<span>{{info.phone_number}}</span></span>
            <span>邮箱：<span>{{info.email}}</span></span>
            <span>QQ：<span>{{info.qq}}</span></span>
            <span>微信：<span>{{info.weixin}}</span></span>
            <span>所在地：<span>{{info.site_provinces}}{{info.site_cities}}{{info.site_areas}}</span></span>
            <span>具体地址：<span>{{info.address}}</span></span>
          </div>
        </li>
        <li>
          <h3>就业单位</h3>
          <div>
            <span>用人单位名称: <span>{{info.employment_archives && info.employment_archives.unit_name}}</span></span>
            <span>单位性质: <span>{{info.employment_archives && info.employment_archives.unit_property}}</span></span>
            <span>单位所在行业: <span>{{info.employment_archives && info.employment_archives.unit_way}}</span></span>
            <span>工作职位类别: <span>{{info.employment_archives && info.employment_archives.place_class}}</span></span>
            <span>岗位名称: <span>{{info.employment_archives && info.employment_archives.post_name}}</span></span>
            <span>起薪: <span>{{info.employment_archives && info.employment_archives.money}}</span></span>
          </div>
        </li>
        <li>
          <h3>升学档案</h3>
          <div v-for="(item,index) in info.advance_ArchivesList">
            <span>层次: <span>{{item.levels}}</span></span>
            <span>学校: <span>{{item.schools}}</span></span>
            <span>院系: <span>{{item.faculty}}</span></span>
            <span>专业: <span>{{item.line_text}}</span></span>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import '../../../static/css/base.less'
  const json2Excel = require('js-export-excel')
  export default{
    components:{
      Search
    },
    data(){
      return{
        info:[],
        advance:[]
      }
    },
    methods:{
      fetchData(){
        this.$http('SchoolFellow/showStudent_Info',{id:this.$route.params.id}).then(res=>{
          this.info = res.data[0]
          this.advance = res.data[0].advance_archives
        })  
      },
      //单击导出个人信息
      export2excel(){
        location = rootPath + '/SingleStuExcel?id=' + this.info.id
        console.log(location,rootPath)
      },
      //单击加入杰出校友
      handleClickAdd(){
        this.$http('/SchoolFellow/updateOutStanding',{id:this.info.id}).then(res=>{
          let error = res.error == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.msg)
        })
      },
      //单击编辑
      handleClickEdit(){
        this.$router.push({name:'firendAdd',params:{type:1,data:this.info}})
      },
      //单击删除
      handleClickDel(){
        this.$http('SchoolFellow/delStudent_Info',{id:this.info.id}).then(res=>{
          let error = res.error == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.msg)
          if(res.error == 0){
            setTimeout(()=>{
              this.$router.go(-1)
            },1000)   
          }
        })
      }
    },
    created(){
      this.fetchData()
    }
  }
</script>

<style lang="less" scoped>
  @base:#00998d;
  .content{
    .list-content{
      li{
        padding:20px 0;
        border-bottom:1px solid #eee;
        h3{
          height:15px;
          line-height:15px;
          padding-left:5px;
          border-left:4px solid @base;
        }
        div{
          display: flex;
          flex-wrap: wrap;
          margin-top:10px;
          span{
            margin-bottom:10px;
            margin-right:20px;
            color: #666;
            span{
              color: #333;
            }
          }
        }
      }
      li:first-of-type{
        display: flex;
        align-items: center;
        h3{
          border:none;
        }
        div{
          display: flex;
          flex-direction: column;

          div{
            display: flex;
            flex-direction: row;
          }
        }
        img{
          width: 100px;
          height:100px;
          border-radius: 50%;
        }
      }
    }

    .nav{
      margin-top:10px;
      padding-bottom:0px;
      border-bottom:1px solid @base;
      span{
        color: #fff;
      }
      span:hover{
        cursor: pointer;
      }
      span.btn{
        margin:0;
        color: @base;
        font-size: 16px;
        border-radius: 0;
        border-bottom:none;
      }
      span.empty ~ span{
        display: inline-block;
        padding:2px 5px;
        margin:0 5px;
      }
      span.btn.active{
        color: #fff;
        background-color: @base;
      }

    }
  }
</style>
