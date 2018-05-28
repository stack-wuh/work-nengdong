<template>
  <section class="wrapper">
    <e-table type="actions" :info="info" />
  </section>
</template>

<script>
  import ETable from '@/components/common/table'
  const list = [
    {
      type:'校友活动',
      color:'#002211',
      setting:[
        {
          stu:0,
          tea:0,
          fir:0
        }
      ],
    },
    {
      type:'学院活动',
      color:'#002211',
      setting:[
        {
          stu:1,
          tea:1,
          fir:1
        }
      ]
    }
  ]
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
