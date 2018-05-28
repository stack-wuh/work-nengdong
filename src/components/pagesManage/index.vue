<template>
  <section class="wrapper">
    <search type="5" />
    <section class="content">
      <p class="nav-title">当前位置: 黄页管理>校友会黄页</p>
      <nav class="nav">
        类型: 
        <span class="txt-active">全部</span>
        <span>按年级分</span>
        <span>按地域分</span>
        <span>按行业分</span>
      </nav>
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
nav.nav{
  margin-top:10px;
  padding:5px 10px;
  font-size: 16px;
  border:1px solid #e0e0e0;
  border-radius: 2px;
  span{
    margin-right:15px;
    font-size: 15px;
  }
  span:first-of-type{
    margin-left:10px;
  }
}
</style>
