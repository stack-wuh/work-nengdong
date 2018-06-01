<template>
  <section class="wrapper">
    <search type="2" />
    <section class="content">
      <p class="nav-title">当前位置: 活动管理>待审核>详情</p>
      <action-info  />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ActionInfo from '@/components/common/actionInfo'
  export default{
    components:{
      Search,
      ActionInfo
    },
    data(){
      return{}
    },

  }
</script>

<style lang="less" scoped>

</style>
