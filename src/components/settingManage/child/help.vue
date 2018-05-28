<template>
  <section class="wrapper">
    <el-input :rows="15" class="my-input" type="textarea" placeholder="请输入公告内容"></el-input>
    <div>
      <span class="btn base">提交</span>
    </div>
  </section>  
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped>
.my-input{
  width: 60%;;
}
</style>
