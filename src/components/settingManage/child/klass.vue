<template>
  <section class="wrapper">
    <e-table type="klass" :info="info" />
  </section>  
</template>

<script>
  import ETable from '@/components/common/table'
  const list = [
    {
      name:'班级名称1'
    },
    {
      name:'班级名称2'
    }
  ]
  export default{
    components:{
      ETable
    },
    data(){
      return{
        info:{
          type:'klass',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
