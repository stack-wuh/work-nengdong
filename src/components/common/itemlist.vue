<template>
  <section class="wrapper">
    <div class="item-content">
      <div v-for="(item,index) in 10" :key="index" class="item-detail flex-box">
        <div class="img-box">
                <img src="../../../static/img/logo.png" alt="avatar">
        </div>
        <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span>类型：</span>校友活动
                  <span class="empty"></span>
                  <span class="info">进行中</span>
                    <img @click="jumpToOther" src="../../../static/img/icon-share.png" alt="icon-share">
                    <img src="../../../static/img/icon-edit.png" alt="icon-edit">
                    <img src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <p>
                  <span>标题: </span>互动标题
                </p>
                <p>
                  <span>组织者: </span>名字名字
                </p>
                <p>
                  <span>时间：</span>2018-01-01
                  <span>地点：</span>学校学校
                </p>
        </div>
      </div>
    </div>
  </section>  
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      jumpToOther(){
        this.$router.push('/action/detail') 
      }
    }
  }
</script>

<style lang="less" scoped>
.item-content{
  max-height:500px;
  overflow: auto;
  .img-box img{
    width: 80px;
    height:80px;
    margin-right:10px;
  }
  .item-detail{
      padding:20px 0;
      border-bottom:1px solid #eee;
  }
  .right-content{
    align-items: flex-start;
    font-size: 14px;
    p{
      color: #666;
      span{
        display: inline-block;
        width: 60px;
        color: #333;
      }
    }
    p:first-of-type{
      span.info{
        height:25px;
        padding:0 5px;
        margin-right:10px;
        color: #fff;
        line-height:25px;
        text-align:center;
        border-radius: 10px;
      }
      img{
        margin:0 10px;
      }
    }
  }

}
</style>
