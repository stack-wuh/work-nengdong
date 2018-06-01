<template>
  <section class="header">
    <div>
      <img src="../../../static/img/index-logo.png" alt="index-logo">
    </div>
    <div class="empty"></div>
    <div class="btn-list">
        <el-dropdown @command="ShowDialog" trigger="click">
              <span class="el-dropdown-link my-icon-center">
                用户名<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="password" >修改密码</el-dropdown-item>
             </el-dropdown-menu>
        </el-dropdown>
      <span class="my-icon-dianyuan">退出</span>
    </div>

  </section>
</template>


<script>
export default {

  data() {
    return {};
  },
  methods:{
    ShowDialog(e){
      this.$store.commit('changeDialogStatus',{title:'修改密码',status:true,type:'updatePwd'})
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 24px;
  color: #fff;
  box-sizing: border-box;

  div{
    color: #fff;
    font-size: 24px;
  }
  div.empty{
    flex:1;
  }
  div.btn-list{
    margin-right:90px;
    .my-icon-dianyuan{
      margin-left:15px;

    }
    .my-icon-dianyuan:before{
      padding-right:5px;
    }
  }
  img[alt="logo"] {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }
  img[alt="title"] {
    width: 296px;
    height: 50px;
  }

  span {
    font-size: 20px;
  }
}
</style>
