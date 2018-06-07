<template>
  <section class="wrapper">
    <search type="2" />
    <section class="content">
        <p class="nav-title">当前位置：黄业管理>校友会黄页>校友会详情</p>
        <action-info :info="page" />
        <p class="el-title">活动</p>
        <e-table class="my-table" :info="info" type="pages" />
        <bottom v-if="page.list.check_text == '待审核'" type="btn" :data="{id:$route.params.id}" />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ActionInfo from '@/components/common/actionInfo'
  import ETable from '@/components/common/table'
  import Bottom from '@/components/common/bottom'
  const info = {
    type:'pages',
    list:[
      {
        title:'活动标题',
        time:'2018-01-01'
      },
      {
        title:'活动标题1',
        time:'2018-02-02'
      }
    ]
  }
  export default{
    components:{
      Search,ActionInfo,ETable,Bottom
    },
    data(){
      return{
        info:info,
        showButtom:false,
        page:{
          type:'pages',
          list:[]
        }
      }
    },
    computed:{

    },
    methods:{
      //获取发布者的历史消息
      getList(){
        this.$http('SchoolFellow/getAlumni_PagesByME',{student_info_id:this.$route.params.sid}).then(res=>{
          this.info.list = res.data.map(item=>{
            return item = {title:item.title,time:new Date(item.time).getFullYear()+'-'+new Date(item.time).getMonth()+'-'+new Date(item.time).getDay() 
                  + ' '+ new Date(item.time).getHours() + ":"+new Date(item.time).getMinutes()}
          })
          
        })
      },
      fetchData(){
        this.$http('SchoolFellow/getAlumni_Pages').then(res=>{
          this.page.list = res.data.find(item=>{ 
            return item.id == this.$route.params.id
          })
          this.page.list.address = this.page.list.alumni_pages_album.address.split(',')
        })
      },
    },
    created(){
      this.getList()
      this.fetchData()
    },
    destroyed(){
      
    }
  }
</script>

<style lang="less" scoped>

</style>
