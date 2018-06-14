<template>
  <section class="wrapper">
    <search @getClickMsg="getClickMsg" :tree="tree" type="12" />
    <section class="content">
      <p class="nav-title">当前位置: 校友管理>群组</p>
      <e-table @getDelMsg="getDelMsg" :info="info" type="group" />
      <bottom type="pagination" />
    </section>
  </section>
</template>

<script>
import Search from "@/components/common/search";
import ETable from "@/components/common/table";
import Bottom from "@/components/common/bottom";
const list = [];
export default {
  components: {
    ETable,
    Bottom,
    Search
  },
  data() {
    return {
      info: {
        type: "group",
        list: list
      },
      clickMsg: "",
      tree: []
    };
  },
  computed: {
    total() {
      return this.$store.state.total;
    },
    chooseValue() {
      return this.$store.state.chooseArr;
    },
    submitState() {
      return this.$store.state.submitState;
    }
  },
  watch: {
    submitState: "fetchData"
  },
  methods: {
    getDelMsg(e){
      e && this.fetchData()
    },
    //查询发送对象
    getReciver() {
      this.$http("SchoolFellow/showTidings_People",{student_info_id:sessionStorage.getItem('userId')}).then(res => {
        this.tree = res;
      });
    },
    getClickMsg(e) {
      this.clickMsg = e;
      this.fetchData()
    },
    fetchData() { // 读取群组消息
      let data = {
        id:sessionStorage.getItem('userId'),
      }
      // if(this.clickMsg>=0){
        data.cjorjr = this.clickMsg
      // }
      this.$http('SchoolFellow/getTidings_Grouping',data).then(res=>{
        this.info.list = res.data
      })
    }
  },
  created() {
    this.getReciver();
    this.fetchData()
  }
};
</script>

<style lang="less" scoped>
</style>
