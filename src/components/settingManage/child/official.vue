<template>
  <section class="wrapper">
    <search @propKey="propKey" @confirm="fetchData" type="7" />
    <e-table @getDelMsg="getDelMsg" type="official" :info="info" />
  </section>
</template>

<script>
import Search from '@/components/common/search'
import ETable from '@/components/common/table'
  export default{
    components:{
      Search,
      ETable
    },
    data(){
      return{
        info:{
          type:'official',
          list:['1','2']
        }
      }
    },
    methods:{
      getDelMsg(e){
        e && this.fetchData()
      },
      propKey(e){
        this.fetchData(e)
      },
      fetchData(title){
        this.$http('SchoolFellow/ShowActivity_Official',{official_name:title}).then(res=>{
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
