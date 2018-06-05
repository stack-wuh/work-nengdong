<template>
  <section class="wrapper">
    <search @confirm="fetchData" @propKey="propKey" type="8" />
    <section class="content">
      <p class="nav-title">当前位置: 校友捐赠>列表</p>
      <item-list :list="list" />
      <bottom type="pagination" :total="total" />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ItemList from '@/components/common/itemList'
  import Bottom from '@/components/common/bottom'
  export default{
    components:{
      Search,
      ItemList,
      Bottom
    },
    data(){
      return{
        list:[],
        pageNo:1,
        total:0
      }
    },
    methods:{
      propKey(e){
        this.fetchData(e)
      },
      fetchData(title){
        this.$http('SchoolFellow/getAlumni',{pageNo:this.pageNo,title:title}).then(res=>{
          this.list = res.data
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
