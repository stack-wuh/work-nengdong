<template>
  <section class="wrapper">
    <search  type="7"/>
    <e-table type="concat" :info="info" />
  </section>  
</template>

<script>
  import ETable from '@/components/common/table'
  import Search from '@/components/common/search'
  const list = [
    {
      type:'寻求帮助',
      color:'#001122'
    },
    {
      type:'寻求帮助',
      color:'#002212'
    }
  ]
  export default{
    components:{
      ETable,
      Search
    },
    data(){
      return{
        info:{
          type:'concat',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
