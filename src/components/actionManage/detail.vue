<template>
    <section class="wrapper">
      <search  type='2'/>
      <section class="content">
        <p class="nav-title">当前位置：活动管理>活动列表>活动详情</p>

        <!-- <section class="list-content">
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
        </section> -->
        <action-info></action-info>
        <p><span>报名详情</span><span>导出报名表</span></p>
        <e-table class="el-table" type="action" :info="info"></e-table>

      </section>
    </section>
</template>

<script>
import Search from '@/components/common/search'
import ETable from '@/components/common/table'
import ActionInfo from '@/components/common/actionInfo'
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
      ETable,
      ActionInfo
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

  .el-table{
    width: 100%;
    border:1px solid red;
  }
</style>
