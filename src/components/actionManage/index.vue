<template>
    <section class="wrapper">
      <search @PickAny="pickAny" @confirm="fetchData" type='3' />
      <div class="content">
        <p class="nav-title">当前位置: 活动管理>活动列表</p>
        <ul class="item-list">
          <li  v-for="(item,index) in checkList" :key="index" >
            <span>{{item.name}}: </span>
            <p>
              <span @click="handleClickChange(item,index,subItem)" :class="{'active' : subItem.isActive}" v-for="(subItem,subIndex) in item.list" :key="subIndex">{{subItem.name ?subItem.name : '全部'}}</span>
            </p>
          </li>
        </ul>
        <item-list @getDelAnyMsg="getDelAnyMsg" @changeIsShow="changeIsShow" @getDelMsg="getDelMsg" :list="list" :isShow="isShow" />
        <bottom @getCurrentPage="getCurrentPage" :total="total" type="pagination" />
      </div>
    </section>
</template>

<script>
import Search from "@/components/common/search";
import ItemList from "@/components/common/itemList";
import Bottom from "@/components/common/bottom";
import ButtonList from '@/components/common/button';
export default {
  components: {
    Search,
    ItemList,
    Bottom,
    ButtonList
  },
  data() {
    return {
      checkList: [
        {
          name: "类型",
          list: [
            { name: "", isActive: true },
            { name: "校友活动", isActive: false },
            { name: "学院活动", isActive: false },
            { name: "专业活动", isActive: false },
            { name: "班级活动", isActive: false },
            { name: "讲座活动", isActive: false }
          ],
          prop: "type",
          rename: "type_name"
        },
        {
          name: "组织者",
          list: [
            { name: "", isActive: true },
            { name: "官方", isActive: false },
            { name: "非官方", isActive: false }
          ],
          prop: "whether"
        },
        {
          name: "官方组织",
          list: [
            { name: "", isActive: true },
            { name: "校友会", isActive: false },
            { name: "院学生会", isActive: false },
            { name: "院科协", isActive: false }
          ],
          prop: "official"
        },
        {
          name: "状态",
          list: [
            { name: "", isActive: true },
            { name: "进行中", isActive: false },
            { name: "已结束", isActive: false }
          ],
          prop: "check_text"
        }
      ],
      list: [],
      page: 1,
      total: 0,
      search:{},
      isShow:false,
    };
  },
  methods: {
    getCurrentPage(e){
      this.page = e 
      this.fetchData()
    },
    changeIsShow(e){
      this.isShow = e
    },
    pickAny(e){
      this.isShow = e
    },
    getDelMsg(e){
      e && this.fetchData()
    },
    getDelAnyMsg(e){
      e && this.fetchData()
    },
    handleClickChange(item,subIndex,subItem) {
      subItem.isActive = true
      item.list.map(list=>{
        if(list.name !== subItem.name){
          list.isActive = false
        }
      })
      for(var i =0 ; i<=4; i++){
        if(i == subIndex){
          this.search[item.prop] = subItem.name
        }
      }
      this.fetchData()
    },
    fetchData(e) {
      let data = Object.assign({title:e,pageNo:this.page},this.search)
      this.$http("SchoolFellow/getActivity_Manager",data).then(res => {
        this.list = res.data
        console.log(this.list)
        this.total = Number.parseInt(res.total);
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
}
.item-list {
  li {
    span {
      min-width: 80px;
    }
    p {
      span {
        width: 80px;
      }
      span:hover {
        cursor: pointer;
      }
      span.active {
        color: #00998d;
      }
    }
  }
}
</style>
