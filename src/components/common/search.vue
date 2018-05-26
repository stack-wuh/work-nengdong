<template>
    <section class="father">
        <div v-for="(item,index) in format.subList" :key="index">
          <span class="btn">{{item.name}}</span>
        </div>
        <div class="empty"></div>
        <div>
          <el-input class="my-input" placeholder="请输入关键字">
            <template slot="append"><span class="my-input-text">搜索</span></template>
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
              name: "添加"
            },
            {
              name: "批量导入"
            },
            {
              name: "导出当前页名单"
            }
          ],
          showInput: true
        },
        {
          type:2,
          subList:[
            {
              name:'返回上一级',
              showInput:true
            }
          ]
        },
        {
          type:3,
          subList:[
            {
              name:'发起活动'
            },
            {
              name:'批量操作'
            },
          ],
          showInput:true
        }
      ],
    };
  },
  computed: {
    format() {
      return this.list.find(item=>{
        return item.type == this.type
      })
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
  }
</style>
