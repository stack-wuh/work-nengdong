<template>
  <section class="wrapper">
    <search type="1" />
    <div class="content">
      <p class="nav-title">当前位置: 校友管理>校友详情</p>
      <nav class="nav flex-box">
        <span class="btn active">学院黄页</span>
        <span class="btn">学校黄页</span>
        <span class="empty"></span>
      </nav>
      <e-table :info="info" type="school" />
    </div>
  </section>

</template>

<script>
  import Search from '@/components/common/search'
  import ETable from '@/components/common/table'
  const list = [
    {
      name:'名称',
      phone:'13123233232'
    },
    {
      name:'电话',
      phone:'14412331344'
    }
  ]
  export default{
    components:{
      Search,
      ETable
    },
    data(){
      return{
        info:{
          type:'school',
          list:list
        }
      }
    }
  }
</script>

<style lang="less" >
  @base:#00998d;
  .content{
    .list-content{
      li{
        padding:20px 0;
        border-bottom:1px solid #eee;
        h3{
          height:15px;
          line-height:15px;
          padding-left:5px;
          border-left:4px solid @base;
        }
        div{
          display: flex;
          flex-wrap: wrap;
          margin-top:10px;
          span{
            margin-bottom:10px;
            margin-right:20px;
            color: #666;
            span{
              color: #333;
            }
          }
        }
      }
      li:first-of-type{
        display: flex;
        align-items: center;
        h3{
          border:none;
        }
        div{
          display: flex;
          flex-direction: column;

          div{
            display: flex;
            flex-direction: row;
          }
        }
        img{
          width: 100px;
          height:100px;
          border-radius: 50%;
        }
      }
    }

    .nav{
      margin-top:10px;
      margin-bottom:20px;
      padding-bottom:0px;
      border-bottom:1px solid @base;
      span{
        color: #fff;
      }
      span.btn{
        margin:0;
        color: @base;
        font-size: 16px;
        border-radius: 0;
        border-bottom:none;
      }
      span.empty ~ span{
        display: inline-block;
        padding:2px 5px;
        margin:0 5px;
      }
      span.btn.active{
        color: #fff;
        background-color: @base;
      }

    }
  }
</style>
