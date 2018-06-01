<template>
  <section class="wrapper bottom">

    <el-pagination v-show="type == 'pagination'" class="my-nav"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <div class="btn-list" v-show="type== 'btn'">
        <span @click="handleClickPassOrNo(true)" class="btn btn-pass">通过</span>
        <span @click="handleClickPassOrNo(false)" class="btn btn-unpass">不通过</span>
    </div>
  </section>  
</template>

<script>
  export default{
    props:['type','total','data'],
    data(){
      return{
       currentPage:1
      }
    },
    methods:{
      handleClickPassOrNo(state){
        let url = ''
        url = state ? 'Activity_Manager_Pass' : 'Activity_Manager_NoPass'
        if(!state){
          this.$store.commit('changeDialogStatus',{title:'反馈意见',status:true,type:'feedback'})
        }else{
          this.$http(url,this.data).then(res=>{
            let error = res.error == 0 ? 'success' :'error'
            _g.toastMsg(error,res.msg)
            res.error == 0  && this.$emit('getClickMsg',true)
          })
        }
      },
      handleCurrentChange(e){
        this.$emit('getCurrentPage',e)
      },
    }
  }
</script>

<style lang="less" scoped>
@danger:#FF6969;
@suceess:#6192F6;
  .bottom{
    display: flex;
    align-items:center;
    justify-content: center;
    height:50px !important;
    margin-bottom:15px;
    .btn-list{
      color: #fff;
      .btn{
        border:none;
      }
      .btn-pass{
        background-color:@suceess;
      }
      .btn-unpass{
        background-color:@danger;
      }
    }
  }
</style>
