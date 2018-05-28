<template>
  <section class="wrapper">
    <search type=2 />
    <section class="content">
      <p class="nav-title">当前位置：黄业管理>校友会黄页>创建校友会</p>

      <el-form>
        <el-form-item label="活动类型"></el-form-item>
        <el-form-item label="名称"></el-form-item>
        <el-form-item label="活动介绍"></el-form-item>
        <el-form-item label="入会要求"></el-form-item>
        <el-form-item label="入会方式"></el-form-item>
        <el-form-item label="发起人"></el-form-item>
        <el-form-item label="学院专业班级"></el-form-item>
        <el-form-item label="手机号"></el-form-item>
        <el-form-item label="邮箱"></el-form-item>
        <el-form-item label="QQ"></el-form-item>
        <el-form-item label="微信"></el-form-item>
        <el-form-item label="封面图片"></el-form-item>
        <el-form-item label="其他图片"></el-form-item>
        <el-form-item>
          <span class="btn base">提交</span>
        </el-form-item>
      </el-form>
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
    }
  }
</script>

<style lang="less" scoped>

</style>
