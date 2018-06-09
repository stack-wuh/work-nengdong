<template>
  <section class="wrapper">
    <search @propKey="propKey" @confirm="fetchData" type="7" />
    <e-table type="klass" :info="info" @getDelMsg="getDelMsg" />
    <bottom @getCurrentPage="getCurrentPage" type="pagination" :total="total" />
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
          type:'klass',
          list:list,
        },
        pageNo:1,
        total:0
      }
    },
    computed:{
      submitState(){
        return this.$store.state.submitState
      }
    },
    watch:{
      submitState:function(e){
        console.log(e)
        e && this.fetchData()
      }
    },
    methods:{
      propKey(e){
        this.fetchData(e)
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      getCurrentPage(e){
        this.pageNo = e
        this.fetchData()
      },
      fetchData(title){
        this.$http('SchoolFellow/ShowStudent_Info_Class',{pageNo:this.pageNo,class_name:title}).then(res=>{
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
