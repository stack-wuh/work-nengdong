<template>
  <section class="wrapper">
    <section class="content">
      <p class="nav-title">当前位置：校友管理>添加</p>
      <section class="detail">
        <el-form ref="myForm" class="my-form" label-width="140px" :model="myForm" :rules="rules">
          <p class="title">基础信息</p>
          <el-form-item label="学院" prop="school">
            <el-input v-model="myForm.school" class="my-input" placeholder="请编辑学院"></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="line">
            <el-input v-model="myForm.line" class="my-input" placeholder="请编辑专业"></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="classes">
            <el-input v-model="myForm.classes" class="my-input" placeholder="请编辑班级"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop='phone_number'>
            <el-input v-model.number="myForm.phone_number" placeholder="请编辑手机号" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="myForm.email" placeholder="请编辑邮箱地址" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="QQ" prop="qq">
            <el-input v-model.number="myForm.qq" placeholder="请编辑QQ" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="微信" prop="weixin">
            <el-input v-model="myForm.weixin" placeholder="请编辑微信" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="工作/升学所在地" prop="site">
            <el-cascader v-model="myForm.site" change-on-select :options="citys"></el-cascader>
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-input v-model="myForm.address" placeholder="请编辑详细地址" class="my-input"></el-input>
          </el-form-item>
          <p class="title">就业档案</p>
          <el-form-item label="用人单位名称" prop="unit_name">
            <el-input v-model="myForm.unit_name" placeholder="请编辑用人单位名称" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="单位性质" prop="unit_property">
            <el-input v-model="myForm.unit_property" placeholder="请编辑单位性质" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="单位所在行业" prop="unit_way">
            <el-input v-model="myForm.unit_way" placeholder="请编辑所在行业" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="工作职位类别" prop="place_class">
            <el-input v-model="myForm.place_class" placeholder="请编辑工作职位类别" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="岗位名称(选填)">
            <el-input v-model="myForm.post_name" placeholder="请编辑岗位名称" class="my-input"></el-input>
          </el-form-item>
          <el-form-item label="起薪(选填)">
            <el-input v-model.number="myForm.money" placeholder="请编辑起薪" class="my-input"></el-input>
          </el-form-item>
          <span class="title">升学档案</span> 
          <div v-for="(item,index) in myForm.data" :key="index">
            <el-form-item label="层次">
              <el-input v-model="item.level" placeholder="请编辑层次" class="my-input"></el-input>
            </el-form-item>
            <el-form-item label="学校">
              <el-input v-model="item.schools" placeholder="请编辑学校" class="my-input"></el-input>
            </el-form-item>
            <el-form-item label="院系">
              <el-input v-model="item.faculty" placeholder="请编辑院系" class="my-input"></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <template>
                <div class="flex">
                  <el-input v-model="item.lines" placeholder="请编辑专业" class="my-input"></el-input>
                  <el-button @click="handleClickAddItem" v-show="index == 0" class="my-button" size="mini" type="primary">添加</el-button>
                </div>
              </template>
            </el-form-item>
          </div>

        </el-form>
        <div class="btn-list">
          <el-button @click="handleSubmit" size="small" type="primary">提交</el-button>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
const rules = {
  school:[
    {
      required:true,
      message:'请编辑学院名称',
      trigger:'blur'
    }
  ],
  line:[
    {
      required:true,
      message:'请编辑学院名称',
      trigger:'blur'
    }
  ],
  classes:[
    {
      required:true,
      message:'请编辑学院名称',
      trigger:'blur'
    }
  ],
  phone_number:[
    {
      required:true,
      message:'请编辑手机号',
      trigger:'blur'
    },
    {
      type:'number',
      message:'请注意手机号格式',
      trigger:'blur'
    }
  ],
  weixin:[
    {
      required:true,
      message:'请编辑微信',
      trigger:'blur'
    }
  ],
  qq:[
    {
      required:true,
      message:'请编辑qq',
      trigger:'blur'
    },
    {
      type:'number',
      message:'请输入正确的QQ号码',
      trigger:'blur'
    }
  ],
  email:[
    {
      required:true,
      message:'请编辑邮箱地址',
      trigger:'blur'
    },
    {
      type:'email',
      message:'请注意邮箱地址格式',
      trigger:['blur','change']
    }
  ],
  site:[
    {
      required:true,
      message:'请编辑工作/升学所在地',
      trigger:['blur','change']
    }
  ],
  address:[
    {
      required:true,
      message:'请编辑详细地址',
      trigger:'blur'
    }
  ],
  unit_name:[
    {
      required:true,
      message:'请编辑用人单位',
      trigger:'blur'
    }
  ],
  unit_property:[
    {
      required:true,
      message:'请编辑单位性质',
      trigger:'blur'
    }
  ],
  unit_way:[
    {
      required:true,
      message:'请编辑单位所在行业',
      trigger:'blur'
    }
  ],
  place_class:[
    {
      required:true,
      message:'请编辑工作职位类别',
      trigger:'blur'
    }
  ]          
};
const citysList = require('../../../static/js/city.js')
const {areas,citys,provinces} = citysList
export default {
  data() {
    return {
      myForm: {
        student_info_id: sessionStorage.getItem("userId"),
        school: "",
        line: "",
        classes: "",
        phone_number: "",
        email: "",
        qq: "",
        weixin: "",
        address: "",
        unit_name: "",
        unit_property: "",
        unit_way: "",
        place_class: "",
        post_name: "",
        money: "",
        data: [
          {
            level: "",
            schools: "",
            faculty: "",
            lines: ""
          }
        ],
        site: []
      },
      rules: rules,
      temp: {
        level: "",
        schools: "",
        faculty: "",
        lines: ""
      },
      citys:[],

    };
  },
  methods: {
    handleClickAddItem() {
      this.myForm.data.push(JSON.parse(JSON.stringify(this.temp)));
    },
    handleSubmit(){
      this.$refs.myForm.validate(valid=>{
        if(valid){
          console.log(this.myForm)
          console.log('is ok')
        }else{
          console.log('is no ok')
        }
      })
    },
  },
  created(){
    provinces.map(item => {  // 三级联动 -- 省级
      item.label = item.name
      item.value = item.name
      item.children = []
      for(var c in citys){ 
        if(c == item.id){
          citys[c].map(cc => {  // 三级联动 -- 市级
            cc.label = cc.name
            cc.value = cc.name
            cc.children = []
            for(var area in areas){
              if(area == cc.id){
                areas[area].map( aa => {
                  aa.label = aa.name
                  aa.value = aa.name
                })
                cc.children = areas[area]
              }
            }
          })
          item.children = citys[c]
        }
      }
    })
    this.citys = provinces
  }
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.title {
  margin-bottom: 10px;
  color: #999;
}
.my-button {
  margin-left: 15px;
}
.my-input {
  width: 420px;
}
.my-form {
  width: 70%;
  margin: 0 auto;
}
.btn-list {
  text-align: center;
}
</style>
