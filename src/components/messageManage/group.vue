<template>
  <section class="wrapper">
    <search @getClickMsg="getClickMsg" :tree="tree" type="12" />
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
const list = []
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
        clickMsg:'',
        tree:[]
      }
    },
    watch:{
      clickMsg : 'fetchData'
    },
    computed:{
      total(){
        return this.$store.state.total
      },
      chooseValue(){
        return this.$store.state.chooseArr
      },
      submitState(){
        return this.$store.state.submitState
      }
    },
    watch:{
      submitState:'fetchData'
    },
    methods:{
      //查询发送对象
      getReciver(){
        this.$http('SchoolFellow/showTidings_People').then(res=>{
          this.tree = res.data
        })
      },
      getClickMsg(e){
        this.clickMsg = e
       
      },
      fetchData(){
        console.log('is fetchData')
      }
    },
    created(){
      this.getReciver()
    }
  }
</script>

<style lang="less" scoped>

</style>
