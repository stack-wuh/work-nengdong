<template>
  <section class="wrapper">
    <search @propKey="propKey" @confirm="fetchData" type="7"/>
    <e-table type="concat" @getDelMsg="getDelMsg" :info="info" />
  </section>  
</template>

<script>
  import ETable from '@/components/common/table'
  import Search from '@/components/common/search'
  const list = []
  export default{
    components:{
      ETable,
      Search
    },
    data(){
      return{
        info:{
          type:'concat',
          list:list
        }
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
      propKey(e){
        this.fetchData(e)
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      fetchData(title){
        this.$http('SchoolFellow/getContact_College',{name:title}).then(res=>{
          this.info.list = res.data
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
