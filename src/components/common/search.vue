<template>
    <section class="father">
        <div v-for="(item,index) in format.subList" :key="index">
          <span :class="[item.isActive ? 'base' : '','btn']" v-on:click="item.click(item)">{{item.name}}</span>
        </div>
        <div class="empty"></div>
        <div>
          <el-input clearable @change="$emit('confirm',keywords)" v-model="keywords" class="my-input" placeholder="请输入关键字">
            <template slot="append"><span v-on:click="$emit('propKey',keywords)" class="my-input-text">搜索</span></template>
          </el-input>
        </div>
    </section>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      list: [
        {
          type: 1,
          subList: [
            {
              name: "添加",
              click:this.handleClickAdd
            },
            {
              name: "批量导入",
              click:this.otherImport
            },
            {
              name: "导出当前页名单",
              click:this.export2excel
            }
          ],
          showInput: true
        },
        {
          type:2,
          showInput:false,
          subList:[
            {
              name:'返回上一级',
              showInput:true,
              click:this.pageBack
            }
          ]
        },
        {
          type:3,
          subList:[
            {
              name:'发起活动',
              click:this.handleClickAction
            },
            {
              name:'批量操作',
              click:this.handleClickPick
            },
          ],
          showInput:true
        },
        {
          type:4,
          showInput:true,
          subList:[
            {
              name:'待审核',
              click:this.handleClickPedding,
              isActive:true
            },
            {
              name:'未通过',
              click:this.peddingFail,
              isActive:false
            }
          ]
        },
        {
          type:5,
          subList:[
            {
              name:'创建'
            },
            {
              name:'批量操作'
            }
          ],
          showInput:true
        },
        {
          type:6,
          subList:[
            {
              name:'发布',
            },
            {
              name:'批量操作'
            }
          ],
          showInput:true
        },
        {
          type:7,
          subList:[
            {
              name:'添加'
            }
          ],
          showInput:true
        }
      ],
      keywords:''
    };
  },
  computed: {
    format() {
      return this.list.find(item=>{
        return item.type == this.type
      })
    }
  },
  created(){
    // console.log(this.format)
  },
  methods:{
    handleClickAdd(){
      this.$store.commit('changeDialogStatus',{title:'修改密码',status:true})
    },
    otherImport(){
      console.log('批量导入')
    },
    export2excel(){
      console.log('导出当前页菜单')
    },
    //活动模块
    //返回上一级
    pageBack(){
      this.$router.go(-1)
    },
    //发起活动
    handleClickAction(){
      console.log('发起活动')
    },
    //批量操作
    handleClickPick(){
      console.log('批量操作')
    },
    //待审核
    handleClickPedding(e){
      e.isActive = true
      this.format.subList.filter(item=>{
        return item.name !== e.name
      })[0].isActive = false
      this.$emit('getList',{state:false,name:e.name})
    },
    //未通过
    peddingFail(e){
      e.isActive = true
      this.format.subList.filter(item=>{
        return item.name !== e.name
      })[0].isActive = false
      this.$emit('getList',{state:true,name:e.name})
    }
  }
};
</script>

<style lang="less" scoped>
.father {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 15px 20px;
  font-size: 16px;
  background-color: #e0e0e0;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  box-sizing: border-box;

  .empty{
    flex:1;
  }
} 

  .my-input-text{
    display: inline-block;
    width: 100%;
    height:100%;
    text-align: center;
    line-height:40px;
    user-select: none;
  }
</style>
