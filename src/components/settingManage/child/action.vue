<template>
  <section class="wrapper">
    <e-table type="actions" :info="info" />
  </section>
</template>

<script>
  import ETable from '@/components/common/table'
  const list = []
  export default{
    components:{
      ETable
    },
    data(){
      return{
        info:{
          type:'actions',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
