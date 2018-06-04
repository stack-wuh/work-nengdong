<template>
  <section class="wrapper">
    <!-- <search @propKey="getKey" type=7 /> -->
    <section class="content">
      <p class="nav-title">当前位置: 系统设置</p>

      <router-view class="my-view" />
    </section>
  </section>
</template>


<script>
  import Search from '@/components/common/search'
  export default{
    components:{
      Search
    },
    data(){
      return{

      }
    },
    methods:{
      getKey(e){
        this.$router.push({path:'/setting/year',params:{key:e}})
      },
    }
  }
</script>

<style lang="less" scoped>
.my-view{
  margin-top:15px;
}
</style>
