<template>
  <section class="wrapper">
    <div class="item-content">
      <div v-for="(item,index) in newList" :key="index" class="item-detail flex-box">
        <div v-if="path != '/donate'" @click="jumpToOther(item)" class="img-box">
          <img v-if="!item.cover" src="../../../static/img/logo.png" alt="avatar">
          <img v-else :src="item.cover" alt="avatar">
        </div>
        <div v-if="path == '/donate'" @click="jumpToOther(item)" class="img-box">
          <img v-if="!item.image" src="../../../static/img/logo.png" alt="avatar">
          <img v-else :src="item.image" alt="avatar">
        </div>
        <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span v-if="path == '/donate'" >类型：</span>{{item.title}}
                  <span v-if="path != '/donate'">类型：</span>{{item.type}}
                  <span class="empty"></span>
                  <span v-if="path != '/donate'" class="info">{{item.check_text}}</span>
                  <img class="img-btn" src="../../../static/img/icon-share.png" alt="icon-share">
                  <img class="img-btn" src="../../../static/img/icon-edit.png" alt="icon-edit">
                  <img @click="handleClickDel(item)" class="img-btn" src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <p v-if="path != '/donate'">
                  <span>标题: </span>{{item.title}}
                </p>
                <p v-if="url != 'pages'" v-show="path != '/pages' && path != '/donate'">
                  <span>组织者: </span>{{item.organizer}}
                </p>
                <p>
                  <span>时间：</span>{{item.starttime || item.time | format}}
                  <span v-if="url != 'pages'" v-show="path != '/pages' && path !='/donate'">地点：</span>{{item.place}}
                  <small v-if="url != 'pages'" v-show="path != '/pages' && path != '/donate'" class="txt-active">{{item.number}}/</small><span v-if="url != 'pages'" v-show="path != '/pages'">{{item.participants}}</span>
                </p>
        </div>
      </div>
    </div>
  </section>  
</template>

<script>
  export default{
    props:['list','type'],
    data(){
      return{
      }
    },
    computed:{
      newList(){
        return this.list
      },
      url(){
        return this.$route.params.type
      },
      path(){
        return this.$route.path
      }
    },
    methods:{
      jumpToOther(e){
        if(this.url == 'action' || this.path == '/action'){
          this.$router.push('/action/detail/'+e.id)
        } else if(this.url == 'pages' || this.path == '/pages'){
          this.$router.push('/pages/detail/'+e.id+'/'+e.student_info_id)
        } else if(this.path == '/donate'){

        }
      },
      handleClickDel(e){
        let url = ''
        if(this.url == 'action'){
          url = 'SchoolFwllow/delActivityDetails_Manager'
        }else if (this.url == 'pages' || this.path == '/pages'){
          url = 'SchoolFellow/delAlumni_Pages'
        }else if(this.path == '/donate'){
          url = 'SchoolFellow/delAlumni'
        }
        this.$http(url,{id:e.id}).then(res=>{
          let error = res.error == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.msg)
          if(res.error == 0){
            this.$emit('getDelMsg',true)
          }
        })
      },
    },
    created(){
      console.log(this.$route,this.list)
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
