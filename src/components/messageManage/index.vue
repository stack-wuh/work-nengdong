<template>
  <section class="wrapper" id="mess">
      <section class="left">
        <header class="header"></header>
      </section>
      <section class="right box">
         <vue-event-calendar :events="myEvent" class="vue-event-calendar"></vue-event-calendar>
         <div class="none" v-show="!myEvent.length">无</div>
      </section>
  </section>  
</template>

<script>
import '../../../static/css/mess.css'
import 'vue-event-calendar/dist/style.css'
  export default{
    data(){
      return{
        myEvent:[]
      }
    },
    methods:{
      Myevent(){}
    }
  }
</script>

<style lang="less" scoped>
.wrapper{
  display: flex;
  flex-flow: row nowrap !important;

  .left{
    width:70%;
    height:100%;

    header.header{
      height:60px;
      background-color:#00998d;
    }
  }
  .right{
    width:28%;
    height:100%;
  }
}
</style>
