<template>
  <section class="wrapper">
      <search type="2" />
      <section class="content">
        <p class="nav-title">当前页面: 校友捐赠>添加</p>
        <el-form :model="form" ref="myForm" :rules="rules" label-width="100px" >
          <el-form-item label="标题" prop="title">
            <el-input v-model="form.title"  placeholder="请输入标题"></el-input>
          </el-form-item>
          <!-- <el-form-item label="详情" prop="details" >
            <el-input type="textarea" :row="2" placeholder="请输入详情" v-model="form.details"></el-input>
          </el-form-item> -->
          <el-form-item label="封面" prop="image">
            <el-upload
              class="avatar-uploader"
              :action="uploadPath"
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
              <img v-if="form.image" :src="form.image" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>            
          </el-form-item>
          <el-form-item label="公告" prop="proclaim">
            <div id="editor"></div>
          </el-form-item>
          <div class="btn-list">
            <span @click="submit" class="btn base">提交</span>
          </div>
        </el-form>
      </section>
  </section>
</template>

<script>
  import Search from  '@/components/common/search'
  import E from 'wangeditor'
  export default{
    components:{
      Search
    },
    data(){
      return{
        uploadPath:rootPath + 'SchoolFellow/addImages',
        imgUrl:'',
        form:{
          title:'',
          image:'',
          proclaim:'',
          details:''
        },
        rules:{
          title:[
            {
              required:true,
              message:'请填写标题',
              trigger:'blur'
            }
          ],
          image:[
            {
              required:true,
              message:'请选择图片',
              trigger:'blur'
            }
          ],
          proclaim:[
            {
              required:true,
              message:'请填写公告内容',
              trigger:'blur'
            }
          ],
          details:[
            {
              required:true,
              message:'请填写公告详情',
              trigger:'blur'
            }
          ]
        },
      } 
    },
    methods:{
      handleAvatarSuccess(e){
        this.form.image = e
      },
      submit(){
        this.$refs.myForm.validate(valid=>{
          if(valid){
            this.$http('SchoolFellow/addAlumni',this.form).then(res=>{
              let error = res.error == 0 ? 'success' : 'error'
              _g.toastMsg(error,res.msg)
              if(res.error == 0){
                setTimeout(()=>{
                  this.$refs.myForm.resetFields()
                  this.$router.push('/donate')
                },1000)
              }
            })
          }
        })
      }
    },
    created(){
      this.$nextTick(()=>{
        var editor = new E('#editor')
        editor.customConfig.uploadImgServer = rootPath + 'SchoolFellow/InsertImages' //上传服务器地址
        editor.customConfig.uploadFileName = 'file'
        editor.customConfig.customAlert = function(info){
          _g.toastMsg('warning',info)
        }
        editor.customConfig.onchange = html => {
          this.form.proclaim = html
        }
        editor.create()
      })
    }
  }
</script>

<style lang="less" scoped>
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
  .btn-list{
    text-align:center;
  }
</style>
