<template>
  <section class="wrapper">
    <nav class="nav">
      <span class="active">公告设置</span>
      <span>联系学院</span>
    </nav>

    <section class="father" v-show="!show">
      <el-input class="my-input" :rows="15" type="textarea" placeholder="请输入内容"></el-input>
    </section>
    <section class="father" v-show="show">
      <el-form>
        <el-form-item label="地址">
          <el-input placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-form-item label="邮编">
          <el-input placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input placeholder="请输入电话"></el-input>          
        </el-form-item>
        <el-form-item label="传真">
          <el-input placeholder="请输入传真"></el-input>          
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input placeholder="请输入邮箱"></el-input>          
        </el-form-item>
      </el-form>
    </section>
      <div>
        <span class="btn base">提交</span>
      </div>
  </section>  
</template>

<script>
  export default{
    data(){
      return{
        show:true
      }
    }
  }
</script>

<style lang="less" scoped>
nav.nav{
  border-bottom:1px solid #009489;
  span{
    display: inline-block;
    width:80px;
    height:40px;
    margin:0;
    color: #009489;
    line-height:40px;
    font-size: 16px;
    text-align:center;
    border:1px solid #009489;
    border-bottom:none;
  }
  span.active{
    color: #fff;
    background-color: #009489;
  }
}
.father{
  .my-input{
    margin-top:10px;
  }
}
</style>
