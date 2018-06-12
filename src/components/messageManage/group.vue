<template>
  <section class="wrapper">
    <search @getClickMsg="getClickMsg" type="12" />
    <section class="content">
      <p class="nav-title">当前位置: 校友管理>群组</p>
      <e-table :info="info" type="group" />
      <bottom type="pagination" />
    </section>
  </section>
</template>

<script>
import Search from '@/components/common/search'
import ETable from '@/components/common/table'
import Bottom from '@/components/common/bottom'
const list = [
  {
    name:'aaa',
  },
  {
    name:'bbb'
  }
]
  export default{
    components:{
      ETable,
      Bottom,
      Search
    },
    data(){
      return{
        info:{
          type:'group',
          list:list
        },
        clickMsg:''
      }
    },
    watch:{
      clickMsg : 'fetchData'
    },
    methods:{
      getClickMsg(e){
        this.clickMsg = e
      },
      fetchData(){
        console.log('is fetchData')
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
