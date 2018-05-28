<template>
  <section class="wrapper">
    <search type="2" />
    <section class="content">
        <p class="nav-title">当前位置：黄业管理>校友会黄页>校友会详情</p>
        <action-info />
        <p class="el-title">活动</p>
        <e-table class="my-table" :info="info" type="pages" />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ActionInfo from '@/components/common/actionInfo'
  import ETable from '@/components/common/table'

  const info = {
    type:'pages',
    list:[
      {
        title:'活动标题',
        time:'2018-01-01'
      },
      {
        title:'活动标题1',
        time:'2018-02-02'
      }
    ]
  }
  export default{
    components:{
      Search,ActionInfo,ETable
    },
    data(){
      return{
        info:info
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
