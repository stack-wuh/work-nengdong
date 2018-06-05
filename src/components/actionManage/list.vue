<template>
    <section class="wrapper">
        <search @propKey="propKey" @confirm="fetchData" @getList="getList" type="4" />
        <section class="content">
          <p class="nav-title">当前位置：{{$route.params.type == 'action' ? '活动管理' : $route.params.type == 'pages' ? '校友会管理' : '互助列表'}}>{{msg.name ? msg.name : '待审核'}}</p>
          <item-list @getDelMsg="getDelMsg" :list="list" />
          
          <bottom type="pagination" :total="total" />
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
        msg:{}
      }
    },
    computed:{
    },
    watch:{
      $router:'fetchData'
    },
    methods:{
      propKey(e){
        this.fetchData(e)
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      getList(e){
        this.msg = e
        this.list = this.subList.filter(item=>{
          return item.check_text == e.name
        })
        this.total  = this.list.length
      },
      fetchData(title){
        let url = ''
        if(this.$route.params.type == 'action'){
          url = 'SchoolFellow/getActivity_Manager'
        }else if(this.$route.params.type == 'pages'){
          url = 'SchoolFellow/dshORwtg'  
        }else if(this.$route.params.type == 'concat'){
          url = 'SchoolFellow/getMutual_Help'
        }
        this.$http(url,{title:title}).then(res=>{
          this.list = res.data
          this.subList = res.data
          this.total = Number.parseInt(res.total)
        })
      }
    },
    created(){
      this.fetchData()
    },
  }
</script>

<style lang="less" scoped>
.wrapper{
  ::-webkit-scrollbar{
    display: none;
  }
}
</style>
