<template>
    <section class="wrapper">
        <search @propKey="propKey" @confirm="fetchData" @getList="getList" type="4" />
        <section class="content">
          <p class="nav-title">当前位置：{{$route.params.type == 'action' ? '活动管理' : $route.params.type == 'pages' ? '校友会管理' : '互助列表'}}>{{msg.name ? msg.name : '待审核'}}</p>
          
          <item-list @getDelMsg="getDelMsg" :list="list" :check="msg.name" />
          
          <bottom @getCurrentPage="getCurrentPage" type="pagination" :total="total" />
        </section>
    </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ItemList from '@/components/common/itemList'
  import Bottom from '@/components/common/bottom'
  export default{
    components:{
      Search,
      ItemList,
      Bottom
    },
    data(){
      return{
        list:[],
        subList:[],
        page:1,
        total:0,
        msg:{
          name:'待审核'
        }
      }
    },
    computed:{
    },
    watch:{
      $router:'fetchData'
    },
    methods:{
      getCurrentPage(e){
        this.page = e
        this.fetchData()
      },
      propKey(e){
        this.fetchData(e)
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      getList(e){
        this.msg = e 
        this.fetchData(e.name)
      },
      fetchData(title='待审核'){
        let url = ''
        if(this.$route.params.type == 'action'){
          url = 'SchoolFellow/getActivity_Manager'
        }else if(this.$route.params.type == 'pages'){
          url = 'SchoolFellow/dshORwtg'  
        }else if(this.$route.params.type == 'concat'){
          url = 'SchoolFellow/getMutual_Help'
        }

        this.$http(url,{check_text:title,pageNo:this.page,student_info_id:sessionStorage.getItem('userId')}).then(res=>{
          this.list = res.data
          this.total = res.total
        })
      }
    },
    created(){
      this.fetchData()
    },
  }
</script>

<style lang="less" scoped>
</style>
