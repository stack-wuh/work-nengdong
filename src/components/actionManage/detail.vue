<template>
    <section class="wrapper">
      <search  type='2'/>
      <section class="content">
        <p class="nav-title">当前位置：活动管理>活动列表>活动详情</p>

        <action-info :info="list" />

        <p v-show="info.list.length > 0" class="btn-list"><span>报名详情</span><span @click="export2Excel" class="btn">导出报名表</span></p>

        <e-table v-show="info.list.length > 0" class="el-table" type="action" :info="info"></e-table>
        <bottom v-if="list.check_text == '待审核'" @getClickMsg="getClickMsg" type="btn" :data="{id:$route.params.id}" />
      </section>
    </section>
</template>

<script>
import Search from '@/components/common/search'
import ETable from '@/components/common/table'
import ActionInfo from '@/components/common/actionInfo'
import Bottom from '@/components/common/bottom'
  const list = []
  export default{
    components:{
      Search,
      ETable,
      Bottom,
      ActionInfo
    },
    data(){
      return{
        info:{
          type:'action',
          list:list
        },
        table:[],
        list:[]
      }
    },
    methods:{
      //导出报名表
      export2Excel(){
        this.$http('SchoolFellow/getActivity_Excel',{id:this.$route.params.id}).then(res=>{
          
        })
      },
      //获取报名列表
      getOrderList(){
        this.$http('SchoolFellow/getActivityBy_BM',{id:this.$route.params.id}).then(res=>{
          this.info.list = res.data.map(item=>{
            return item = Object.assign(item,item.student_info)
          })
        })
      },
      getClickMsg(e){
        e && this.fetchData()
      },
      fetchData(){
        this.$http('SchoolFellow/getActivity_Manager',{id:this.$route.params.id}).then(res=>{
         this.list = res.data.find(item=>{
              return item.id == this.$route.params.id
          })
          console.log(this.list)
        })
      }
    },
    created(){
      this.fetchData()
      this.getOrderList()
    }
  }
</script>

<style lang="less" scoped>
  ::-webkit-scrollbar{
    display: none;
  }
  p.btn-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:10px 0;
  }

</style>
