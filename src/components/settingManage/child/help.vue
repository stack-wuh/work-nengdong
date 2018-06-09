<template>
  <section class="wrapper">
    <search type="2" />
    <el-input v-model="text" :rows="15" class="my-input" type="textarea" placeholder="请输入公告内容"></el-input>
    <div class="btn-area">
      <span @click="submit" class="btn base">提交</span>
    </div>
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
        text:''
      }
    },
    methods:{
      submit(){
        if(!this.text){
          _g.toastMsg('warning','请填写公告内容')
          return
        }
        this.$http('SchoolFellow/updateMutual_help_Announcement',{text:this.text}).then(res=>{
          let error = res.error == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.msg)
          if(res.error == 0){
            setTimeout(()=>{
              this.$router.go(-1)
              this.text = ''
            },1000)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.my-input{
  width: 60%;;
}
.btn-area{
  width:60%;
  margin-top:10px;  
  text-align:center;
}
</style>
