<template>
  <section class="wrapper">
    <!-- <search @propKey="getKey" type=7 /> -->
    <section class="content">
      <p class="nav-title">当前位置: 系统设置 
          {{$route.path == '/setting/year' ? '>入学年份设置' :$route.path == '/setting/major' ? '>专业设置' 
            : $route.path == '/setting/klass' ? '>班级设置' : $route.path == '/setting/concat' ? '>联系学院' 
            : $route.path == '/setting/firends' ? '>校友捐赠公告设置': $route.path == '/setting/help' ? ">互帮互助设置" 
            : $route.path == '/setting/type' ? ">活动类型设置" :$route.path == '/setting/official' ? '>官方组织设置' : '>互联互助设置'}}
      </p>

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
