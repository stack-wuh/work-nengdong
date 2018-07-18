<template>
    <section class="wrapper">
      <section class="left">
        <section class="top">
          <div class="img-box">
            <img src="../../../../static/img/logo.png" alt="avatar">
          </div>
          <div class="detail">
              <h3>标题: {{info.title}}</h3>
              <p>内容: {{info.content}}</p>
              <p>提醒: {{info.time_or == 0 ? '开始前' : '截止前'}} {{info.remind || 0}}小时</p>
              <p>时间: {{info.starttime}} 至 {{info.endtime}}</p>
              <div v-if="imgList"  class="img-list">
                <img v-for="item in imgList" :src="item" alt="img-i">
              </div>
          </div>
          <div class="img-box coll">
            <img v-if="!info.isCollect" @click="handleClickCollect" src="../../../../static/img/icon-collect-default.png" alt="check">
            <img v-if="info.isCollect" @click="handleClickCollect" src="../../../../static/img/icon-collect-active.png" alt="check">
          </div>
          <div class="tips">
            <span>已结束</span>
          </div>
        </section>
        <section class="bottom">
            <div class="form-area">
              <p class="form-title">需要填写的表单</p>
              <span>{{FormInfo && FormInfo.form_title}}</span>
            </div>
            <div class="form-area">
              <p class="form-title">附件</p>
              <span @click="handleDownload">点击下载附件</span>
            </div>
        </section>
      </section>
      <section class="right">
        <p class="title danger">未收到( {{no_reciver_sum}} )</p>
        <p class="list-item" v-for="(item,index) in  no_reciver" :key="index">
          <span>{{index+1}}</span>
          <span>{{item && item.name}}</span>
          <span>工号/学号：</span>
          <span>{{item && item.number}}</span>
        </p>
        <p class="title">收到 ({{yes_reciver_sum}})</p>
        <p class="list-item" v-for="(item,index) in yes_reciver" :key="index">
          <span>{{index+1}}</span>
          <span>{{item && item.name}}</span>
          <span>工号/学号: </span>
          <span>{{item && item.number}}</span>
        </p>
      </section>
    </section>
</template>

<script>
export default {
  data() {
    return {
      info:{},
      no_reciver_sum:0,
      yes_reciver_sum:0,
      no_reciver:[],
      yes_reciver:[]
    };
  },
  computed:{
    imgList(){
      return this.info && this.info.tidings_imageList && this.info.tidings_imageList[0]
              && this.info.tidings_imageList[0].image_name 
               && (this.info.tidings_imageList[0].image_name.split(','))
    },
    FormInfo(){
      return this.info && this.info.tidings_formList && this.info.tidings_formList[0]
    },
    fileInfo(){
      return this.info && this.info.tidings_accessoryList && this.info.tidings_accessoryList[0]
        && this.info.tidings_accessoryList[0].accessory_name
    }
  },
  methods: {
    handleDownload(){
      location.href = this.fileInfo
    },
    handleClickCollect(){
      this.$http('SchoolFellow/addTidings_Collect',{tidings_id:this.$route.params.id,student_info_id:sessionStorage.getItem('userId')}).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        this.fetchData()
      })
    },
    fetchData(){
      this.$http('SchoolFellow/QueryTidings',{id:this.$route.params.id}).then(res=>{
        this.info =  res.data[0]
        this.info.isCollect = this.info.collect_name ? true : false
        this.no_reciver_sum = res.noSum
        this.yes_reciver_sum = res.yesSum
        this.no_reciver = res.no && res.no[0].studentList
        this.yes_reciver = res.yes && res.yes[0].studentList
      })
    }
  },
  created(){
    this.fetchData()
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
      min-height:150px;
      padding-left:20px;
      border-bottom:1px solid #eee;

      .img-list{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height:80px;
        img{
          width:80px;
          height:80px;
          margin:10px 10px 10px 0;

        }
      }
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
    .bottom{
      .form-area{
        margin-top:20px;
        margin-left:20px;
      .form-title+span{
        margin-top:20px;
        margin-left:20px;
        font-size: 15px;
        color: #00998d;
      }
      .form-title+span:hover{
        cursor: pointer;
      }
      }
    }
  }
  .right{
    width:30%;
    height:100%;
    .title{
      height:30px;
      padding-left:10px;
      font-size: 15px;
      line-height:30px;
      color: #fff;
      background-color: #00998d;
    }
    .list-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height:20px;
      padding:5px 15px;
      font-size: 14px;
      line-height:20px;
      background-color: #fff;
      span:nth-child(2){
        flex:1;
        margin-left:10px;
      }
    }
    .danger{
      background-color: #ff6b64;
    }
  }
}
</style>
