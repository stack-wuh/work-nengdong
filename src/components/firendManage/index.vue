<template>
    <section class="wrapper">
      <search type="1" @confirm="fetchData" @handleClickAdd="handleClickAdd" @otherImport="otherImport" @export2excel="export2excel" @propKey="Search" />
      <div class="content">
          <ul class="item-list">
            <li v-for="(item,index) in checkList" :key="index">
              <span  class="item-name">{{item.name}}: </span>
              <p>
                <span :class="{'txt-active' : subItem.isActive}" @click="handleClickChange(subItem,item,index)" v-if="item.type == 1"  v-for="(subItem,subIndex) in item.list" :key="subIndex">{{subItem.name ? subItem.name : subItem[subItem.rename]}}</span>
                <span style="width:150px;margin-right:20px;" v-if="item.type == 2" v-for="(subItem,subIndex) in item.list" :key="subIndex">
                  <el-select @change="handleClickSelect(subIndex,$event,subItem)" clearable style="width:150px;height:40px;line-height:40px;" :placeholder="subItem.name" v-model="subItem.value">
                    <el-option v-for="(sub,index) in subItem.list" :key="index" :label="sub" :value="sub" ></el-option>
                  </el-select>
                </span>
              </p>
            </li>
          </ul>
          <e-table v-show="$route.params.type == 'firend'"  @getDelMsg="getDelMsg" class="el-table" type="firend" :info="info" />
          <e-table v-show="$route.params.type == 'pages'" @getDelMsg='getDelMsg' class="el-table" type="firends" :info="info" />
          <bottom @getCurrentPage="getCurrentPage" :total="total" type="pagination" />
      </div>
    </section>
</template>

<script>
import Search from  '@/components/common/search'
import ETable from '@/components/common/table'
import Bottom from '@/components/common/bottom'

const json2Excel = require('js-export-excel')
const list = []
export default {
  components:{
    Search,
    ETable,
    Bottom,
  },
  data() {
    return {
      checkList:[
        {
          type:1,
          name:'入学年份',
          prop:'school_age',
          list:['2010','2011','2012','2013'],
        },
        {
          type:1,
          name:'专业',
          prop:'line',
          list:['全部','能动','轮机','油气'],
        },
        {
          type:1,
          name:'班级',
          prop:'classes',
          list:['全部','1','2','3'],
        },
        {
          type:1,
          name:'状态',
          prop:'state',
          list:['全部','升学','就业'],
        },
        {
          type:2,
          name:'筛选条件',
          list:[
            {
              name:'单位性质',
              value:'',
              prop:'unit_property',
              list:[]
            },
            {
              name:'所在行业',
              value:'',
              prop:'unit_way',
              list:[]
            },
            {
              name:'职位类别',
              value:'',
              prop:'place_class',
              list:[]
            },
            {
              name:'层次',
              value:'',
              prop:'levels',
              list:[]
            }
          ]
        }
      ],
      info:{
        type:'firend',
        list:list
      },
      newList:{},
      selectList:{},
      page:1,
      total:0,
    }
  },
  watch:{
    $route(to,from){
      if(to.path == '/firend/pages'){
        this.fetchData()
      }else{
        this.fetchData()
      }
    }
  },
  methods:{
    //获取子组件出来的页码
    getCurrentPage(e){
      this.page = e
      this.fetchData()
    },
    //删除操作成功之后刷新数据
    getDelMsg(e){
      e && this.fetchData()
    },
    //获取数据 传给子组件etable
    fetchData(e){
      let url = this.$route.params.type == 'firend' ? 'SchoolFellow/getStudent_Info' : 'SchoolFellow/getStudent_Info_outstandin'
      let data = Object.assign(this.newList,this.selectList,{pageNo:this.page,name:e,student_info_id:sessionStorage.getItem('userId'),aid:sessionStorage.getItem('userId')})
      this.$http(url,data).then(res=>{
        if(Array.isArray(res.data)){
          res.data.map(item=>{
            item = Object.assign(item,item.employment_archives,item.advance_archives)
            this.info.list = res.data
          })
        }else{
          this.info.list = []
        }
        this.total = Number.parseInt(res.total)
      })
    },
    handleClickSelect(index,$event,item){
      for(var i=0 ;i<=4;i++){
        if(i == index){
          this.selectList[item.prop] = $event
        }
      }
      this.fetchData()
    },
    handleClickChange(data,item,index){
      data.isActive = true
      item.list.map(subitem=>{
        if(subitem.id != data.id){
          subitem.isActive = false
        }
      })
      for(var i=0;i<=4;i++){
        if(i == index){
          this.newList[item.prop] = data[data.rename]
        }
      }
      this.fetchData()
    },
    //获取入学年份
    getYears(){
      this.$http('/SchoolFellow/getYear').then(res=>{
        this.checkList.map(item=>{
          if(item.prop == 'school_age'){
            item.list = res.data.map(list=>{
              return list = Object.assign(list,{isActive:false,rename:'age_name'})
            })
          }
        })
      })
    },
    //获取状态
    getStatus(){
      this.$http('SchoolFellow/getStudent_State').then(res=>{
        this.checkList.map(item=>{
          if(item.prop == 'state'){
            item.list = res.map(list=>{
              return list = Object.assign(list,{isActive:false,rename:'state_name'})
            })
          }
        })
      })
    },
    //获取专业
    getMajor(){
      this.$http('SchoolFellow/getStudent_Info_Line').then(res=>{
        this.checkList.map(item=>{
          if(item.prop == 'line'){
            item.list = res.map(list=>{
              return list = Object.assign(list,{isActive:false,rename:'line_name'})
            })
          }
        })
      })
    },
    //获取班级
    getKlasses(){
      this.$http('SchoolFellow/getStudent_Info_Class').then(res=>{
        this.checkList.map(item=>{
          if(item.prop == 'classes'){
            item.list = res.map(list=>{
              return list = Object.assign(list,{isActive:false,rename:'class_name'})
            })
          }
        })
      })
    },
    //获得单位性质
    getProto(){
      this.$http('SchoolFellow/getStudent_Info_Property').then(res=>{
        this.checkList.map(item=>{
          if(item.type == 2){
            item.list.map(list=>{
              if(list.prop == 'unit_property'){
                list.list = res.map(sub=>{
                  return sub.property_name
                })
              }
            })
          }
        })
      })
    },
    //获得所在行业
    getOnWay(){
      this.$http('SchoolFellow/getStudent_Info_WayService').then(res=>{
        this.checkList.map(item=>{
          if(item.type == 2){
            item.list.map(list=>{
              if(list.prop == 'unit_way'){
                list.list = res.map(sub=>{
                  return sub.way_name
                })
              }
            })
          }
        })
      })
    },
    //获得职位类别
    getWorkClassify(){
      this.$http('SchoolFellow/getStudent_Info_Place_Class').then(res=>{
        this.checkList.map(item=>{
          if(item.type == 2){
            item.list.map(list=>{
              if(list.prop == 'place_class'){
                list.list = res.map(sub=>{
                  return sub.place_class_name
                })
              }
            })
          }
        })
      })
    },
    getLevel(){
      this.$http('SchoolFellow/getStudent_Info_Level').then(res=>{
        this.checkList.map(item=>{
          if(item.type == 2){
            item.list.map(list=>{
              if(list.prop == 'levels'){
                list.list = res.map(sub=>{
                  return sub.level_name
                })
              }
            })
          }
        })
      })
    },


    handleClickAdd(msg){
  
    },
    otherImport(msg){
      console.log('导入')
    },
    export2excel(msg){
      this.info.list = Object.assign(this.info.list,this.info.list.advance_archives)
      if(msg){
        var option = {}
        option.fileName = '当前页校友名单'
        option.datas = [
          {
            sheetData:this.info.list,
            sheetName:'当前页学生名单',
            sheetFilter:['name','school_age','number','no','classes','phone_number','email','unit_name','unit_property','unit_way','place_class','post_name','money','levels','schools','faculty','line_text'],
            sheetHeader:['姓名','入学年份','学号','身份证号','专业班级','手机号','邮箱','用人单位名称','单位性质','所在行业','职位类别','职位名称','起薪','层次','学校','院系','专业']
          },
        ]
        var toExcel = new json2Excel(option)
        toExcel.saveExcel() 
      }
    },
    Search(e){
      console.log(e)
    },
    handleRowClick(e){
      console.log(e)
    },
  },
  created(){
    this.fetchData()
    this.getYears()
    this.getMajor()
    this.getKlasses()
    this.getStatus()
    this.getProto()
    this.getOnWay()
    this.getWorkClassify()
    this.getLevel()
    setTimeout(()=>{
     this.checkList.forEach(item=>{
        item.type == 1 && item.list.unshift({name:'全部',isActive:true})
      })
     },1000)
  },
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
      user-select: none;
      li{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding:10px 0;
        border-bottom:1px solid #eee;

        span.item-name{
          width: 70px;
          margin-right:20px;
        }
        span:hover{
          cursor: pointer;
        }
        p{
          span{
            display: inline-block;
            min-width: 80px;
          }
          span.active{
            color: #00998d;
          }
        }
      }
    }
  }
}
</style>
