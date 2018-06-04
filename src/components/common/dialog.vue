<template>
  <section class="dialog" v-show="isShowDialog">
    <el-dialog class="el-dialog"  :title="title" :visible.sync="isShowDialog">
        <el-form :model="form.validForm" ref="myForm" class="my-form">
          <el-form-item class="my-form-item" :prop="item.prop" v-for="(item,index) in form.info" :key="index" :label="item.name" :rules="item.rules" label-width="100px">
            <el-input v-if="item.isInput && !item.row" :type="item.type" v-model="form.validForm[item.prop]" ></el-input>
            <el-input type="textarea" :row="item.row" v-model="form.validForm[item.prop]"></el-input>
            <el-switch v-if="item.isSwitch" active-text="是" inactive-text="否" active-value='1' inactive-value="0" v-model="form.validForm[item.prop]"></el-switch>
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
        error:1
      }
    },
    computed:{
      form(){
        let form = {}
        switch(this.$store.state.formType){
          case 'updatePwd' : form = this.$store.state.form.changePwd
                            break;
          case 'feedback' : form = this.$store.state.form.addFeedback
                            break;
          case 'addYear' : form = this.$store.state.form.addNewYear
                            break;
        }
        return form
      }
    },
    methods:{
      hideDialog(){
        this.$store.commit('changeDialogStatus',{status:false,formType:''})
      },
      handleClickSubmit(){
        let type = this.$store.state.formType
        let action = this.$store.state.action
        let id = this.$store.state.id
        this.$refs['myForm'].validate((valid)=>{
          if(type == 'updatePwd'){
            if(this.form.validForm.password != this.form.validForm.checkword){
              _g.toastMsg('error','两次密码不一致')
              return
            }else{
              let data = {}
              data = Object.assign(this.form.validForm,{id:window.sessionStorage.get('userId').value})
              this.$http('SchoolFellow/UpdatePassword',this.form.validForm).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  this.hideDialog()
                }
              })
            }
          }else if(type == 'feedback'){
            let data = {}
            data = Object.assign(this.form.validForm,{id:id})
            this.$http('SchoolFellow/Activity_Manager_NoPass',data).then(res=>{
              let error = res.error == 0 ? 'success' : 'error'
              _g.toastMsg(error,res.msg)
              if(res.error == 0){
                this.hideDialog()
                setTimeout(()=>{
                  this.$router.go(0)
                },1000)
              }
            })
          }else if(type == 'addYear'){
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
                this.hideDialog()
              }
            })
          }else if (type == 'addHelp'){
            
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .dialog{
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:100 !important;
    .el-dialog{
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,.5);
    }
    .my-form{
      margin:0 auto;
      .my-form-item{
        width:70%;
        margin:0 auto;
        margin-bottom:20px;
      }
    }
  }

</style>
