<template>
    <section class="wrapper">
      <section class="left">
        <section class="top">
          <div class="img-box">
            <img src="../../../../static/img/logo.png" alt="avatar">
          </div>
          <div class="detail">
              <h3>标题: </h3>
              <p>类型: </p>
              <p>时间: </p>
          </div>
          <div class="img-box coll">
            <img src="../../../../static/img/icon-collect-default.png" alt="check">
          </div>
          <div class="tips">
            <span>已结束</span>
          </div>
        </section>
      </section>
      <section class="right"></section>
    </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.wrapper{
  display: flex;
  flex-flow: row nowrap !important;
  align-items: flex-start;
  height:100%;
  .left{
    width:68%;
    min-height:400px;
    background-color: #fff;
    
    img[alt="avatar"]{
      width:100px;
      height:100px;
    }

    .top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height:150px;
      padding-left:20px;
      border-bottom:1px solid #eee;
      .detail{
        flex:1;
        margin-left:15px;
        p{
          margin-top:10px;
          font-size: 14px;
        }
      }
      .coll{
        align-self: center;
      }
      .tips{
        align-self:flex-start;
        margin-right:20px;
        span{
          display: inline-block;
          width:60px;
          height:30px;
          line-height:30px;
          text-align:center;
          color: #fff;
          background-color: #00998d;
        }
      }
    }
  }
  .right{
    width:30%;
    height:100%;
    background-color: #00998d;
  }
}
</style>
