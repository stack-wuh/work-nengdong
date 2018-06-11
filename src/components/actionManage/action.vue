<template>
    <section class="wrapper">
        <search type="2" />
        <section class="content">
          <p class="nav-title">当前位置: 活动管理>活动列表>发起活动</p>
          <div class="father">
            <el-form ref="addForm" :model='form' :rules="rules" label-width="140px">
              <el-form-item label="活动类型" prop="type">
                <el-select v-model="form.type">
                  <el-option v-for="(item,index) in actionLists" :key="index" :label="item.type_name" :value="item.type_name"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动标题" prop="title">
                <el-input v-model="form.title" placeholder="请输入活动标题"></el-input>
              </el-form-item>
              <el-form-item label="组织者" prop="whether">
                <el-radio v-model="form.whether" label="官方">官方</el-radio>
                <el-select v-if="form.whether == '官方'" v-model="form.official">
                  <el-option v-for="(item,index) in whetherList" :key="index" :label="item.name" :value="item.name"></el-option>
                </el-select>                
                <el-radio v-model="form.whether" label="非官方">非官方</el-radio>
                <el-input v-model="form.text" v-if="form.whether == '非官方'" class="my-input" placeholder="请输入组织者姓名"></el-input>
              </el-form-item>
              <el-form-item label="是否借用学校场地" prop="site">
                <el-switch v-model="form.site" active-value="1" inactive-value="0" active-text="是" inactive-text="否"></el-switch>
              </el-form-item>
              <el-form-item label="地址" prop="place">
                <el-input v-model="form.place" placeholder="请输入活动地址"></el-input>
              </el-form-item>
              <el-form-item label="活动介绍">
                <el-input v-model="form.activity_introduction" type="textarea" :row='2'></el-input>
              </el-form-item>
              <el-form-item label="参与人数" prop="participants">
                <el-input v-model="form.participants" placeholder="参与人数"></el-input>
              </el-form-item>
              <el-form-item label="参与要求">
                <el-input v-model="form.require_text" type="textarea" :row="2" placeholder="请输入参与人数"></el-input>
              </el-form-item>
              <el-form-item label="费用">
                <el-input v-model="form.money" type="textarea" placeholder="请输入费用详细说明"></el-input>
              </el-form-item>
              <el-form-item label="负责人">
                <el-input v-model="form.leading_name" placeholder="默认此账号,可以修改"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
              </el-form-item>
              <el-form-item label="QQ">
                <el-input v-model="form.qq" placeholder="请输入QQ"></el-input>            
              </el-form-item>
              <el-form-item label="微信">
                <el-input v-model="form.weixin" placeholder="请输入微信"></el-input>
              </el-form-item>
              <el-form-item label="QQ群">
                <el-input v-model="form.group_text" placeholder="请输入QQ群"></el-input> 
              </el-form-item>
              <el-form-item label="封面图片" prop="cover">
                <el-upload
                    class="avatar-uploader"
                    :action='uploadImg'
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess">
                    <img v-if="form.cover" :src="form.cover" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon avatar"></i>
                  </el-upload>
              </el-form-item>
              <el-form-item label="其他图片" >
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
                        <img :src="item" alt="avatar">
                      </span>
                    </div>
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form.remark" type="textarea" placeholder="备注详情"></el-input>
              </el-form-item>
            </el-form>
            <div class="btn-father">
              <span @click="handleClickSubmit" class="btn base">提交</span>
            </div>
          </div>
        </section>
    </section>
</template>

<script>
import Search from "@/components/common/search";
import Bottom from "@/components/common/bottom";
export default {
  components: {
    Search,
    Bottom
  },
  data() {
    return {
      form: {
        type:'',
        title:'',
        whether:'官方',
        official:'',
        text:'',
        place:'',
        site:'',
        activity_introduction:'',
        participants:'',
        require_text:'',
        money:'',
        leading_name:'',
        phone:'',
        email:'',
        qq:'',
        weixin:'',
        group_text:'',
        cover:'',
        remark:'',
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
            message:'请填写活动标题',
            tigger:'blur'
          }
        ],
        whether:[
          {
            required:true,
            message:'请选择组织者',
            trigger:'change'
          }
        ],
        site:[
          {
            required:true,
            message:'请选择是否借用场地',
            tigger:'change'
          }
        ],
        place:[
          {
            required:true,
            message:'请填写活动地址',
            trigger:'blur'
          }
        ],
        participants:[
          {
            required:true,
            message:'请填写参与人数',
            trigger:'blur'
          }
        ],
        cover:[
          {
            required:true,
            message:'请选择封面图片',
            trigger:'change'
          }
        ]
      },
      uploadImg:rootPath + 'SchoolFellow/addImages',
      actionLists:[],
      whetherList:[]
    };
  },
  methods:{
    //获取活动类型
    getActionType(){
      this.$http('SchoolFellow/getActivity_Type').then(res=>{
        this.actionLists = res.data
      })
    },
    //获取官方组织者
    getWhether(){
      this.$http('SchoolFellow/getActivity_Gf_Type').then(res=>{
        this.whetherList = res
      })
    },
    handleAvatarSuccess(e){
      this.form.cover = e[0]
    },
    handleListSuccess(e){
      this.form.address.push(e[0])
    },
    handleRemove(index){
      this.form.address.splice(index,1)
    },

    handleClickSubmit(e){
      this.$refs['addForm'].validate(valid=>{
        if(valid){
          this.$http('SchoolFellow/addActivity_Manager',this.form).then(res=>{
            let error = res.error == 0 ? 'success' : 'error'
            _g.toastMsg(error,res.msg)
            if(res.error == 0){
              this.$router.push('/action')
            }
          })
        }
      })
    }
  },
  created(){
    this.getActionType()
    this.getWhether()
    this.$nextTick(()=>{
      if(this.$route.params.data){
        this.form = this.$route.params.data
        if(this.$route.params.data.activity_image.address){
          this.form.address = this.$route.params.data.activity_image.address ? 
                                  this.$route.params.data.activity_image.address : []
        }
      }
    })
  }
};
</script>

<style lang="less" scoped>
.btn-father {
  text-align: center;
}

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
  img[alt="avatar"]{
    width:180px;
    height:180px;
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
  .imgs-list{ 
    width:100%;
    height:200px;
  }
  .my-input{
    width:300px;
  }
</style>
