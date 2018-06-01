<template>
  <section class="wrapper">
    <div class="item-content">
      <div v-for="(item,index) in newList" :key="index" class="item-detail flex-box">
        <div @click="jumpToOther(item)" class="img-box">
          <img v-if="!item.cover" src="../../../static/img/logo.png" alt="avatar">
          <img v-else :src="item.cover" alt="">
        </div>
        <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span>类型：</span>{{item.type}}
                  <span class="empty"></span>
                  <span class="info">{{item.check_text}}</span>
                  <img class="img-btn" src="../../../static/img/icon-share.png" alt="icon-share">
                  <img class="img-btn" src="../../../static/img/icon-edit.png" alt="icon-edit">
                  <img @click="handleClickDel(item)" class="img-btn" src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <p>
                  <span>标题: </span>{{item.title}}
                </p>
                <p>
                  <span>组织者: </span>{{item.organizer}}
                </p>
                <p>
                  <span>时间：</span>{{item.starttime | format}}
                  <span>地点：</span>{{item.place}}
                  <small class="txt-active">{{item.number}}</small>/<span>{{item.participants}}</span>
                </p>
        </div>
      </div>
    </div>
  </section>  
</template>

<script>
  export default{
    props:['list'],
    data(){
      return{

      }
    },
    computed:{
      newList(){
        return this.list
      }
    },
    methods:{
      jumpToOther(e){
        this.$router.push('/action/detail/'+e.id) 
      },
      handleClickDel(e){
        this.$http('delActivityDetails_Manager',{id:e.id}).then(res=>{
          let error = res.error == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.msg)
          if(res.error == 0){
            this.$emit('getDelMsg',true)
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
.item-content{
  height:calc(100% - 60px);
  overflow: hidden;
  ::-webkit-scrollbar{
    display: none;
  }
  .img-box img{
    width: 80px;
    height:80px;
    margin-right:10px;
  }
  .img-box:hover{
    cursor: pointer;
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
      img:hover{
        cursor: pointer;
      }
    }
    small{
      margin-left:20px;
      font-size: 14px;
    }
  }

}
.item-detail:hover{
  border:1px solid #00998d;
}
</style>
