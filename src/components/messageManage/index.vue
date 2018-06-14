<template>
  <section class="wrapper" id="mess">
      <section class="left">
        <header class="header">
          <el-dropdown @command="changeType">
            <span class="el-dropdown-link">
              {{data.collect_name ? '收藏 ': '全部'}} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >全部</el-dropdown-item>
              <el-dropdown-item command="1">收藏</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown @command="changeReciver">
            <span class="el-dropdown-link">{{data.i == 1 ? '收到的' : '发出的'}} 
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">收到的</el-dropdown-item>
              <el-dropdown-item command="0">发出的</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span @click="jumptoOther(1)" class="btn">发布消息</span>
          <span @click="jumptoOther(2)" class="btn">我的群组</span>
        </header>
        <section class="content">
          <item-list @getDelMsg="getDelMsg" class="item-list" :list="list" />
          <bottom type="pagination" :total="total" />
        </section>
      </section>
      <section class="right box">
         <vue-event-calendar :events="myEvent" class="vue-event-calendar"></vue-event-calendar>
         <div class="none" v-show="!myEvent.length">无</div>
      </section>
  </section>  
</template>

<script>
import "../../../static/css/mess.css";
import "vue-event-calendar/dist/style.css";
import Bottom from "@/components/common/bottom";
import ItemList from  '@/components/common/itemList';
export default {
  components: {
    Bottom,
    ItemList
  },
  data() {
    return {
      myEvent: [],
      data: {
        pageNo: 1,
        student_info_id: sessionStorage.getItem("userId"),
        i: 1,
        collect_name: ""
      },
      // info: [],
      info:{
        type:'message',
        list:[]
      },
      list:[],
      total: 0
    };
  },
  methods: {
    getDelMsg(e){
      e && this.fetchData()
    },
    changeType(e) {
      this.data.collect_name = e;
      this.fetchData();
    },
    changeReciver(e) {
      this.data.i = e;
      this.fetchData();
    },
    jumptoOther(type) {
      type == 1 && this.$router.push("/message/publish");
      type == 2 && this.$router.push("/message/group");
    },
    Myevent() {},
    fetchData() {
      this.$http("SchoolFellow/getTidings", this.data).then(res => {
        this.list = res.data;
        this.total = res.total;
      });
    }
  },
  created() {
    this.fetchData()
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-flow: row nowrap !important;
  .btn {
    margin-left: 15px;
    color: #fff;
    background-color: #00998d;
    border: 1px solid #fff;
  }
  .btn:hover {
    cursor: pointer;
  }
  .content {
    height: calc(100% - 60px);
  }
  .left {
    width: 70%;
    height: 100%;

    header.header {
      height: 60px;
      background-color: #00998d;
    }
  }
  .right {
    width: 28%;
    height: 100%;
  }

  .el-dropdown-link {
    font-size: 16px;
    color: #fff;
    line-height: 60px;
    margin-left: 20px;
  }
  .el-dropdown-link:hover {
    cursor: pointer;
  }
  [alt="avatar"] {
    width: 70px;
    height: 70px;
  }
}
</style>
