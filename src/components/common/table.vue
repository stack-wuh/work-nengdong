<template>
  <section class="wrapper">
    <el-table :data="newList" border stripe style="100%" height="400">
      <el-table-column fixed align="center" label="序号" type="index"></el-table-column>
      <el-table-column :width="item.width" fixed="left" align="center" v-for="(item,index) in sublist.list" :key="index" v-if="!item.child" :label="item.name" :prop="item.prop">

      </el-table-column>
      <el-table-column align="center" v-for="(item,index) in sublist.list" :key="index" v-if="item.child && !item.btnList" :label="item.name">
        <el-table-column align="center" v-for="(subItem,subIndex) in item.child" :key="subIndex" :label="subItem.name" :prop="subItem.prop">
        </el-table-column>
      </el-table-column>
      <el-table-column :width="item.width" :fixed="item.fixed" align="center" v-if="item.btnList" v-for="(item,index) in sublist.list" :key="index" :label="item.name" >
        <template slot-scope="scope">
          <el-button size="mini" type="text" v-for="(btn,btnIndex) in item.btnList" :key="btnIndex">{{btn.name}}</el-button>
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
              width:'100',
              name: "姓名",
              prop: "name",
              fixed:'left',
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
              name:'就业信息',
              child:[
                {
                  name:'用人单位名称',
                  prop:'compnay'
                },
                {
                  name:'单位性质'
                },
                {
                  name:'所在行业'
                },
                {
                  name:'职位类别'
                },
                {
                  name:'岗位名称'
                }
              ]
            },
            {
              name:'升学档案',
              child:[
                {
                  name:'起薪'
                },
                {
                  name:'层次'
                },
                {
                  name:'学校'
                },
                {
                  name:'院系'
                },
              ]
            },
            {
              fixed:'right',
              width:'150',
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
        },
        {
          type:'action',
          list:[
            {
              name:'姓名',
              prop:'name'
            },
            {
              name:'身份',
              prop:'identity'
            },
            {
              name:'专业班级',
              prop:'classes'
            },
            {
              name:'手机号',
              prop:'phone'
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
