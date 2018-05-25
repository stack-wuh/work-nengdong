<template>
  <section class="wrapper">
    <section class="nav-left">
      <left-menu />
    </section>
    <section class="main">
      <header></header>
      <div class="body">
        <router-view />
      </div>
    </section>
  </section>
</template>

<script>
import Header from '@/components/common/header'
import LeftMenu from '@/components/common/leftmenu'
  export default{
    components:{
      Header,
      LeftMenu,
    },
    data(){
      return{
        list:[]
      }
    },
    created(){

    }
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
    flex:auto;
    display: flex;
    flex-flow: column wrap;

    header{
      height:80px;
      background-color: #007A71;
    }

    .body{
      flex:auto;
      padding:20px;
      background-color: #E3EEED;
      box-sizing: border-box;
    }
  }
}
</style>
