<template>
  <section class="wrapper">
    <search @confirm="propKey" @propKey="propKey" type="7" />
    <e-table @getDelMsg="getDelMsg" :info="info" type="helpType" />
    <bottom :total='total' type="pagination" />
  </section>
</template>

<script>
  import Bottom from '@/components/common/bottom'
  import Search from '@/components/common/search'
  import ETable from '@/components/common/table'
  const list = []
  export default{
    components:{
      Bottom,
      Search,
      ETable
    },
    data(){
      return{
        info:{
          type:'helpType',
          list:list
        },
        page:1,
        total:0
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
      getDelMsg(e){
        e && this.fetchData()
      },
      propKey(e){
        this.fetchData(e)
      },
      fetchData(name){
        this.$http('SchoolFellow/getMutual_Help_Type',{name:name,pageNo:this.page}).then(res=>{
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
