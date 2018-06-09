<template>
  <section class="wrapper">
    <search @confirm="confirm" @propKey="propKey" type="7" />
    <e-table @getDelMsg="getDelMsg" type="year" :info="info" />
    <bottom type="pagination" :total="total" @getCurrentPage="getCurrentPage" />
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ETable from '@/components/common/table'
  import Bottom from '@/components/common/bottom'
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
      ETable,
      Search,
      Bottom
    },
    data(){
      return{
        info:{
          type:'year',
          list:list
        },
        total:0,
        pageNo:1,
      }
    },
    computed:{
      submitState(){
        return this.$store.state.submitState
      }
    },
    watch:{
      submitState:function(e){
        e && this.fetchData()
      }
    },
    methods:{
      getCurrentPage(e){
        this.pageNo = e
        this.fetchData()
      },
      //获取所有入学年份
      fetchData(name){
        this.$http('SchoolFellow/getYear',{pageNo:this.pageNo,name:name}).then(res=>{
          this.info.list = res.data
          this.total = res.total
        })
      },
      confirm(e){
        this.fetchData(e)
      },
      propKey(e){
        this.fetchData(e)
      },
      //获取子组件删除操作的返回消息
      getDelMsg(e){
        e && this.fetchData()
      }
    },
    created(){
      this.fetchData()
    }
  }
</script>

<style lang="less" scoped>

</style>
