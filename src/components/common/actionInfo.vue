<template>
    <section class="wrapper hideScroll">
        <section class="list-content">
          <ul v-if="type == 'action'">
            <li>
              <span></span>
              <h3>{{newList.title}}</h3>
              <p>
                <!-- <img @click="handleClickShare" src="../../../static/img/icon-share.png" alt="icon-share"> -->
                <img @click="jumptoOther(newList)" v-if="userId == newList.student_info_id"  src="../../../static/img/icon-edit.png" alt="icon-share">
                <img @click="handleClickDel" src="../../../static/img/icon-delete.png" alt="icon-share">
              </p>
            </li>
            <li>
              <span>类型 ：</span>{{newList.type}}
              <span>组织者 ：</span>{{newList.organizer ||newList.official}}
              <span>人数 ：</span>{{newList.number}}/{{newList.participants}}
            </li>
            <li>
              <span>发起时间 :</span>{{newList.starttime | format}}
              <span>地点 :</span>{{newList.place}}
            </li>
            <li>
              <img :src="newList.cover" alt="avatar">

            </li>
            <li><span>参与费用 :</span>{{newList.money}}</li>
            <li><span>参与要求 :</span>{{newList.require_text}}</li>
            <li><span>活动介绍 :</span>{{newList.activity_introduction }}</li>
            <li><span>负责人 :</span>{{newList.leading_name}}</li>
            <li><span>手机号 :</span>{{newList.phone }}</li>
            <li><span>邮箱 :</span>{{newList.email }}</li>
            <li><span>QQ :</span>{{newList.qq}} </li>
            <li><span>QQ群 :</span>{{newList.group_text}}</li>
            <li><span>微信 :</span>{{newList.weixin}}</li>
            <li><span>备注 :</span>{{newList.remark}}</li>
          </ul>
          <ul v-if="type == 'pages'">
             <li>
              <span></span>
              <h3>{{newPages.title}}</h3>
              <p>
                <!-- <img @click="handleClickShare" src="../../../static/img/icon-share.png" alt="icon-share"> -->
                <img @click="jumptoOther(newPages)" v-if="newPages.student_info_id == userId" src="../../../static/img/icon-edit.png" alt="icon-share">
                <img @click="handleClickDel(newPages)" src="../../../static/img/icon-delete.png" alt="icon-share">
              </p>
            </li>
            <li>
              <span>类型：</span>{{newPages.type}}
              <span>组织者：</span>{{newPages.name}}
            </li>
            <li>
              <span>时间:</span>{{newPages.time | format}}
              <span>点赞人数：</span>{{newPages.praise}} 人
            </li>
            <li>
              <img :src="newPages.image" alt="avatar">
              <img v-if="newPages.address.toString().length > 0" v-for="(item,index) in  newPages.address" :key="index" :src="item" alt="avatar">
            </li>
            <li><span>校友会介绍:</span>{{newPages.introduced}}</li>
            <li><span>入会要求:</span>{{newPages.require_text}}</li>
            <li><span>入会方式:</span>{{newPages.way}}</li>
            <li><span>发起人:</span>{{newPages.name}}</li>
            <li><span>手机号:</span>{{newPages.phone }}</li>
            <li><span>邮箱:</span>{{newPages.email }}</li>
            <li><span>QQ:</span>{{newPages.qq}} </li>
            <li><span>QQ群:</span>{{newPages.group_text}}</li>
            <li><span>微信:</span>{{newPages.weixin}}</li>
          </ul>
          <ul v-if="type == 'concat'">
             <li>
              <span></span>
              <h3>{{newConcat.title}}</h3>
              <p>
                <span :class="[newConcat.check_text == '未通过' ? 'danger' : newConcat.check_text == '进行中' ? 'info' : 'info']">{{newConcat.check_text}}</span>
                <!-- <img @click="handleClickShare" src="../../../static/img/icon-share.png" alt="icon-share"> -->
                <img @click="jumptoOther(newConcat)" src="../../../static/img/icon-edit.png" alt="icon-share">
                <img @click.prevent.stop="handleClickDel(newConcat)" src="../../../static/img/icon-delete.png" alt="icon-share">
              </p>
            </li>
            <li>
              <span>类型：</span>{{newConcat.type}}
              <span>组织者：</span>{{newConcat.college}}
            </li>
            <li>
              <span>专业班级:</span>{{newConcat.school}}{{newConcat.line}}{{newConcat.classes}}
              <span>时间:</span>{{newConcat.time | format}}
            </li>
            <li>
              <img v-if="newConcat.image" :src="newConcat.image" alt="avatar">
              <img v-if="newConcat.addressList.toString().length > 0" v-for="(item,index) in  newConcat.addressList" :key="index" :src="item" alt="avatar">
            </li>
            <li><span>详细内容:</span>{{newConcat.content}}</li>
            <li><span>手机号:</span>{{newConcat.phone }}</li>
            <li><span>邮箱:</span>{{newConcat.email }}</li>
            <li><span>QQ:</span>{{newConcat.qq}} </li>
            <li><span>QQ群:</span>{{newConcat.group_text}}</li>
            <li><span>微信:</span>{{newConcat.weixin}}</li>            
          </ul>
        </section>
        <section class="nopass">
          <p class="title">反馈意见</p>
          <p class="detail" v-if="type == 'action'">{{newList.feedback}} </p>
          <p class="detail" v-if="type == 'pages'">{{newPages.feedback}} </p>
          <p class="detail" v-if="type == 'concat'">{{newConcat.feedback}}</p>
        </section>
        
      <el-dialog title='分享' :visible.sync="dialogVisible">
        <span>复制下面的地址就可以分享啦!</span><br>
        <input class="input-text" type="text" id="aaa" v-model="Urlhref" readonly @click="copy">
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
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
        address:[],
        dialogVisible:false,
        Urlhref:''
      }
    },
    computed:{
      //活动详情
      newList(){ 
        return this.info
      },
      //校友会详情
      newPages(){
        return this.info.list
      },

      //互联互助详情
      newConcat(){
        return this.info.list
      },

      userId(){
        return sessionStorage.getItem('userId')
      },
    },
    methods:{
      //单击编辑跳转
      jumptoOther(data){
        let name = this.$route.name , rename = ''
        switch(name){
          case 'actionDetail' : rename = 'actionItem' 
                            break;
          case 'pagesDetail' : rename = 'pagesNew'
                            break;
          case 'concatDetail' : rename = 'concatAction'
                            break;
        }
        this.$router.push({name:rename,params:{data:data}})
      },
      //单击删除按钮
      handleClickDel(e){
        let url = '' , data={}
        switch(this.type){
          case 'action' : url = 'SchoolFellow/delActivityDetails_Manager' ,
                          data = {id:this.$route.params.id}
                        break;
          case 'pages' :  url = 'SchoolFellow/delAlumni_Pages' ,
                          data = {id:this.$route.params.id}
                        break;
          case 'concat' : url = 'SchoolFellow/delMutual_Help' ,
                          data = {id:this.$route.params.id}
                        break;
        }
        this.$http(url,data).then(res=>{
          let error = res.error == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.msg)
          if(res.error == 0){
           setTimeout(()=>{
              this.$router.go(-1)
           },1000)
          }
        })
      },
      //单击分享按钮
      handleClickShare(){
        this.dialogVisible = true
        this.Urlhref = window.location.href
      },
      copy(){
        let elem = document.getElementById('aaa')
        elem.select()
        document.execCommand('Copy')
        _g.toastMsg('success','链接已经复制到您的剪贴板了')
      }, 
      //黄页
      fetchData(){
        this.$http('SchoolFellow/getAlumni_Pages').then(res=>{
          this.list = res.data.find(item=>{ 
            return item.id == this.$route.params.id
          })
          this.address = this.list.alumni_pages_album.address.split(',')
        })
      },
      //互联互助详情
      getConcatList(){
        this.$http('SchoolFellow/getMutual_Help').then(res=>{
          this.list = res.data.find(item=>{
            return item.id == this.$route.params.id
          })
          this.address = this.list.mutual_help_image.address.split(',')
        })
      }
    },
    created(){
      console.log(this.info)
      let path = this.$route.path
      if(path.search('pages')>0){
        this.type = 'pages'
        // this.fetchData()
      }else if(path.search('action')>0){
        this.type = 'action'
      }else if (path.search('concat')>0){
        this.type = 'concat'
        // this.getConcatList()
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
    span.danger{
      vertical-align: top;
      color: #FF6969 !important;
      background-color: #fff;
    }
    span.default{
      vertical-align: top;
      color: #6192F6;
      background-color: #fff;
    }
    span.info{
      vertical-align: top;
      color: #F88E1D;
      background-color: #fff;
    }
</style>
