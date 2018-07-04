<template>
  <section class="wrapper">
    <div class="item-content">
      <button-list @getDelAnyMsg="getDelAnyMsg" type="action" v-show="isShowChooseBtn" @handleCancel="cancel" :chooseArr="chooseItemId" />

      <!-- 活动模块-列表 -->
      <div @click="jumpToOther(item)" v-if="$route.path == '/action' || $route.path == '/action/list/action'" v-for="(item,index) in newList" :key="index" class="item-detail flex-box">
          <img v-show="isShowChooseBtn && !item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-default.png" alt="icon-check">
          <img v-show="isShowChooseBtn && item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-action.png" alt="icon-check">
          <div class="img-box" >
              <img v-if="!item.cover" src="../../../static/img/logo.png" alt="avatar">
              <img v-else :src="item.cover" alt="avatar">
          </div>
          <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span >类型：</span>{{item.type}}
                  <span class="empty"></span>
                  <span  :class="[item.check_text == '未通过' ? 'danger info' : 
                            item.check_text == '待审核' ? 'info' : 
                              item.check_text == '已完成' ? 'info gray' :
                                 'info default']">{{item.check_text}}</span>
                  <img @click.prevent.stop="handleClickShare" class="img-btn" src="../../../static/img/icon-share.png" alt="icon-share">
                  <img @click.prevent.stop="jumpToEdit(item)" v-if="item.student_info_id == userId" class="img-btn" src="../../../static/img/icon-edit.png" alt="icon-edit">
                  <img @click.prevent.stop="handleClickDel(item)" class="img-btn" src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <p >
                  <span>标题: </span>{{item.title}}
                </p>
                <p >
                  <span>组织者: </span>{{item.official ? item.official : item.organizer}}
                </p>
                <p>
                  <span>时间：</span>{{item.starttime || item.time | format}}
                  <span style="margin-left:10px;">地点：</span>{{item.place}}
                  <small class="txt-active">{{item.number}}/</small><span v-if="url != 'pages'" v-show="path != '/pages'">{{item.participants}}</span>
                </p>          
          </div>
      </div>

      <!-- 黄页模块-列表 -->
      <div  @click="jumpToOther(item)" v-if="$route.path == '/pages' || $route.path == '/action/list/pages'" v-for="(item,index) in newList" :key="index" class="item-detail flex-box">
          <img v-show="isShowChooseBtn && !item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-default.png" alt="icon-check">
          <img v-show="isShowChooseBtn && item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-action.png" alt="icon-check">
          <div class="img-box">
              <img v-if="!item.image" src="../../../static/img/logo.png" alt="avatar">
              <img v-else :src="item.image" alt="avatar">
          </div>
          <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span >类型：</span>{{item.type}}
                  <span class="empty"></span>
                  <span  :class="[item.check_text == '未通过' ? 'danger info' : 
                           item.check_text == '待审核' ? 'info' : 
                             item.check_text == '已完成' ? 'info gray' :
                               'info default']">{{item.check_text}}</span>
                  <img @click.prevent.stop="handleClickShare" class="img-btn" src="../../../static/img/icon-share.png" alt="icon-share">
                  <img @click.prevent.stop="jumpToEdit(item)" v-if="item.student_info_id == userId" class="img-btn" src="../../../static/img/icon-edit.png" alt="icon-edit">
                  <img @click.prevent.stop="handleClickDel(item)" class="img-btn" src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <p >
                  <span>标题: </span>{{item.title}}
                </p>
                <p class="flex-box">
                  <span>时间：</span>{{item.starttime || item.time | format}}
                  <span class="empty"></span>
                  <span class="parise-box">{{item.praise}} <img src="../../../static/img/icon-prise-active.png" class="icon-praise" /></span>
                </p>          
          </div>
      </div>

      <!-- 互联互助模块-列表 -->
      <div @click="jumpToOther(item)" v-if="$route.path == '/concat' || $route.path == '/action/list/concat'" v-for="(item,index) in newList" :key="index" class="item-detail flex-box">
        <img v-show="isShowChooseBtn && !item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-default.png" alt="icon-check">
        <img v-show="isShowChooseBtn && item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-action.png" alt="icon-check">
        <div class="img-box">
          <img v-if="!item.image" src="../../../static/img/logo.png" alt="avatar">
          <img v-else :src="item.image" alt="avatar">
        </div>
        <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span >类型：</span>{{item.type}}
                  <span class="empty"></span>
                  <span  :class="[item.check_text == '未通过' ? 'danger info' : 
                            item.check_text == '待审核' ? 'info' : 
                              item.check_text == '已完成' ? 'info gray' :
                                 'info default']">{{item.check_text}}</span>
                  <!-- <span class="info">{{item.type}}</span> -->
                  <img @click.prevent.stop="handleClickShare" class="img-btn" src="../../../static/img/icon-share.png" alt="icon-share">
                  <img @click.prevent.stop="jumpToEdit(item)" v-if="item.student_info_id == userId" class="img-btn" src="../../../static/img/icon-edit.png" alt="icon-edit">
                  <img @click.prevent.stop="handleClickDel(item)" class="img-btn" src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <p >
                  <span>标题: </span>{{item.title}}
                </p>
                <p>
                  <span>发布者: </span>{{item.college}}
                </p>
                <p>
                  <!-- <span>专业班级:</span>{{item.student_info.school}}{{item.student_info.line}}{{item.student_info.classes}} -->
                </p>
                <p class="last-flex">
                  <span>时间：</span>{{item.starttime || item.time | format}}
                  <span class="empty"></span>
                  <span>{{item.praise}}
                    <img src="../../../static/img/icon-prise-active.png" class="icon-praise" />
                  </span>
                </p>
        </div>
      </div>   

      <!-- 联系学院-列表 -->
      <div v-if="$route.path == '/school'" v-for="(item,index) in newList" :key="index" class="school-content">
          <img v-show="isShowChooseBtn && !item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-default.png" alt="icon-check">
          <img v-show="isShowChooseBtn && item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-action.png" alt="icon-check">
          <div>
            <p class="flex-box">
              <span>问题类型:</span>
              <small>{{item.question_type}}</small>
              <span class="empty"></span>
              <span @click.prevent.stop="handleClickDel(item)" class="btn-del">删除</span>
            </p>
            <p>
              <span>详细说明:</span><br>
              <small>{{item.illustrate}}</small>
            </p>
            <p>
              <span>图片证据:</span><br>
              <span>
                <!-- <img v-if="item.address" v-for="(img,iindex) in item.address" :key="iindex" :src="img" alt="avatar"> -->
                <img v-if="item.file" :src="item.file" alt="avatar">
                <img v-if="!item.file" src="../../../static/img/logo.png" alt="avatar">
              </span>
            </p>
            <p class="flex-box">
              <span>姓名：<small>{{item.name}}</small></span>
              <span>手机号：<small>{{item.phone}}</small></span>
              <span>邮箱：<small>{{item.email}}</small></span>
              <span>身份证号：<small>{{item.no}}</small></span>
              <span>入学年份：<small>{{item.year}}</small></span>
              <span>专业班级：<small>{{item.classes}}</small></span>
              <span>辅导员：<small>{{item.counsellor}}</small></span>
              <span>学号：<small>{{item.number}}</small></span>
            </p>
          </div>
      </div> 

      <!-- 校友捐赠-列表 -->
      <div @click="jumpToOther(item)" v-if="$route.path == '/donate'" v-for="(item,index) in newList" :key="index" class="item-detail flex-box">
          <img v-show="isShowChooseBtn && !item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-default.png" alt="icon-check">
          <img v-show="isShowChooseBtn && item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-action.png" alt="icon-check">
          <div class="img-box">
              <img v-if="!item.image" src="../../../static/img/logo.png" alt="avatar">
              <img v-else :src="item.image" alt="avatar">
          </div>
          <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span >标题</span>{{item.title}}
                  <span class="empty"></span>
                  <img @click.prevent.stop="handleClickShare" class="img-btn" src="../../../static/img/icon-share.png" alt="icon-share">
                  <img @click.prevent.stop="handleClickDel(item)" class="img-btn" src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <!-- <p class="text-overflow">
                  <span>详情: </span>{{item.details}}
                </p> -->
                <p>
                  <span>时间：</span>{{item.starttime || item.time | format}}
                </p>          
          </div>
      </div>

      <!--消息列表-->
      <div @click="jumpToOther(item)" v-if="$route.path == '/message' " v-for="(item,index) in newList" :key="index" class="item-detail flex-box">
        <img v-show="isShowChooseBtn && !item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-default.png" alt="icon-check">
        <img v-show="isShowChooseBtn && item.isChoose" @click.prevent.stop="handleClickChoose(item,index)" src="../../../static/img/icon-check-action.png" alt="icon-check">
        <div class="img-box">
          <img v-if="!item.image" src="../../../static/img/logo.png" alt="avatar">
          <img v-else :src="item.image" alt="avatar">
        </div>
        <div class="right-content flex-box flex-column">
                <p class="flex-box">
                  <span >类型：</span>{{item.title}}
                  <span class="empty"></span>
                  <img @click.prevent.stop="handleClickDel(item)" class="img-btn" src="../../../static/img/icon-delete.png" alt="icon-delete">
                </p>
                <p >
                  <span>内容: </span>{{item.content}}
                </p>
                <p>
                  <span>提醒时间:</span>{{item.time_or == 0 ? '开始前' : '截止前'}} {{item.remind ? item.remind : 0}} 小时
                </p>
                <p class="last-flex">
                  <span>时间：</span>{{item.time}}
                  <span class="empty"></span>
                </p>
        </div>
      </div>  

      <el-dialog title='分享' :visible.sync="dialogVisible" class="my-dialog">
        <span>复制下面的地址就可以分享啦!</span><br>
        <input class="input-text" type="text" id="aaa" v-model="Urlhref" readonly @click="copy">
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </section>  
</template>
<script>
import ButtonList from "@/components/common/button";
export default {
  components: {
    ButtonList
  },
  props: ["list", "type", "isShow", "check"], // isShow -- 废弃 , 改用state.isShowChooseBtn
  data() {
    return {
      dialogVisible: false,
      Urlhref: window.location.href,
      chooseItemId: [] //批量操作选中的ID数组
    };
  },

  computed: {
    newList() {
      return this.list;
    },
    url() {
      return this.$route.params.type;
    },
    path() {
      return this.$route.path;
    },
    userId() {
      return sessionStorage.getItem("userId");
    },
    isShowChooseBtn(){
      return this.$store.state.isShowChooseBtn
    }
  },
  methods: {
    jumpToEdit(data) {
      let path = this.$route.path,
        name = "";
      switch (path) {
        case "/action":
          name = "actionItem";
          break;
        case "/pages":
          name = "pagesNew";
          break;
        case "/concat":
          name = "concatAction";
          break;
      }
      this.$router.push({ name: name, params: { data: data } });
    },
    getDelAnyMsg() {
      this.$emit("getDelAnyMsg", true);
    },
    cancel() {
      this.$emit("changeIsShow", false);
      this.newList &&
        this.newList.map(item => {
          item.isChoose = false;
        });
    },
    //批量操作--单击图片选择元素
    handleClickChoose(item, index) {
      let isChoose = "";
      if (!item.isChoose) {
        isChoose = true;
      } else {
        isChoose = false;
      }
      this.$set(this.newList[index], "isChoose", isChoose);
      let newArr = this.newList.filter(list => {
        return list.isChoose;
      });
      this.chooseItemId = newArr.map(item => {
        return item.id;
      });
    },
    copy() {
      let elem = document.getElementById("aaa");
      elem.select();
      document.execCommand("Copy");
      _g.toastMsg("success", "链接已经复制到您的剪贴板了");
    },

    //单击分享按钮,弹出分享的链接
    handleClickShare() {
      this.dialogVisible = true;
    },

    jumpToOther(e) {
      let check = this.check ? this.check : " ";
      if (this.url == "action" || this.path == "/action") {
        this.$router.push({ path: "/action/detail/" + e.id });
      } else if (this.url == "pages" || this.path == "/pages") {
        this.$router.push("/pages/detail/" + e.id + "/" + e.student_info_id);
      } else if (this.path == "/donate") {
        this.$router.push("/donate/detail/" + e.id);
      } else if (this.path == "/action/list/concat" || this.path == "/concat") {
        this.$router.push("/concat/detail/" + e.id);
      }else if(this.path == '/message'){
        this.$router.push('/message/detail/'+ e.id)
      }
    },

    //单击图片删除
    handleClickDel(e) {
      let url = "";
      if (this.$route.path == "/action") {
        url = "SchoolFellow/delActivityDetails_Manager";
      } else if (this.url == "pages" || this.path == "/pages") {
        url = "SchoolFellow/delAlumni_Pages";
      } else if (this.path == "/donate") {
        url = "SchoolFellow/delAlumni";
      } else if (this.path == "/concat" || this.path == "/action/list/concat") {
        url = "SchoolFellow/delMutual_Help";
      } else if (this.path == "/school") {
        url = "SchoolFellow/delContact_College";
      }else if(this.path == '/message'){
        url = 'SchoolFellow/delTidings'
      }
      this.$http(url, { id: e.id }).then(res => {
        let error = res.error == 0 ? "success" : "error";
        _g.toastMsg(error, res.msg);
        if (res.error == 0) {
          this.$emit("getDelMsg", true);
        }
      });
    }
  },
  created() {
    
  }
};
</script>

<style lang="less" scoped>
.item-content {
  height: calc(100% - 60px);
  width:100%;
  .img-box img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  .img-box:hover {
    cursor: pointer;
  }
  .item-detail {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }
  .right-content {
    align-items: flex-start;
    font-size: 14px;
    p {
      color: #666;
      span {
        display: inline-block;
        width: 60px;
        color: #333;
      }
    }
    p:first-of-type {
      span.info {
        height: 25px;
        padding: 0 5px;
        margin-right: 10px;
        color: #fff;
        line-height: 25px;
        text-align: center;
        border-radius: 10px;
      }
      img {
        margin: 0 10px;
      }
      img:hover {
        cursor: pointer;
      }
    }
    small {
      margin-left: 20px;
      font-size: 14px;
    }
  }
}
.item-content:hover {
  cursor: pointer;
}
.item-detail:hover {
  border: 1px solid #00998d;
}
.icon-praise {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  vertical-align: bottom;
}
.last-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .empty {
    flex: 1;
  }
}
.school-content {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #eee;

  div {
    width: 100%;
    p:first-of-type {
      width: 100%;
    }
  }
  [alt="avatar"] {
    width: 60px;
    height: 60px;
  }
  .btn-del {
    padding: 2px 10px;
    font-size: 14px;
    background-color: #ff6969;
    color: #fff;
    border-radius: 5px;
    user-select: none;
  }
  .btn-del:hover {
    cursor: pointer;
  }
  p {
    margin-bottom: 10px;
  }
  p:last-child {
    flex-flow: wrap;
    span {
      display: inline-block;
      width: 30%;
      margin-bottom: 10px;
    }
  }
}
.school-content:hover {
  border-color: #00998d;
}
.input-text {
  width: 100%;
  font-size: 14px;
  color: blue;
  border: none;
  outline: none;
}
[alt="icon-check"] {
  margin-right: 10px;
}
.parise-box {
  padding-right: 10px;
  text-align: right;
  color: #666 !important;
}
.text-overflow {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.my-dialog {
  position: fixed;
  left: calc(50% - 500px);
  top: calc(50% - 300px);
}
</style>
