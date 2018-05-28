<template>
  <section class="wrapper">
    <search type=2 />
    <section class="content">
      <action-info />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ActionInfo from '@/components/common/actionInfo'
  export default {
    components:{
      Search,
      ActionInfo
    },
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped>

</style>
