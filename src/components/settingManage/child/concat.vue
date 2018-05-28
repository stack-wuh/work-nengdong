<template>
  <section class="wrapper">
    <e-table type="concat" :info="info" />
  </section>  
</template>

<script>
  import ETable from '@/components/common/table'
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
      ETable
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
