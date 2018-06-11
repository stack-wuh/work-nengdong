<template>
  <section class="dialog" v-show="isShowDialog">
    <el-dialog class="el-dialog" ref="my-dialog" @close="dialogClose" :title="title" :visible.sync="isShowDialog">
        <el-form :model="form.validForm" ref="myForm" class="my-form">
          <el-form-item class="my-form-item" :prop="item.prop" v-for="(item,index) in form.info" :key="index" :label="item.name" :rules="item.rules" label-width="100px">
            <el-select v-if="item.isSelect" v-model="form.validForm[item.prop]">
              <el-option v-for="(sItem,sIndex) in item.list" :key="sIndex" :label="sItem.name" :value="sItem.value"></el-option>
            </el-select>
            <el-input v-if="item.isInput" v-model="form.validForm[item.prop]" ></el-input>
            <el-upload v-else-if="item.isUpload" 
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list='false'
              :on-success="handleAvatarSuccess">
              <img v-if="form.validForm.image" :src="form.validForm.image" alt="avatar">
              <img v-if="form.validForm.file" :src="form.validForm.file" alt="avatar">
              <el-button>{{imgUrl ? '重新选择' : '选择文件'}}</el-button>
            </el-upload> 
            <el-color-picker v-else-if="item.isColorPicker" v-model="form.validForm[item.prop]"></el-color-picker>
            <el-input v-else-if="item.isTextarea" type="textarea" :row="item.row" v-model="form.validForm[item.prop]"></el-input>
            <el-switch v-if="item.isSwitch" active-text="是" inactive-text="否" active-value='1' inactive-value="0" v-model="form.validForm[item.prop]"></el-switch>
            <el-checkbox v-if="item.isCheck" v-for="(citem,cindex) in  item.checkList" :key="cindex" :label="citem.name" v-model="form.validForm[citem.prop]"></el-checkbox>
            <div v-if="item.isEditor" id="editor"></div>
          </el-form-item>
        </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="hideDialog">取 消</el-button>
        <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import E from 'wangeditor'
  export default{
    props:['title','isShowDialog','id'],
    data(){
      return{
        updatePwd:{
          info:[
            {
              name:'更改密码',
              value:'',
              type:'password',
              prop:'password',
              rules:[
                {
                  required:true,
                  message:'密码不能为空',
                  trigger:'blur'
                },
              ]
            },
            {
              name:'确认密码',
              value:'',
              type:'password',
              prop:'checkword',
              rules:[
                {
                  required:true,
                  message:'密码不能为空',
                  trigger:'blur'
                },
              ]
            }
          ],
          validForm:{
            password:'',
            checkword:''
          }
        },
        feedback:{
          info:[
            {
              name:'反馈',
              value:'',
              type:'text',
              prop:'feedback',
              rules:[
                {
                  required:true,
                  message:'请填写反馈',
                  trigger:'blur'
                }
              ]
            }
          ]
        },
        error:1,
        uploadUrl:rootPath + 'SchoolFellow/addImages',
        imgUrl:''
      }
    },
    computed:{
      form(){
        let form = {}
        switch(this.$store.state.formType){
          case 'updatePwd' : form = this.$store.state.form.changePwd 
                            break;
          case 'feedback' : form = this.$store.state.form.addFeedback // 活动--添加反馈信息 
                            break;
          case 'addYear' : form = this.$store.state.form.addNewYear
                            break;
          case 'pagesFeedback' : form = this.$store.state.form.pagesFeed
                            break;
          case 'addDonate' : form = this.$store.state.form.addDonate
                            break;
          case 'editCollege' :form = this.$store.state.form.editCollege
                            break;
          case 'editSchool' : form = this.$store.state.form.editSchool
                            break;
          case 'addRemark' : form = this.$store.state.form.addRemark //黄页--杰出校友管理--添加备注
                            break;
          case 'concatFeedback' :form = this.$store.state.form.addConcatFeed
                            break;
          case 'addHelpType'  :form = this.$store.state.form.addHelpType
                            break;
          case 'addActionType' : form = this.$store.state.form.addActionType //设置--活动类型设置--添加活动类型
                            break;
          case 'editActionType' : form = this.$store.state.form.editActionType //设置--活动类型设置--编辑活动类型
                            break;
          case 'addPagesSchool' : form  = this.$store.state.form.addPagesSchool   //添加-黄页管理-添加学院
                            break;
          case 'addPagesCollege' : form = this.$store.state.form.addPagesCollege //添加 -黄页管理 -添加学校
                            break;
          case 'addSettingMajor' : form = this.$store.state.form.addSettingMajor //设置--添加--专业
                            break;
          case 'editSettingMajor' : form = this.$store.state.form.editSettingMajor //设置--编辑--专业
                            break;
          case 'addSettingKlass' : form = this.$store.state.form.addSettingKlass // 设置-添加-班级
                            break;
          case 'editSettingKlass' : form = this.$store.state.form.editSettingKlass //设置-编辑-班级
                            break;
          case 'addSettingOfficial' : form = this.$store.state.form.addSettingOfficial //设置-添加-官方组织
                            break;
          case 'editSettingOfficial' : form = this.$store.state.form.editSettingOfficial //设置-编辑 -官方组织
                            break;
          case 'addConcatSchool' : form = this.$store.state.form.addConcatSchool //设置-添加-联系学院
                            break;
          case 'editSettingConcat' : form = this.$store.state.form.editSettingConcat //设置-编辑-联系学院
                            break;
        }
        return form
      }
    },
    methods:{
      //对话框关闭
      dialogClose(){
        this.$emit('dialogClose',true)
      },
      handleAvatarSuccess(e){
        for(var k in this.form.validForm){
          if(k == 'image'){
            this.form.validForm.image = e
          }else if(k == 'file'){
            this.form.validForm.file = e
          }
        }
      },
      hideDialog(){
        this.$refs.myForm.resetFields()
        this.$store.commit('changeDialogStatus',{status:false,formType:''})
        setTimeout(()=>{
          this.$store.commit('changeRefresh',{state:false})
        },1000)
      },
      handleClickSubmit(){
        // this.$emit('getSubMsg',{state:true})
        // setTimeout(()=>{
        //   this.hideDialog()
        // },1000)
        // return
        let type = this.$store.state.formType
        let action = this.$store.state.action
        let id = this.$store.state.id
        let student_info_id = sessionStorage.getItem('userId')
        let data = {}
        data = Object.assign(this.form.validForm,{id:id,student_info_id:student_info_id})
        this.$refs['myForm'].validate((valid)=>{
          if(valid){
            if(type == 'updatePwd'){
              if(this.form.validForm.password != this.form.validForm.checkword){
                _g.toastMsg('error','两次密码不一致')
                return
              }else{
                let data = {}
                data = Object.assign(this.form.validForm,{id:window.sessionStorage.getItem('userId')})
                this.$http('SchoolFellow/UpdatePassword',this.form.validForm).then(res=>{
                  let error = res.error == 0 ? 'success' : 'error'
                  _g.toastMsg(error,res.msg)
                  if(res.error == 0){
                    this.hideDialog()
                  }
                })
              }
            }else if(type == 'feedback'){           // 活动--添加反馈
              let data = {}
              data = Object.assign(this.form.validForm,{id:id})
              this.$http('SchoolFellow/Activity_Manager_NoPass',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addYear'){ // 设置-- 添加/编辑学年
              let url = '' , data = {}
              if(action == 'add'){
                  url = 'SchoolFellow/addStudent_Info_Age'
                  data = this.form.validForm
              }else if(action == 'edit'){
                url = 'SchoolFellow/updateStudent_Info_Age'
                data = Object.assign(this.form.validForm,{id:id})
              }
              this.$http(url,data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                this.error = res.error
                this.$store.commit('handleClickStatus',{state:res.error})
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})                  
                  this.hideDialog()
                }
              })
            }else if (type == 'addHelp'){  
              
            }else if(type=='pagesFeedback'){
              this.$http('SchoolFellow/updateAlumni_Pages_no',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addDonate'){
              this.$http('SchoolFellow/addAlumni',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'editCollege' || type == 'addPagesSchool'){
              this.$http('SchoolFellow/updateSchool_Info_School',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'editSchool' || type == 'addPagesCollege'){
              this.$http('SchoolFellow/updateXueXiao',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addRemark'){
              this.$http('SchoolFellow/updateStudent_Remarks',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'concatFeedback'){
              this.$http('SchoolFellow/Mutual_Help_No',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addHelpType'){
              this.$http('SchoolFellow/addMutual_Help_Type',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addActionType' || type == 'editActionType'){
              this.$http('SchoolFellow/addActivity_Type',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addSettingMajor' || type == 'editSettingMajor'){
              this.$http('SchoolFellow/addStudent_info_Line',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addSettingKlass' || type == 'editSettingKlass'){
              this.$http('SchoolFellow/addStudent_Info_Class',data).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addSettingOfficial' || type == 'editSettingOfficial'){
              this.$http('SchoolFellow/addActivity_Official',data).then(res=>{
                let  error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                }
              })
            }else if(type == 'addConcatSchool' || type == 'editSettingConcat'){
              this.$http('SchoolFellow/addContact_College',data).then(res=>{
              let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.$emit('getSubMsg',{state:true})
                  this.hideDialog()
                  setTimeout(()=>{
                    this.$router.push('/school')
                  },1000)
                }
              })
            }
          }
        })
      }
    },
  }
</script>

<style lang="less" scoped>
  .dialog{
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:10 !important;
    .el-dialog{
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,.5);
    }
    .my-form{
      margin:0 auto;
      .my-form-item{
        width:90%;
        margin:0 auto;
        margin-bottom:20px;
      }
      #editor{
        width:100%;
        height:400px;
        border:1px solid red;
      }
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  img[alt="avatar"]{
    width:300px;
    height:200px;
  }
</style>
