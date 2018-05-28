<template>
  <section class="wrapper">
    <search type=5 />
    <section class="content">
      <p class="nav-title">当前位置: 校友捐赠>列表</p>
      <item-list />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ItemList from '@/components/common/itemList'
  export default{
    components:{
      Search,
      ItemList
    },
    data(){
      return{
        
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
