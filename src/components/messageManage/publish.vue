<template>
  <section class="wrapper">
    <search type="2" />
    <section class="content">
      <p class="nav-title">当前位置：消息中心>发布</p>
      <el-form :model="form" :rules="rules" ref="myForm" label-width="100px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请填写标题"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="form.content" type="textarea" :rows="3" placeholder="请填写内容"></el-input>
        </el-form-item>
        <el-form-item label="发送对象" prop="receive_id">
          <div class="tips">
            <el-input v-model="chooseNum" readonly @focus="openDialog" style="width:220px;"></el-input>
            <span class="tips">附件</span>
            <el-upload class="upload-demo" :action="uploadPath" :on-success="handleFileSuccess" :show-file-list="true" :limit="1">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="开始时间" prop="starttime">
          <div class="tips">
            <el-date-picker  value-format="yyyy-MM-dd hh:mm:ss" type="datetime" placeholder="选择开始日期" v-model="form.starttime" style="width:220px;"></el-date-picker>
            <span class="tips">图片</span>
            <el-upload class="upload-demo" :action="uploadPath" :on-success="handleSuccessImage" :limit="4">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="结束时间" prop="endtime">
          <div class="tips">
            <el-date-picker type="datetime" value-format="yyyy-MM-dd hh:mm:ss" placeholder="选择结束日期" v-model="form.endtime" style="width:220px;"></el-date-picker>
            <span class="tips">表单</span>
            <el-button @click="handleClickAddFormItem" type="primary" size="small">添加表单</el-button>
          </div>
        </el-form-item>
        <el-form-item label="提醒时间" prop="remind">
          <el-radio-group v-model="form.time_or">
            <el-radio label="0">开始前</el-radio>
            <el-radio label="1">截止前</el-radio>
          </el-radio-group>
          <el-input v-model="form.remind" placeholder="单位/小时" style="width:180px;margin-left:10px;"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-area">
        <span @click="submit" class="btn base">提交</span>
        <span @click="()=>{$router.go(-1)}" class="btn">取消</span>
      </div>
    </section>
  </section>  
</template>

<script>
import Search from "@/components/common/search";
export default {
  components: {
    Search
  },
  data() {
    return {
      uploadPath: rootPath + "SchoolFellow/addImages",
      uploadFilesPath:rootPath + 'fileUpLoad',
      form: {
        title: "",
        content: "",
        starttime: "",
        endtime: "",
        remind: "",
        time_or: "",
        send_id: sessionStorage.getItem("userId"),
        receive_id: [],
        accessory_name: "",
        image_name: [],
        form_title: "",
        form_content: ""
      },
      rules: {
        title: [
          {
            required: true,
            message: "请填写标题",
            trigger: "blur"
          }
        ],
        content: [
          {
            required: true,
            message: "请填写内容",
            trigger: "blur"
          }
        ],
        receive_id: [
          // {
          //   required:true,
          //   message:'请选择发送对象',
          //   trigger:'blur'
          // }
        ],
        starttime: [
          {
            required: false
          }
        ],
        endtime: [
          {
            required: false
          }
        ],
        remind: [
          {
            required: false
          }
        ]
      },
      dialogMsg: "点击选择发送对象"
    };
  },
  computed: {
    chooseNum() {
      return "已经选中了" + this.total + "人";
    },
    total() {
      return this.$store.state.total;
    },
    chooseArr() {
      return this.$store.state.chooseArr;
    },
    addFormItem(){
      return this.$store.state.addFormItem
    }
  },
  methods: {
    //点击上传附件
    handleFileSuccess(file){
      this.form.accessory_name = file.toString()
    },
    //点击上传图片
    handleSuccessImage(file){
      this.form.image_name.push(file.toString())
    },
    handleClickAddFormItem(){   //单击添加表单
      this.$store.commit('changeDialogStatus',{status:true,type:'addFormItem',title:'添加表单'})
    },
    getStudentInfo() {
      // 获取发送对象
      this.$http("SchoolFellow/showTidings_People", {
        student_info_id: sessionStorage.getItem("userId")
      }).then(res => {
        this.$store.commit("changeMessageTree", res);
      });
    },
    //选择发送对象
    openDialog() {
      this.$store.commit("changeDialogStatus", {
        status: true,
        title: "选择发送对象",
        type: "chooseReciver"
      });
      // this.$store.commit('changeMessageTree')
    },
    getReciver() {
      this.$http("SchoolFellow/getStudent_Info_Tidings");
    },
    submit() {
      this.form.receive_id = [];
      this.chooseArr.map(item => {
        if (item.length > 0) {
          item.map(item => {
            this.form.receive_id.push(item.number);
          });
        }
      });
      this.form.receive_id = this.form.receive_id.toString();
      if (this.form.receive_id.length == 0) {
        _g.toastMsg("error", "请选择发送对象");
        return;
      }
      this.form = Object.assign(this.form,this.addFormItem)
      this.form.form_content =  this.form.form_content.toString()
      this.form.image_name = this.form.image_name.toString()
      this.$refs.myForm.validate(valid => {
        if (valid) {
          this.$http("SchoolFellow/addTidings", this.form).then(res => {
            let error = res.error == 0 ? "success" : "error";
            _g.toastMsg(error, res.msg);
            if (res.error == 0) {
              setTimeout(() => {
                this.$refs.myForm.resetFields();
                this.$router.go(-1);
              }, 1000);
            }
          });
        }
      });
    }
  },
  created() {
    this.getStudentInfo();
  }
};
</script>

<style lang="less" scoped>
.tips {
  display: flex;
}
span.tips {
  margin-left: 40px;
  margin-right: 10px;
}
.btn-area {
  margin-left: 30px;
}
</style>
