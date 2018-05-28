<template>
    <section class="wrapper">
        <section class="list-content">
          <ul>
            <li>
              <span></span>
              <h3>活动标题</h3>
              <p>
                <img src="../../../static/img/icon-share.png" alt="icon-share">
                <img src="../../../static/img/icon-edit.png" alt="icon-share">
                <img src="../../../static/img/icon-delete.png" alt="icon-share">
              </p>
            </li>
            <li>
              <span>类型：</span>校友活动
              <span>组织者：</span>校友活动
              <span>人数：</span>57/100
            </li>
            <li>
              <span>时间:</span>2018-01-01 14:00
              <span>地点:</span>地点
            </li>
            <li>
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
            </li>
            <li><span>参与费用:</span>100/人</li>
            <li><span>参与要求:</span>100/人</li>
            <li><span>活动介绍:</span>100/人</li>
            <li><span>负责人:</span>100/人</li>
            <li><span>联系方式:</span>100/人</li>
            <li><span>手机号:</span>100/人</li>
            <li><span>邮箱:</span>100/人</li>
            <li><span>QQ:</span>100/人</li>
            <li><span>QQ群:</span>100/人</li>
            <li><span>微信:</span>100/人</li>
            <li><span>备注:</span>100/人</li>
          </ul>
          <div class="user-info">
            <p>提交人信息</p>
            <p>
              <span>姓名: 李涛</span>
              <span>学号: 20180001</span>
              <span>专业: 能动学院</span>
              <span>班级: 1001</span>
            </p>
            <p>
              <span>手机号: 15642422323</span>
              <span>邮箱: 15642422323</span>
              <span>QQ: 15642422323</span>
              <span>微信: 15642422323</span>
            </p>
          </div>
        </section>

        <section class="nopass">
          <p class="title">反馈意见</p>
          <p class="detail">意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见意见</p>
        </section>
    </section>
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped>
  .list-content{
    margin:20px 0 10px 0;
    border:1px solid #eee;
    ul{
      padding:0 10px;
      box-sizing: border-box;
      border-bottom:1px solid #eee;
      li{
        margin:10px 0;
        padding: 0 15px;
        color: #666;
        span{
          padding-right:5px;
          color: #333;
        }
        span ~ span{
          margin-left:20px;
        }
      }

      li:first-of-type{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3{
          margin-left:70px;
        }
        p{
          img{
            margin:0 10px;
          }
          img:hover{
            cursor:pointer;
          }
        }
      }
      li:nth-child(2),
      li:nth-child(3),
      li:nth-child(4){
        text-align:center;
      }
      li:nth-child(4){
        img{
          width: 170px;
          height:112px;
          margin-right:20px;
        }
      }
    }
    .user-info{
      padding:20px 0;

      p{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 20px;
        span{
          flex:1;
          text-align: left;
        }
      }
      p:nth-child(2){
        margin:5px 0;
      }
    }

  }
    .nopass{
      border-radius: 4px;
      background-color: #E8F0F0;
      .title{
        padding:10px 0 0 10px;
        font-size: 16px;
        color: #333;
      }
      .detail{
        padding:10px;
        font-size: 14px;
        color: #666;
      }
    }
</style>
