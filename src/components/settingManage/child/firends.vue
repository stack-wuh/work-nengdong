<template>
  <section class="wrapper">
    <nav class="nav">
      <span @click="current=1" :class="{'active':current == 1}">公告设置</span>
      <span @click="current=2" :class="{'active' : current == 2}">联系学院</span>
    </nav>

    <section class="father" v-show="current == 1">
      <el-input v-model="text" class="my-input" :rows="15" type="textarea" placeholder="请输入内容"></el-input>
    </section>
    <section class="father" v-show="current == 2">
      <el-form :model="form" ref="form" :rules="formRules">
        <el-form-item label="地址" prop="address">
          <el-input placeholder="请输入地址" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="邮编" prop="code">
          <el-input placeholder="请输入邮箱地址" v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input placeholder="请输入电话" v-model="form.phone"></el-input>          
        </el-form-item>
        <el-form-item label="传真" prop="fax">
          <el-input placeholder="请输入传真地址" v-model="form.fax"></el-input>          
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input placeholder="请输入邮箱地址" v-model="form.email"></el-input>          
        </el-form-item>
      </el-form>
    </section>
      <div class="btn-area">
        <span @click="submit" class="btn base">提交</span>
      </div>
  </section>  
</template>

<script>
  export default{
    data(){
      return{
        current:1,
        text:'',
        form:{
          address:'',
          code:'',
          phone:'',
          fax:'',
          email:''
        },
        formRules:{
          address:[
            {
              required:true,
              message:'请填写地址',
              trigger:'blur'
            }
          ],
          code:[
            {
              required:true,
              message:'请填写邮编',
              trigger:'blur'
            }
          ],
          phone:[
            {
              required:true,
              message:'请填写电话号码',
              trigger:'blur'
            }
          ],
          fax:[
            {
              required:true,
              message:'请填写传真',
              trigger:'blur'
            }
          ],
          email:[
            {
              required:true,
              message:'请填写邮箱地址',
              trigger:'blur'
            },{
              type:'email',
              message:'请输入正确的邮箱地址',
              trigger:'blur'
            }
          ]
        }
      }
    },
    methods:{
      submit(){
        if(this.current == 1){
          if(!this.text){
            _g.toastMsg('warning','请输入内容')
            return
          }
          this.$http('SchoolFellow/updatealumni_Announcement',this.text).then(res=>{
            let error = res.error == 0 ?'success' : 'error'
            _g.toastMsg(error,res.msg)
            if(res.error == 0){
              setTimeout(()=>{
                this.text = ''
              },1000)
            }
          })
        }if(this.current == 2){
          this.$refs.form.validate(valid=>{
            if(valid){
              this.$http('SchoolFellow/updatePop_Up',this.form).then(res=>{
                let error = res.error == 0 ? 'success' : 'error'
                _g.toastMsg(error,res.msg)
                if(res.error == 0){
                  setTimeout(()=>{
                    this.$refs.form.resetFields()
                  },1000)
                }
              })
            }
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
nav.nav{
  border-bottom:1px solid #009489;
  span{
    display: inline-block;
    width:80px;
    height:40px;
    margin:0;
    color: #009489;
    line-height:40px;
    font-size: 16px;
    text-align:center;
    border:1px solid #009489;
    border-bottom:none;
  }
  span.active{
    color: #fff;
    background-color: #009489;
  }
}
.father{
  width:60%;
  .my-input{
    margin-top:10px;
  }
}
.btn-area{
  width: 60%;
  margin-top:10px;
  text-align:center;
}
</style>
