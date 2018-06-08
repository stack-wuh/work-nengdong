<template>
    <section class="wrapper">
        <search type="2" />
        <section class="content">
          <p class="nav-title">当前位置:互联互助>列表>发布</p>
          <el-form class="el-form" :model="form" ref="myForm" :rules="rules" label-width="150px">
            <el-form-item label="帮助类型" prop="type">
              <el-select v-model="form.type">
                <el-option v-for="(item,index) in  typeList" :key="index" :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标题" prop="title">
              <el-input v-model="form.title" placeholder="请填写标题"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content">
              <el-input v-model="form.content" placeholder="请填写内容" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item label="封面图片" prop="image">
              <el-upload
                class="avatar-uploader"
                :action="uploadImg"
                :show-file-list="false"
                :on-success="handleAvatarSuccess">
                <img v-if="form.image" :src="form.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="其他图片">
              <el-upload
                class="avatar-uploader"
                :action="uploadImg"
                :show-file-list="false"
                :on-success="handleAvatarSuccess">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="联系人" prop="college">
              <el-input class="my-input" v-model="form.college"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input class="my-input" v-model="form.phone" placeholder="请输入手机号"></el-input>
              <el-checkbox  v-model="form.phone_hide"></el-checkbox>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input class="my-input" v-model="form.email" placeholder="请输入邮箱地址"></el-input>              
              <el-checkbox v-model="form.email_hide"></el-checkbox>
            </el-form-item>
            <el-form-item label="QQ">
              <el-input class="my-input" v-model="form.qq" placeholder="请输入QQ"></el-input>              
              <el-checkbox v-model="form.qq_hide"></el-checkbox>
            </el-form-item>
            <el-form-item label="微信">
               <el-input class="my-input" v-model="form.weixin" placeholder="请输入微信号"></el-input>             
               <el-checkbox v-model="form.weixin_hide"></el-checkbox>
            </el-form-item>
            <el-form-item>
              <span class="form-msg">联系方式对管理员全部可见,勾选项对全部客户可见,至少勾选一项</span>
            </el-form-item>
          </el-form>
          <div class="btn-father">
            <span @click="handleClickSubmit" class="btn base">提交</span>
          </div>
        </section>
    </section>
</template>

<script>
  import Search from '@/components/common/search'
  export default{
    components:{
      Search
    },
    data(){
      return{
        uploadImg:rootPath + 'SchoolFellow/addImages',
        imageUrl:'',
        form:{
          type:'',
          title:'',
          content:'',
          image:'',
          address:'',
          college:'',
          phone:'',
          phone_hide:'',
          email:'',
          email_hide:'',
          qq:'',
          qq_hide:'',
          weixin:'',
          weixin_hide:'',
        },
        rules:{
          type:[
            {
              required:true,
              message:'请选择类型',
              trigger:'change'
            }
          ],
          title:[
            {
              required:true,
              message:'请填写标题',
              trigger:'blur'
            }
          ],
          content:[
            {
              required:true,
              message:'请填写内容',
              trigger:'blur'
            }
          ],
          image:[
            {
              required:true,
              message:'请选择图片',
              trigger:'change'
            }
          ],
          college:[
            {
              required:true,
              message:'请填写联系人',
              trigger:'blur'
            }
          ]
        },
        typeList:[]
      }
    },
    methods:{
      handleAvatarSuccess(e){
        this.form.image = e
      },
      fetchData(){
        this.$http('SchoolFellow/getMutual_Help_Type').then(res=>{
          this.typeList = res.data
        })
      },
      handleClickSubmit(){
        this.$refs.myForm.validate(valid=>{
          if(valid){
            let data = {}
            data = Object.assign(this.form,{student_info_id:sessionStorage.getItem('userId')})
            if(!data.phone && !data.qq && !data.email && !data.weixin){
              _g.toastMsg('error','至少填写一项联系方式')
              return
            }
            if(!data.phone_hide && !data.qq_hide && !data.weixin_hide && !data.email_hide){
              _g.toastMsg('error','至少勾选一项可见')
              return
            }
            this.$http('SchoolFellow/addMutual_Help',data).then(res=>{
              let error = res.error == 0 ? 'success' : 'error'
              _g.toastMsg(error,res.msg)
              if(res.error == 0){
                setTimeout(()=>{
                  this.$router.go(-1)
                },1000)
              }
            })
          }
        })
      }
    },
    created(){
      this.fetchData()
      this.$nextTick(()=>{
        if(this.$route.params.data){
          this.form = this.$route.params.data
          console.log(this.form)
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .btn-father{
    text-align:center;
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
    border:1px dashed #eee;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .my-input{
    width:300px;
  }
  .form-msg{
    color: #999;
  }
</style>
