<template>
  <section class="father">
    <el-table v-on:row-click="handleClickRow" class="my-table" :data="newList" border stripe  >
      <el-table-column width="80px" fixed align="center" label="序号" type="index"></el-table-column>
      <el-table-column :width="item.width" fixed="left" align="center" v-for="(item,index) in sublist.list" :key="index" v-if="!item.child && !item.isSwitch && !item.isColorPicker && !item.isCheck && !item.isImage" :label="item.name" :prop="item.prop">
      </el-table-column>
      <el-table-column :width="item.width" fixed="left" align="center" v-for="(item,index) in sublist.list" :key="index" v-if="!item.child && !item.isSwitch && !item.isColorPicker && !item.isCheck && item.isImage" :label="item.name" :prop="item.prop">
        <template slot-scope="scope">
          <img :src="scope.row[item.prop]" alt="avatar">
        </template>
      </el-table-column>      
      <el-table-column :width="item.width" fixed="left" align="center" v-for="(item,index) in sublist.list" :key="index" v-if="!item.child && item.isSwitch" :label="item.name" :prop="item.prop">
        <template slot-scope="scope">
          <el-switch @change="handleClickChangeState(scope)" active-text="是" inactive-text="否" v-model="scope.row.age_or" active-value="1" ianctive-value="0" ></el-switch>
        </template>
      </el-table-column>      
      <el-table-column align="center" v-for="(item,index) in sublist.list" :key="index" v-if="item.child && !item.btnList" :label="item.name">
        <el-table-column align="center" v-for="(subItem,subIndex) in item.child" :key="subIndex" :label="subItem.name" :prop="subItem.prop">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" v-for="(item,index) in sublist.list" :key="index" v-if="item.isColorPicker" :label="item.name">
        <template slot-scope="scope">
          <el-color-picker :disabled='false' @change="colorPickerChange(scope.row.id,$event)" v-model="scope.row[item.prop]"></el-color-picker>
        </template>
      </el-table-column>
      <el-table-column align="center" v-for="(item,index) in sublist.list" :key="index" v-if="item.isCheck" :label="item.name">
        <template slot-scope="scope">
          <el-checkbox @change="subItem.click(scope)" v-for="(subItem,subIndex) in item.checkList" :key="subIndex" v-model="scope.row[subItem.prop]" >{{subItem.name}}</el-checkbox>
        </template>
      </el-table-column>      
      <el-table-column :width="item.width" :fixed="item.fixed" align="center" v-if="item.btnList" v-for="(item,index) in sublist.list" :key="index" :label="item.name" >
        <template slot-scope="scope">
          <el-button size="mini" type="text"  v-for="(btn,btnIndex) in item.btnList" @click.prevent.stop="btn.click(scope)" :key="btnIndex">{{btn.name}}</el-button>
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
              width: "100",
              name: "姓名",
              prop: "name",
              fixed: "left"
            },
            {
              name: "账号信息",
              child: [
                {
                  name: "入学年份",
                  prop: "school_age"
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
                  prop: "classes"
                }
              ]
            },
            {
              name: "基础信息",
              child: [
                {
                  name: "手机号",
                  prop: "phone_number"
                },
                {
                  name: "邮箱",
                  prop: "email"
                }
              ]
            },
            {
              name: "就业信息",
              child: [
                {
                  name: "用人单位名称",
                  prop: "unit_name"
                },
                {
                  name: "单位性质",
                  prop: "unit_property"
                },
                {
                  name: "所在行业",
                  prop: "unit_way"
                },
                {
                  name: "职位类别",
                  prop: "post_name"
                },
                {
                  name: "岗位名称",
                  prop: "place_class"
                }
              ]
            },
            {
              name: "升学档案",
              child: [
                {
                  name: "起薪",
                  prop: "money"
                },
                {
                  name: "层次",
                  prop: "levels"
                },
                {
                  name: "学校",
                  prop: "schools"
                },
                {
                  name: "院系",
                  prop: "faculty"
                },
                {
                  name: "专业",
                  prop: "line_text"
                }
              ]
            },
            {
              fixed: "right",
              width: "150",
              name: "操作",
              child: [],
              btnList: [
                {
                  name: "编辑"
                },
                {
                  name: "删除",
                  click: this.handleClickDel
                },
                {
                  name: "重置密码"
                }
              ]
            }
          ]
        },
        {
          type: "action",
          list: [
            {
              name: "姓名",
              prop: "name"
            },
            {
              name: "专业",
              prop: "line"
            },
            {
              name: "班级",
              prop: "classes"
            },
            {
              name: "手机号",
              prop: "phone_number"
            },
            {
              name:'QQ',
              prop:'qq'
            },
            {
              name:'微信',
              prop:'weixin'
            },
            {
              name:'邮箱',
              prop:'email'
            }
          ]
        },
        {
          type: "pages",
          list: [
            {
              name: "标题",
              prop: "title"
            },
            {
              name: "时间",
              prop: "time"
            }
          ]
        },
        {
          type: "school",
          list: [
            {
              name: "名称",
              prop: "school_name"
            },
            {
              name: "电话",
              prop: "phone"
            },
            {
              name: "操作",
              child: [],
              btnList: [
                {
                  name: "编辑",
                  click:this.handleClickEdit
                },
                {
                  name: "删除",
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type: "college",
          list: [
            {
              name: "名称",
              prop: "name"
            },
            {
              name: "电话",
              prop: "phone"
            },
            {
              name: "操作",
              child: [],
              btnList: [
                {
                  name: "编辑",
                  click:this.handleClickEdit
                },
                {
                  name: "删除",
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type: "firends",
          list: [
            {
              width: "100",
              name: "姓名",
              prop: "name",
              fixed: "left"
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
              name: "基础信息",
              child: [
                {
                  name: "手机号",
                  prop: "phone"
                },
                {
                  name: "邮箱",
                  prop: "email"
                }
              ]
            },
            {
              name: "就业信息",
              child: [
                {
                  name: "用人单位名称",
                  prop: "compnay"
                },
                {
                  name: "单位性质"
                },
                {
                  name: "所在行业"
                },
                {
                  name: "职位类别"
                },
                {
                  name: "岗位名称"
                }
              ]
            },
            {
              name: "升学档案",
              child: [
                {
                  name: "起薪"
                },
                {
                  name: "层次"
                },
                {
                  name: "学校"
                },
                {
                  name: "院系"
                }
              ]
            },
            {
              fixed: "right",
              width: "150",
              name: "操作",
              child: [],
              btnList: [
                {
                  name: "移除",
                  click:this.handleClickDel
                },
                {
                  name: "备注",
                  click:this.handleClickEdit
                },
                {
                  name:'查看',
                  click:this.handleClickShowMsg
                }
              ]
            }
          ]
        },
        {
          type: "year",
          list: [
            {
              name: "入学年份",
              prop: "age_name",
              isSwitch:false
            },
            {
              name: "是否开放毕业档案",
              prop: "age_or",
              isSwitch:true,
            },
            {
              name: "操作",
              child: [],
              btnList: [
                {
                  name: "编辑",
                  click:this.handleClickEdit
                },
                {
                  name: "删除",
                  click:this.handleClickDel
                },
              ]
            }
          ]
        },
        {
          type: "concat",
          list: [
            {
              name:'验证图片',
              isImage:true,
              prop:'file'
            },
            {
              name: "问题类型",
              prop: "question_type"
            },
            {
              name: "姓名",
              prop: "name"
            },
            {
              name:'手机',
              prop:'phone'
            },
            {
              name:'邮箱',
              prop:'email'
            },
            {
              name:'入学年份',
              prop:'year'
            },
            {
              name:'学号',
              prop:'number'
            },
            {
              name:'专业班级',
              prop:'classes'
            },
            {
              name:'详情',
              prop:'illustrate'
            },
            {
              name: "操作",
              child: [],
              fixed:'right',
              width:'150',
              btnList: [
                {
                  name: "编辑",
                  click:this.handleClickEdit
                },
                {
                  name: "删除",
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type: "actions",
          list: [
            {
              name: "活动类型",
              prop: "type_name"
            },
            {
              name: "自定义颜色",
              prop: "color",
              isColorPicker:true
            },
            {
              name: "同步展示设置",
              isCheck:true,
              checkList:[
                {
                  name:'教工端',
                  prop:"faculty",
                  click:this.handleClickCheckRow
                },
                {
                  name:'校友端',
                  prop:'schoolfellow',
                  click:this.handleClickCheckRow
                },
                {
                  name:'学生端',
                  prop:'pupil',
                  click:this.handleClickCheckRow
                }
              ]
            },
            {
              name: "操作",
              child: [],
              btnList: [
                {
                  name: "编辑",
                  click:this.handleClickEdit
                },
                {
                  name: "删除",
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type: "major",
          list: [
            {
              name: "专业名称",
              prop: "line_name",
              isColorPicker:false,
            },
            {
              name: "操作",
              child: [],
              width:'150',
              btnList: [
                {
                  name: "编辑",
                  click:this.handleClickEdit
                },
                {
                  name: "删除",
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type: "klass",
          list: [
            {
              name: "班级名称",
              prop: "class_name"
            },
            {
              name: "操作",
              child: [],
              width: 200,
              btnList: [
                {
                  name: "编辑",
                  click:this.handleClickEdit
                },
                {
                  name: "删除",
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type:'helpType',
          list:[
            {
              name:'类型',
              prop:'name'
            },
            {
              name:'自定义色彩',
              prop:'color',
              isColorPicker:true
            },
            {
              name:'操作',
              child:[],
              btnList:[
                {
                  name:'编辑',
                  click:this.handleClickEdit
                },
                {
                  name:'删除',
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type:'helpList',
          list:[
            {
              name:'公告',
              prop:'name'
            },
            {
              name:'内容',
              prop:'text'
            }
          ]
        },
        {
          type:'official',
          list:[
            {
              name:'官方组织',
              prop:'official_name'
            },
            {
              name:'操作',
              child:[],
              btnList:[
                {
                  name:'编辑',
                  click:this.handleClickEdit
                },
                {
                  name:'删除',
                  click:this.handleClickDel
                }
              ]
            }
          ]
        },
        {
          type:'group',
          list:[
            {
              name:'群组名称',
              prop:'grouping_name'
            },
            {
              name:'群组人数',
              prop:'countPeople'
            },
            {
              name:'操作',
              child:[],
              btnList:[
                {
                  name:'删除',
                  click:this.handleClickDel
                }
              ]
            },
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
    sublist() {
      return this.list.find(item => {
        return item.type == this.type;
      });
    }
  },
  methods: {
    //单击表格一行跳转
    handleClickRow(e){
      let path = this.$route.path
      if(path == '/firend/firend'){
        this.$router.push({name:'firendDetail',params:{data:e}})
      }
    },
    //色彩选择--提交
    colorPickerChange(id,$event){
      let url = '' , data = {id:id,color:$event}
      switch(this.$route.path){
        case '/setting/helpType' : url = 'SchoolFellow/addMutual_Help_Type' 
                    break;
        case '/setting/type' : url = 'SchoolFellow/updateActivity_Color'
                    break; 
      }
      this.$http(url,data).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
      })
    },
    //单击删除按钮 -- 删除
    handleClickDel($event) {
      let url = "",data = {};
      switch (this.type) {
        case "firend":
          (url = "SchoolFellow/delStudent_Info"), (data.id = $event.row.id);
          break;
        case 'year':
          (url = 'SchoolFellow/delStudent_Info_Age'),(data.id = $event.row.id)
          break;
        case 'school' : 
          (url = 'SchoolFellow/delSchool_Info_School') , (data.id = $event.row.id)
          break;
        case 'college' : 
          (url = 'SchoolFellow/delXueXiao'),(data.id = $event.row.id)
          break;
        case 'firends' : 
          (url = 'SchoolFellow/del_outstandin'),(data.id = $event.row.id)
          break;
        case 'helpType' : 
          (url = 'SchoolFellow/delMutual_Help_Type'),(data.id = $event.row.id)
          break;
        case 'actions' : 
          (url = 'SchoolFellow/delActivity_Type'),(data.id = $event.row.id)
          break;
        case 'major' : 
          (url = 'SchoolFellow/delStudent_info_Line'),(data.id = $event.row.id)
          break;
        case 'klass' : 
          (url = 'SchoolFellow/delStudent_Info_Class'),(data.id = $event.row.id)
          break;
        case 'official' : 
          (url = 'SchoolFellow/delActivity_Official'),(data.id = $event.row.id)
          break;
        case 'concat' : 
          (url = 'SchoolFellow/delContact_College') ,(data.id = $event.row.id)
          break;
        case 'group' :
          (url = 'SchoolFellow/delTidings_Grouping') , (data.id = $event.row.id)
          break;
      }
      this.$http(url, data).then(res => {
        let error = res.error == 0 ? "success" : "error";
        _g.toastMsg(error, res.msg);
        if (res.error == 0) {
          this.$emit("getDelMsg",true);
        }
      });
    },
    //单击编辑按钮 -- 编辑
    handleClickEdit($event){
      if(this.$route.path == '/setting/year'){
          this.$store.commit('saveValue',{title:'编辑',status:true,name:'addNewYear',value:$event.row,type:'addYear',action:'edit',id:$event.row.id})
      }
      if(this.$route.path == '/pages/school' && this.type=='school'){
         this.$store.commit('saveValue',{title:'编辑',status:true,name:'editCollege',value:$event.row,type:'editCollege',action:'edit',id:$event.row.id})
      }
      if(this.$route.path == '/pages/school' && this.type == 'college'){
        this.$store.commit('saveValue',{title:'编辑',status:true,name:'editSchool',value:$event.row,type:'editSchool',action:'edit',id:$event.row.id})
      }
      if(this.type == 'firends'){
        this.$store.commit('saveValue',{title:'编辑',status:true,name:'addRemark',value:$event.row,type:'addRemark',action:'edit',id:$event.row.id})
      }
      if(this.type == 'helpType'){
        this.$store.commit('saveValue',{title:'编辑',status:true,name:'addHelpType',value:$event.row,type:'addHelpType',action:'edit',id:$event.row.id})
      }
      if(this.type == 'actions'){ 
        this.$store.commit('saveValue',{title:'编辑',status:true,name:'editActionType',value:$event.row,type:'editActionType',action:'edit',id:$event.row.id})
      }
      if(this.type == 'major'){
         this.$store.commit('saveValue',{title:'编辑',status:true,name:'editSettingMajor',value:$event.row,type:'editSettingMajor',action:'edit',id:$event.row.id})
      }
      if(this.type == 'klass'){
        this.$store.commit('saveValue',{title:'编辑',status:true,name:'editSettingKlass',value:$event.row,type:'editSettingKlass',action:'edit',id:$event.row.id})
      }
      if(this.type == 'official'){
        this.$store.commit('saveValue',{title:'编辑',status:true,name:'editSettingOfficial',value:$event.row,type:'editSettingOfficial',action:'edit',id:$event.row.id})
      }
      if(this.type == 'concat'){
        this.$store.commit('saveValue',{title:'编辑',status:true,name:'editSettingConcat',value:$event.row,type:'editSettingConcat',action:'edit',id:$event.row.id})
      }
    },
    //单击查看按钮
    handleClickShowMsg($event){
      this.$alert($event.row.student_remarks ? $event.row.student_remarks : '他还没有备注哦,快点添加一条吧','备注',{
        confirmButtonText:'确定',
      })
    },
    
    //单击改变状态 --是否开放档案
    handleClickChangeState($event){
      let url = '' , data = {}
      if(this.type == 'year'){
        url = 'SchoolFellow/XGStudent_Info_Age'
        data = $event.row
      }

      this.$http(url,data).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
      })
    },

    //复选框 -- 活动类型--设置同步展示
    handleClickCheckRow($event){
      let url = ''
      switch (this.$route.path){
        case '/setting/type' : url = 'SchoolFellow/XGActivity_Type'
                              break; 
      }
      this.$http(url,$event.row).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
      })
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 1366px) {
  .my-table {
    max-width: calc(1200px - 140px);
  }
}
img[alt="avatar"]{
  width:60px;
  height:60px;
}
</style>
