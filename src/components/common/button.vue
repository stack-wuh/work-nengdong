<template>
  <section class="wrapper">
    <nav>
      <span @click="item.click" class="btn" v-for="(item,index) in btnList.sub" :key="index">{{item.name}}</span>
    </nav>
  </section>  
</template>


<script>
export default {
  props: ["type", "chooseArr"],
  data() {
    return {
      list: [
        {
          type: "action",
          sub: [
            {
              name: "删除",
              click: this.handleClickDel
            },
            {
              name: "取消",
              click: this.handleClickCancel
            }
          ]
        }
      ]
    };
  },
  computed: {
    btnList() {
      return this.list.find(item => {
        return item.type == this.type;
      });
    }
  },
  methods: {
    //单击批量删除
    handleClickDel($event) {
      let url = "",
        data = { id: this.chooseArr };
      switch (this.$route.path) {
        case "/action":
          url = "SchoolFellow/delActivityDetails_Manager";
          break;
        case "/pages":
          url = "SchoolFellow/delAlumni_Pages";
          break;
        case "/concat":
          url = "SchoolFellow/delMutual_Help";
          break;
        case "/donate":
          url = "SchoolFellow/delAlumni";
          break;
      }
      if (this.chooseArr.length == 0) {
        _g.toastMsg("error", "请先选择操作对象");
        return;
      }
      this.$confirm('确认删除执行操作?','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
      }).then(()=>{
        this.$http(url, { id: this.chooseArr.toString() }).then(res => {
          let error = res.error == 0 ? "success" : "error";
          _g.toastMsg(error, res.msg);
          if (res.error == 0) {
            // this.$emit("getDelAnyMsg", true);
            this.$store.commit('handleClickChangeChooseBtn',false)
          }
        });
      }).catch(()=>{
        _g.toastMsg('warning','操作已取消!')
      })

    },
    //单击取消
    handleClickCancel() {
      // this.$emit("handleCancel", true);
      this.$store.commit('handleClickChangeChooseBtn',false)
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 60px;
  background-color: #eee;
  nav {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 10px;
    line-height: 60px;
  }
}
</style>
