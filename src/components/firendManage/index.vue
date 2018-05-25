<template>
    <section class="wrapper">
        <search type="1" />
      <div class="content">
          <ul class="item-list">
            <li v-for="(item,index) in checkList" :key="index">
              <span>{{item.name}}: </span>
              <p>
                <span v-if="item.type == 1"  v-for="(subItem,subIndex) in item.list" :key="subIndex">{{subItem}}</span>
                <span style="width:150px" v-if="item.type == 2" v-for="(subItem,subIndex) in item.list" :key="subIndex">
                  <el-select clearable style="width:150px;margin-right:30px" :placeholder="subItem.name" v-model="subItem.value">
                    <el-option label="1111" value="1111"></el-option>
                    <el-option label="1112" value="1112"></el-option>
                    <el-option label="1113" value="1113"></el-option>
                    <el-option label="1114" value="1114"></el-option>
                  </el-select>
                </span>
              </p>
            </li>
          </ul>
          <!-- <el-table :data="list" border stripe>
            <el-table-column center label="姓名" prop="name"></el-table-column>
            <el-table-column label="账号信息">
              <el-table-column label="入学年份"></el-table-column>
              <el-table-column label="学号"></el-table-column>
              <el-table-column label="身份证号"></el-table-column>
              <el-table-column label="专业班级"></el-table-column>
            </el-table-column>
            <el-table-column label="基础信息">
              <el-table-column label="手机号"></el-table-column>
              <el-table-column label="邮箱"></el-table-column>
            </el-table-column>
            <el-table-column label="操作"></el-table-column>
          </el-table> -->
          <e-table class="el-table" type="firend" :info="info"></e-table>
      </div>
    </section>
</template>

<script>
import Search from  '@/components/common/search'
import ETable from '@/components/common/table'
const list = [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
]
export default {
  components:{
    Search,
    ETable
  },
  data() {
    return {
      checkList:[
        {
          type:1,
          name:'入学年份',
          list:['2010','2011','2012','2013']
        },
        {
          type:1,
          name:'专业',
          list:['全部','能动','轮机','油气']
        },
        {
          type:1,
          name:'班级',
          list:['全部','1','2','3']
        },
        {
          type:1,
          name:'状态',
          list:['全部','升学','就业']
        },
        {
          type:2,
          name:'筛选条件',
          list:[
            {
              name:'单位性质',
              value:''
            },
            {
              name:'所在行业',
              value:'',
            },
            {
              name:'职位类别',
              value:'',
            },
            {
              name:'层次',
              value:''
            }
          ]
        }
      ],
      // list:list,
      info:{
        type:'firend',
        list:list
      }
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  .content{
    width: 100%;
    height:100%;
    padding:20px;
    box-sizing: border-box;
    background-color: #fff;

    ul.item-list{
      width: 100%;
      
      li{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding:10px 0;
        border-bottom:1px solid #eee;
        span{
          width: 80px;
          margin-right:20px;
        }
        p{
          span{
            display: inline-block;
            min-width: 40px;
          }
          span.active{
            color: #00998d;
          }
        }
      }
    }
    .el-table{
      height:calc(100% - 300px);
      border:1px solid red;
    }
  }
}
</style>
