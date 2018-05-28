<template>
    <section class="wrapper">
        <search type="2" />
        <section class="content">
          <p class="nav-title">当前位置: 活动管理>活动列表>发起活动</p>

          <div class="father">
            <el-form>
              <el-form-item label="活动类型"></el-form-item>
              <el-form-item label="活动标题"></el-form-item>
              <el-form-item label="组织者"></el-form-item>
              <el-form-item label="是否借用学校场地"></el-form-item>
              <el-form-item label="地址"></el-form-item>
              <el-form-item label="活动介绍"></el-form-item>
              <el-form-item label="参与人数"></el-form-item>
              <el-form-item label="参与要求"></el-form-item>
              <el-form-item label="费用"></el-form-item>
              <el-form-item label="负责人"></el-form-item>
              <el-form-item label="手机号"></el-form-item>
              <el-form-item label="邮箱"></el-form-item>
              <el-form-item label="QQ"></el-form-item>
              <el-form-item label="微信"></el-form-item>
              <el-form-item label="QQ群"></el-form-item>
              <el-form-item label="封面图片"></el-form-item>
              <el-form-item label="其他图片"></el-form-item>
              <el-form-item label="备注"></el-form-item>
            </el-form>
            <div>
              <span class="btn base">提交</span>
            </div>
          </div>
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
      return{}
    }
  }
</script>

<style lang="less" scoped>

</style>
