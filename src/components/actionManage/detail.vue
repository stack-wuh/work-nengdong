<template>
    <section class="wrapper">
      <search  type='2'/>
      <section class="content">
        <p class="nav-title">当前位置：活动管理>活动列表>活动详情</p>

        <section class="list-content">
          <ul>
            <li>
              <span></span>
              <h3>活动标题</h3>
              <p>
                <img src="../../../static/img/icon-share.png" alt="icon-share">
                <img src="../../../static/img/icon-edit.png" alt="icon-share">
                <img src="../../../static/img/icon-delete.png" alt="icon-share">
              </p>
            </li>
            <li>
              <span>类型：</span>校友活动
              <span>组织者：</span>校友活动
              <span>人数：</span>57/100
            </li>
            <li>
              <span>时间:</span>2018-01-01 14:00
              <span>地点:</span>地点
            </li>
            <li>
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
            </li>
            <li><span>参与费用:</span>100/人</li>
            <li><span>参与要求:</span>100/人</li>
            <li><span>活动介绍:</span>100/人</li>
            <li><span>负责人:</span>100/人</li>
            <li><span>联系方式:</span>100/人</li>
            <li><span>手机号:</span>100/人</li>
            <li><span>邮箱:</span>100/人</li>
            <li><span>QQ:</span>100/人</li>
            <li><span>QQ群:</span>100/人</li>
            <li><span>微信:</span>100/人</li>
            <li><span>备注:</span>100/人</li>
          </ul>
        </section>
        <p><span>报名详情</span><span>导出报名表</span></p>
        <e-table class="el-table" type="action" :info="info"></e-table>

      </section>
    </section>
</template>

<script>
import Search from '@/components/common/search'
import ETable from '@/components/common/table'
const list = [
  {
    name:'张晓晓',
    identity:'教职工',
    classes:'能动10111',
    phone:'13323233232'
  },
  {
    name:'张晓晓',
    identity:'教职工',
    classes:'能动10111',
    phone:'13323233232'
  }
]
  export default{
    components:{
      Search,
      ETable
    },
    data(){
      return{
        info:{
          type:'action',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .list-content{
    margin:20px 0 10px 0;
    border:1px solid #eee;
    ul{
      padding:0 10px;
      box-sizing: border-box;
      border-bottom:1px solid #eee;
      li{
        margin:10px 0;
        padding: 0 15px;
        color: #666;
        span{
          padding-right:5px;
          color: #333;
        }
        span ~ span{
          margin-left:20px;
        }
      }

      li:first-of-type{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3{
          margin-left:70px;
        }
        p{
          img{
            margin:0 10px;
          }
          img:hover{
            cursor:pointer;
          }
        }
      }
      li:nth-child(2),
      li:nth-child(3),
      li:nth-child(4){
        text-align:center;
      }
      li:nth-child(4){
        img{
          width: 170px;
          height:112px;
          margin-right:20px;
        }
      }
    }
  }
  .el-table{
    width: 100%;
    border:1px solid red;
  }
</style>
