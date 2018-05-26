<template>
  <section class="wrapper">
    <search type='2' />

    <div class="content">
      <p class="nav-title">当前位置: 校友管理>校友详情</p>
      <nav class="nav flex-box">
        <span class="btn active">毕业档案</span>
        <span class="btn">在校档案</span>
        <span class="empty"></span>
        <span class="info">移出杰出校友名录</span>
        <span class="success">导出个人信息</span>
        <span class="default">编辑</span>
        <span class="danger">删除</span>
      </nav>
      <ul class="list-content">
        <li>
          <img src="../../../static/img/logo.png" alt="avatar">
          <div>
            <h3>张晓晓</h3>
            <div>
              <span>入学年份:<span>2013级</span></span>
              <span>专业班级:<span>能动</span></span>
              <span>学号:<span>20180001</span></span>
              <span>身份证号:<span>42282319911026382</span></span>
            </div>
          </div>
        </li>
        <li>
          <h3>基础信息</h3>
          <div>
            <span>手机号：<span>1111111</span></span>
            <span>邮箱：<span>1111111</span></span>
            <span>QQ：<span>1111111</span></span>
            <span>微信：<span>1111111</span></span>
            <span>所在地：<span>1111111</span></span>
            <span>具体地址：<span>1111111</span></span>
          </div>
        </li>
        <li>
          <h3>就业单位</h3>
          <div>
            <span>用人单位名称:<span>武汉市刷卡机有限公司</span></span>
            <span>单位性质:<span>民营</span></span>
            <span>单位所在行业:<span>武汉市刷卡机有限公司</span></span>
            <span>工作职位类别:<span>武汉市刷卡机有限公司</span></span>
            <span>岗位名称:<span>武汉市刷卡机有限公司</span></span>
            <span>起薪:<span>武汉市刷卡机有限公司</span></span>
          </div>
        </li>
        <li>
          <h3>升学档案</h3>
          <div>
            <span>层次:<span>硕士</span></span>
            <span>学校:<span>武汉理工学院</span></span>
            <span>院系:<span>能动学院</span></span>
            <span>专业:<span>20110</span></span>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import '../../../static/css/base.less'
  export default{
    components:{
      Search
    },
    data(){
      return{

      }
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
