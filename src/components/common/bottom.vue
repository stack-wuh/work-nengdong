<template>
  <section class="wrapper bottom">

    <el-pagination v-show="type == 'pagination'" class="my-nav"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

    <div class="btn-list" v-show="type== 'btn'">
        <span class="btn btn-pass">通过</span>
        <span class="btn btn-unpass">不通过</span>
    </div>
  </section>  
</template>

<script>
  export default{
    props:['type'],
    data(){
      return{
       currentPage:1
      }
    },
    methods:{
      handleSizeChange(){},
      handleCurrentChange(){},
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
