<template>
  <section class="wrapper">
    <search type=2 />
    <section class="content">
      <p class="nav-title">当前位置：黄业管理>校友会黄页>创建校友会</p>
      <el-form :model="form" ref="addform" :rules="rules" label-width="100px">
        <el-form-item label="活动类型" prop="type">
          <el-select v-model="form.type">
            <el-option v-for="(item,index) in typeList" :key="index" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称" prop="title">
          <el-input v-model="form.title" placeholder="请输入活动名称"></el-input>
        </el-form-item>
        <el-form-item label="活动介绍" prop="introduced">
          <el-input v-model="form.introduced" placeholder="请输入活动介绍"></el-input>
        </el-form-item>
        <el-form-item label="入会要求" prop="require_text">
          <el-input v-model="form.require_text" placeholder="请输入入会要求"></el-input>
        </el-form-item>
        <el-form-item label="入会方式" prop="way">
          <el-input v-model="form.way" placeholder="请输入入会方式"></el-input>
        </el-form-item>
        <el-form-item label="发起人" prop="name">
          <el-input v-model="form.name" placeholder="请输入发起人"></el-input>
        </el-form-item>
        <el-form-item label="学院专业班级">
          <el-input v-model="form.class_text"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-checkbox v-model="form.phone_hide">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-checkbox>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-checkbox  v-model="form.email_hide">
            <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
          </el-checkbox>
        </el-form-item>
        <el-form-item label="QQ">
          <el-checkbox v-model="form.qq_hide">
            <el-input v-model="form.qq" placeholder="请输入QQ"></el-input>
          </el-checkbox>
        </el-form-item>
        <el-form-item label="微信">
          <el-checkbox v-model="form.weixin_hide">
            <el-input v-model="form.weixin" placeholder="请输入微信"></el-input>
          </el-checkbox>
        </el-form-item>
        <el-form-item label="封面图片" prop="image">
            <el-upload
                class="avatar-uploader"
                :action='uploadImg'
                :show-file-list="false"
                :on-success="handleAvatarSuccess">
                <img v-if="form.image" :src="form.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon avatar"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="其他图片">
                <el-upload
                    class="avatar-uploader img-list"
                    :action='uploadImg'
                    :show-file-list="false"
                    :on-success="handleListSuccess">
                    <i class="el-icon-plus avatar-uploader-icon avatar"></i>
                  </el-upload>
                     <div class="img-list">
                      <span v-for="(item,index) in form.address" :key="index" >
                        <img @click="handleRemove(index)" class="icon-close" src="../../../static/img/icon-close.png" alt="close">
                        <img :src="item" class="avatar">
                      </span>
                    </div>          
        </el-form-item>
        <el-form-item class="btn-list"> 
          <span @click="handleClickSubmit" class="btn base">提交</span>
        </el-form-item>
      </el-form>
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
        form:{
          id:'',
          type:'',
          title:'',
          introduced:'',
          require_text:'',
          way:'',
          name:'',
          class_text:'',
          phone:'',
          phone_hide:'',
          email:'',
          email_hide:'',
          qq:'',
          qq_hide:'',
          weixin:'',
          weixin_hide:'',
          image:'',
          address:[],
          student_info_id:sessionStorage.getItem('userId')
        },
        rules:{
          type:[
            {
              required:true,
              message:'请选择活动类型',
              trigger:'change'
            }
          ],
          title:[
            {
              required:true,
              message:'请填写标题名称',
              trigger:'blur'
            }
          ],
          introduced:[
            {
              required:true,
              message:'请输入活动介绍',
              trigger:'blur'
            }
          ],
          way:[
            {
              required:true,
              message:'请输入发起方式',
              trigger:'blur'
            }
          ],
          require_text:[
            {
              required:true,
              message:'请输入入会要求',
              trigger:'blur'
            }
          ],
          name:[
            {
              required:true,
              message:'请输入发起人',
              trigger:'blur'
            }
          ],
          image:[
            {
              required:true,
              message:'请选择封面图片',
              trigger:'change'
            }
          ],
          email:[
            {
              type:'email',
              message:'请输入正确的email地址',
              trigger:'blur'
            }
          ]
        },
        typeList:[]
      }
    },
    methods:{
      getTypeList(){
        this.$http('SchoolFellow/getAlumni_Pages_TypeService').then(res=>{
          this.typeList = res
        })
      },
      handleClickSubmit(){
        console.log(this.form)
        // return
        this.$refs['addform'].validate(valid=>{
          if(valid){
            if(!this.form.phone && !this.form.email && !this.form.qq && !this.form.weixin){
              _g.toastMsg('error','至少填写一项联系方式')
              return
            }
            if(!this.form.phone_hide && !this.form.email_hide && !this.form.email_hide && !this.form.weixin_hide){
              _g.toastMsg('error','至少勾选一项联系人可见')
              return
            }
            this.$http('SchoolFellow/addAlumni_Pages',this.form).then(res=>{
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
      },
    handleAvatarSuccess(e){
      this.form.image = e.replace('\"','')
    },
    handleListSuccess(e){
      this.form.address.push(e)
    },
    handleRemove(index){
      this.form.address.splice(index,1)
    },

    },
    created(){
      this.getTypeList()
      this.$nextTick(()=>{
        if(this.$route.params.data){
          this.form = this.$route.params.data
          console.log(this.$route.params.data)
        }
      })
    },
  }
</script>

<style lang="less" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border:1px solid #eee;
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
    border:1px dashed #eee;
    display: block;

  }
  .img-list{
    display: flex;
    align-items: center;
    span{
      position: relative;
    }
    img{
      margin-right:15px;
    }
    .icon-close{
      position: absolute;
      right:-15px;
      top:-15px;
      z-index:1000 !important;
    }
  }
  .btn-list{
    text-align:center;
  }
</style>
