<template>
  <section class="wrapper">
    <search  type='7' />
    <e-table type="major" :info="info" />
  </section>
</template>

<script>
import ETable from '@/components/common/table'
import Search from '@/components/common/search'
const list = [
  {
    name:'轮机',
    color:"#333333"
  },
  {
    name:'油气',
    color:"#333333"
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
          type:'major',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
