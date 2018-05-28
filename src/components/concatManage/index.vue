<template>
  <section class="wrapper">
    <search type=6 />
    <section class="content">
      <p class="nav-title">当前位置: 互联互助>列表</p>

      <nav class="nav">
        类型: 
        <span class="txt-active">全部</span>
        <span>寻求帮助</span>
        <span>提供帮助</span>
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
