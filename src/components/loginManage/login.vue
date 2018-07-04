<template>
  <section class="wrapper">
    <section class="form-box">
      <div class="left-content">
          <img src="../../../static/img/logo.png" alt="logo">
          <img src="../../../static/img/title.png" alt="title">
      </div>
      <div class="right-content">
        <h3>校友端后台管理系统</h3>
        <div class="group-item">
          <img src="../../../static/img/icon-user.png" alt="icon-user">
          <el-input v-model="user.name"></el-input>
        </div>
        <div class="group-item">
          <img src="../../../static/img/icon-pwd.png" alt="icon-pwd">
          <el-input type="password" v-model="user.password"></el-input>
        </div>
        <div class="btn-area">
          <span @click="Login" @keyup.enter="Login">登陆</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default{
  data(){
    return{
      user:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    Login(){
      console.log('is ok')
      if(!this.user.name){
        _g.toastMsg('error','请输入用户名')
        return
      }
      if(!this.user.password){
        _g.toastMsg('error','请输入密码')
        return
      }
      this.$http('LoginAdministrators',this.user).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        if(res.error == 0){
           window.sessionStorage.setItem('userId',res.id)
           setTimeout(()=>{
             this.$router.push('/')
           },1000)
        }
      })
    }
  },
  created(){
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  width: 100%;
  height:100%;
  overflow: hidden;
  box-sizing: border-box;
  .form-box{
    position: fixed;
    top:calc((100% - 410px)/2);
    left:calc((100% - 730px)/2);
    display: flex;
    align-items: center;
    width: 730px;
    height:410px;
    background-color: #f9f9f9;
    border-radius: 20px;
    overflow: hidden;
    div{
      flex:1;
      height:100%;
    }
    .left-content{
      flex:.6;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      background-color: #00998d;
      img[alt='logo']{
        width: 95px;
        height:95px;
        margin-bottom:15px;
      }
      img[alt='title']{
        width: 238px;
        height:38px;
        margin-top:15px;
      }
    }
    .right-content{ 
      display: flex;
      flex-direction: column;
      align-items: center;
      height:350px;
      margin-left:40px;
      h3{
        align-self: center;
        font-size: 24px;
        font-weight: normal;
      }
      .group-item{
        display: flex;
        align-items: flex-end;
        width:300px;
        padding-bottom:20px;
        border-bottom:1px solid #dedede;

        img{
          margin-right:15px;
        }

      }
      .el-input{
        width: 300px;
        height:35px;
      }
    }
    .btn-area{
      span{
        display: block;
        width: 300px;
        height: 48px;
        margin-top:40px;
        color: #fff;
        line-height:48px;
        text-align: center;
        font-size: 20px;
        background-color: #009489;
        border-radius: 24px;
        user-select: none;
      }
      span:hover{
        cursor:pointer;
        color: rgb(226, 236, 236);
        background-color:#009780;
        transition: all .5s linear;
      }
    }
  }
}
</style>

