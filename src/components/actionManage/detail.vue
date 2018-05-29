<template>
    <section class="wrapper">
      <search  type='2'/>
      <section class="content">
        <p class="nav-title">当前位置：活动管理>活动列表>活动详情</p>

        <action-info />
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
