<template>
  <section class="wrapper">
    <search type="9" />
    <e-table type="helpList" :info="info" />
  </section>
</template>


<script>
  import Search from '@/components/common/search'
  import ETable from '@/components/common/table'
  const list = []
  export default{
    components:{
      Search,
      ETable
    },
    data(){
      return{
        info:{
          type:'actions',
          list:list
        }
      }
    },
    methods:{
      fetchData(){
        this.$http('SchoolFellow/getMutual_help_Announcement').then(res=>{
          this.info.list = res
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
