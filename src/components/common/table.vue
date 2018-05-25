<template>
  <section class="wrapper">
    <el-table :data="newList" border stripe>
      <el-table-column align="center" v-for="(item,index) in sublist.list" :key="index" v-if="!item.child" :label="item.name" :prop="item.prop">

      </el-table-column>
      <el-table-column align="center" v-for="(item,index) in sublist.list" :key="index" v-if="item.child && !item.btnList" :label="item.name">
        <el-table-column align="center" v-for="(subItem,subIndex) in item.child" :key="subIndex" :label="subItem.name" :prop="subItem.prop">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" v-if="item.btnList" v-for="(item,index) in sublist.list" :key="index" :label="item.name" >
        <template slot-scope="scope">
          <el-button  v-for="(btn,btnIndex) in item.btnList" :key="btnIndex">{{btn.name}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>  
</template>

<script>
export default {
  props: ["info", "type"],
  data() {
    return {
      list: [
        {
          type: "firend",
          list: [
            {
              name: "姓名",
              prop: "name"
            },
            {
              name: "账号信息",
              child: [
                {
                  name: "入学年份",
                  prop: "year"
                },
                {
                  name: "学号",
                  prop: "number"
                },
                {
                  name: "身份证号",
                  prop: "no"
                },
                {
                  name: "专业班级",
                  prop: "klass"
                }
              ]
            },
            {
              name:'基础信息',
              child:[
                {
                  name:'手机号',
                  prop:'phone'
                },
                {
                  name:'邮箱',
                  prop:'email'
                }
              ]
            },
            {
              name:'操作',
              child:[],
              btnList:[
                {
                  name:'编辑'
                },
                {
                  name:'删除'
                },
                {
                  name:'重置密码'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    newData() {
      return this.info;
    },
    newList() {
      return this.info.list;
    },
    sublist(){
      return  this.list.find(item=>{
          return item.type == this.type
        })
    }
  },
  created() {
    console.log(this.sublist)
  }
};
</script>

<style lang="less" scoped>
</style>
