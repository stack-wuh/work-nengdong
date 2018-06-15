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
              <p>时间: {{info.starttime | format}} 至 {{info.endtime | format}}</p>
              <div v-show="imgList" class="img-list">
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
              <span>{{FormInfo.title}}</span>
            </div>
            <div class="form-area">
              <p class="form-title">附件</p>
              <span @click="handleDownload">点击下载附件</span>
            </div>
        </section>
      </section>
      <section class="right">
        <p class="title">收到 (0)</p>
        <p class="list-item">
          <span>1</span>
          <span>维多利亚</span>
          <span>工号/学号: </span>
          <span>10000</span>
        </p>
      </section>
    </section>
</template>

<script>
export default {
  data() {
    return {
      info:{}
    };
  },
  computed:{
    imgList(){
      if(this.info){
        if(this.info.tidings_imageList){
          if(this.info.tidings_imageList[0].image_name){
            return this.info.tidings_imageList[0].image_name.split(',')
          }
        }
      }
    },
    FormInfo(){
      let obj = {}
      if(this.info){
        if(this.info.tidings_formList){
          if(this.info.tidings_formList[0].form_title){
            obj.title = this.info.tidings_formList[0].form_title
          }
          if(this.info.tidings_formList[0].form_content){
            obj.form_content = this.info.tidings_formList[0].form_content.split(',')
          }
        }
      }
      return obj
    },
    fileInfo(){
      if(this.info){
        if(this.info.tidings_accessoryList){
          if(this.info.tidings_accessoryList[0].accessory_name){
            return this.info.tidings_accessoryList[0].accessory_name
          }
        }
      }
    }
  },
  methods: {
    handleDownload(){
      location.href = this.info.tidings_accessoryList[0].accessory_name
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
        this.info = res.data[0]
        this.info.isCollect = this.info.collect_name ? true : false
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
          margin-right:10px;
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
  }
}
</style>
