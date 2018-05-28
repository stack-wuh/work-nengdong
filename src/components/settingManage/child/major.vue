<template>
  <section class="wrapper">
    <e-table type="major" :info="info" />
  </section>
</template>

<script>
import ETable from '@/components/common/table'
const list = [
  {
    name:'轮机'
  },
  {
    name:'油气'
  }
]
  export default{
    components:{
      ETable
    },
    data(){
      return{
        info:{
          type:'major',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
