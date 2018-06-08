<template>
  <section class="wrapper">
    <search @confirm="fetchData" @propKey="propKey" type='7' />
    <e-table @getDelMsg="getDelMsg" type="major" :info="info" />
    <bottom :total="total" type="pagination" @getCurrentPage="getCurrentPage" />
  </section>
</template>

<script>
import ETable from '@/components/common/table'
import Search from '@/components/common/search'
import Bottom from '@/components/common/bottom'
const list = []
  export default{
    components:{
      ETable,
      Search,
      Bottom
    },
    data(){
      return{
        info:{
          type:'major',
          list:list
        },
        total:0,
        pageNo:1
      }
    },
    methods:{
      getCurrentPage(e){
        this.pageNo = e
        this.fetchData()
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      propKey(e){
        this.fetchData(e)
      },
      fetchData(title){
        this.$http('SchoolFellow/ShowStudent_Info_Line',{line_name:title}).then(res=>{
          this.info.list = res.data
          this.total = res.total
        })
      }
    },
    created(){
      this.fetchData()
    }
  }
</script>

<style lang="less" scoped>

</style>
