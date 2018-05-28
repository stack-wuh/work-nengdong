<template>
  <section class="wrapper">
    <e-table type="year" :info="info" />
  </section>
</template>

<script>
  import ETable from '@/components/common/table'
  const list = [
    {
      year:'2010',
      is_site:0
    },
    {
      year:2011,
      is_site:1
    }
  ]
  export default{
    components:{
      ETable
    },
    data(){
      return{
        info:{
          type:'year',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
