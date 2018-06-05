<template>
  <section class="wrapper">
    <search type=2 />
    <section class="content">
      <p class="nav-title">当前位置: 互联互助>详情</p>

      <action-info type="concat" :info="info" />
      <bottom type="btn" :data="{id:$route.params.id}" />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ActionInfo from '@/components/common/actionInfo'
  import Bottom from '@/components/common/bottom'
  export default {
    components:{
      Search,
      ActionInfo,
      Bottom
    },
    data(){
      return{
        info:{}
      }
    },
    methods:{
      fetchData(){

      }
    }
  }
</script>

<style lang="less" scoped>

</style>
