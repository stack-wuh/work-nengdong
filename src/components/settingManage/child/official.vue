<template>
  <section class="wrapper">
    <search @propKey="propKey" @confirm="fetchData" type="7" />
    <e-table @getDelMsg="getDelMsg" type="official" :info="info" />
    <bottom type="pagination" :total="total" @getCurrentPage="getCurrentPage" />
  </section>
</template>

<script>
import Search from '@/components/common/search'
import ETable from '@/components/common/table'
import Bottom from '@/components/common/bottom'
  export default{
    components:{
      Search,
      ETable,
      Bottom
    },
    data(){
      return{
        info:{
          type:'official',
          list:['1','2']
        },
        total:0,
        page:1
      }
    },
    computed:{
      submitState(){
        return this.$store.state.submitState
      }
    },
    watch:{
      submitState(e){
        e && this.fetchData()
      }
    },
    methods:{
      getCurrentPage(e){
        this.page = e
        this.fetchData()
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      propKey(e){
        this.fetchData(e)
      },
      fetchData(title){
        this.$http('SchoolFellow/ShowActivity_Official',{official_name:title,pageNo:this.page}).then(res=>{
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
