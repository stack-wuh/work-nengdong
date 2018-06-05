<template>
    <section class="wrapper hideScroll">
        <section class="list-content">
          <ul v-if="type == 'action'">
            <li>
              <span></span>
              <h3>{{newList.title}}</h3>
              <p>
                <img src="../../../static/img/icon-share.png" alt="icon-share">
                <img src="../../../static/img/icon-edit.png" alt="icon-share">
                <img src="../../../static/img/icon-delete.png" alt="icon-share">
              </p>
            </li>
            <li>
              <span>类型：</span>{{newList.type}}
              <span>组织者：</span>{{newList.organizer}}
              <span>人数：</span>{{newList.number}}/{{newList.participants}}
            </li>
            <li>
              <span>时间:</span>{{newList.starttime | format}} 至 {{newList.endtime | format}}
              <span>地点:</span>{{newList.place}}
            </li>
            <li>
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
            </li>
            <li><span>参与费用:</span>{{newList.money}}/元</li>
            <li><span>参与要求:</span>{{newList.require_text}}</li>
            <li><span>活动介绍:</span>{{newList.activity_introduction }}</li>
            <li><span>负责人:</span>{{newList.leading_name}}</li>
            <li><span>手机号:</span>{{newList.phone }}</li>
            <li><span>邮箱:</span>{{newList.email }}</li>
            <li><span>QQ:</span>{{newList.qq}} </li>
            <li><span>QQ群:</span>{{newList.group_text}}</li>
            <li><span>微信:</span>{{newList.weixin}}</li>
            <li><span>备注:</span>{{newList.remark}}</li>
          </ul>
          <ul v-if="type == 'pages'">
             <li>
              <span></span>
              <h3>{{list.title}}</h3>
              <p>
                <img src="../../../static/img/icon-share.png" alt="icon-share">
                <img src="../../../static/img/icon-edit.png" alt="icon-share">
                <img src="../../../static/img/icon-delete.png" alt="icon-share">
              </p>
            </li>
            <li>
              <span>类型：</span>{{list.type}}
              <span>组织者：</span>{{list.name}}
            </li>
            <li>
              <span>时间:</span>{{list.time | format}}
              <span>点赞人数：</span>{{list.praise}} 人
            </li>
            <li>
              <img v-for="(item,index) in  address" :key="index" :src="item" alt="avatar">
              <!-- <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar">
              <img src="../../../static/img/logo.png" alt="avatar"> -->
            </li>
            <li><span>校友会介绍:</span>{{list.introduced}}</li>
            <li><span>入会要求:</span>{{list.require_text}}</li>
            <li><span>入会方式:</span>{{list.way}}</li>
            <li><span>发起人:</span>{{list.name}}</li>
            <li><span>手机号:</span>{{list.phone }}</li>
            <li><span>邮箱:</span>{{list.email }}</li>
            <li><span>QQ:</span>{{list.qq}} </li>
            <li><span>QQ群:</span>{{list.group_text}}</li>
            <li><span>微信:</span>{{list.weixin}}</li>
          </ul>
        </section>
        <section class="nopass">
          <p class="title">反馈意见</p>
          <p class="detail">{{newList.feedback || list.feedback}} </p>
        </section>
    </section>
</template>

<script>
  export default{
    props:['info'],
    data(){
      return{
        user:{},
        type:'action',
        list:{},
        address:[]
      }
    },
    computed:{
      newList(){ 
        for(var k in this.info){
          if(!this.info[k]){  
            this.info[k] = '暂无'
          }
          if(k == 'student_info'){
            this.user = this.info[k]
            for(var j in this.user){
              if(!this.user[j]){
                this.user[j] = '暂无'
              }
            }
          }
        } 
        return this.info
      },
      pageList(){
        
      }
    },
    methods:{
      fetchData(){
        this.$http('SchoolFellow/getAlumni_Pages').then(res=>{
          this.list = res.data.find(item=>{ 
            return item.id == this.$route.params.id
          })
          this.address = this.list.alumni_pages_album.address.split(',')
        })
      }
    },
    created(){
      let path = this.$route.path
      let result =  path.search('pages')
      if(result>0){
        this.type = 'pages'
        this.fetchData()
      }else{
        this.type = 'action'
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
