<template>
  <section class="wrapper">
    <section class="nav-left">
      <left-menu />
    </section>
    <section class="main">
      <header-top class="header"></header-top>
      <div class="body">
        <my-dialog @dialogClose="dialogClose" @handleClickSubmit="handleClickSubmit" :title="title" :isShowDialog="isShowDialog" />
        <transition name="fade" mode="out-in">
          <router-view v-loading="isShowLoading" />
        </transition>
      </div>
    </section>
  </section>
</template>

<script>
import HeaderTop from '@/components/common/header'
import LeftMenu from '@/components/common/leftmenu'
import MyDialog from '@/components/common/dialog'
  export default{
    components:{
      HeaderTop,
      LeftMenu,
      MyDialog
    },
    computed:{
      title(){
        return this.$store.state.dialogTitle
      },
      isShowDialog(){
        return this.$store.state.isShowDialog
      },
      isShowLoading(){
        return this.$store.state.isShowLoading
      }
    },
    methods:{
      handleClickSubmit(e){
        // e && location.reload()
      },
      dialogClose(e){
        e && this.$store.commit('changeDialogStatus',{status:false})
      }
    },
    data(){
      return{
        list:[],
      }
    },
    created(){

    },
  }
</script>

<style scoped>

</style>

<style lang="less" scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  section{
    width: 100%;
    height: 100%;
  }
  .nav-left{
    width: 220px;
  }
  .main{
    position: relative;
    flex:1;
    display: flex;
    flex-flow: column wrap;
    .header{
      height:80px;
      background-color: #007A71;
    }

    .body{
      flex:1;
      min-height:300px;
      padding:20px;
      background-color: #E3EEED;
      box-sizing: border-box;

      .wrapper{
        display: flex;
        flex-direction: column;
        width: 100% ;
        height:100% ;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .3s ease 
}
.fade-fade-enter, .fade-leave-to{
  opacity: 0
}
</style>
