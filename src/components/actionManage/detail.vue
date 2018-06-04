<template>
    <section class="wrapper">
      <search  type='2'/>
      <section class="content">
        <p class="nav-title">当前位置：活动管理>活动列表>活动详情</p>

        <action-info :info="info.list" />

        <p v-show="false" class="btn-list"><span>报名详情</span><span class="btn">导出报名表</span></p>

        <e-table v-show="false" class="el-table" type="action" :info="table"></e-table>
        
        <bottom @getClickMsg="getClickMsg" type="btn" :data="{id:$route.params.id}" />
      </section>
    </section>
</template>

<script>
import Search from '@/components/common/search'
import ETable from '@/components/common/table'
import ActionInfo from '@/components/common/actionInfo'
import Bottom from '@/components/common/bottom'
  const list = [
    {
      name:'张晓晓',
      identity:'教职工',
      classes:'能动10111',
      phone:'13323233232'
    },
    {
      name:'张晓晓',
      identity:'教职工',
      classes:'能动10111',
      phone:'13323233232'
    }
  ]
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
        table:[]
      }
    },
    methods:{
      getClickMsg(e){
        e && this.fetchData()
      },
      fetchData(){
        this.$http('SchoolFellow/getActivity_Manager',{id:this.$route.params.id}).then(res=>{
         this.info.list = res.data.find(item=>{
              return item.id == this.$route.params.id
          })
        })
      }
    },
    created(){
      this.fetchData()
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
