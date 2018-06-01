<template>
  <section class="dialog" v-show="isShowDialog">
    <el-dialog class="el-dialog"  :title="title" :visible.sync="isShowDialog">
        <el-form :model="updatePwd.validForm" ref="myForm" class="my-form">
          <el-form-item class="my-form-item" :prop="item.prop" v-for="(item,index) in form" :key="index" :label="item.name" :rules="item.rules" label-width="100px">
            <el-input :type="item.type" v-model="updatePwd.validForm[item.prop]" ></el-input>
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
      }
    },
    computed:{
      form(){
        switch(this.$store.state.formType){
          case 'updatePwd' : return this.updatePwd.info
                            break;
          case 'feedback' : return this.feedback.info
                            break;
        }
      }
    },
    methods:{
      hideDialog(){
        this.$store.commit('changeDialogStatus',{status:false,formType:''})
      },
      handleClickSubmit(){
        let type = this.$store.state.formType
        this.$refs['myForm'].validate((valid)=>{
          if(type == 'updatePwd'){
            if(this.updatePwd.validForm.password != this.updatePwd.validForm.checkword){
              _g.toastMsg('error','两次密码不一致')
              return
            }
          }else if(type == 'feedback'){
            
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
