<template>
  <section class="wrapper">
    <search @PickAny="PickAny"  @propKey="propKey" @confirm="fetchData" type='6' />
    <section class="content">
      <p class="nav-title">当前位置: 互联互助>列表</p>
      <nav class="nav">
        类型: 
        <span @click="handleClickChange(-1)" :class="{'txt-active':current == -1}">全部</span>
        <span @click="handleClickChange(index,item.name)" :class="{'txt-active':current == index}" v-for="(item,index) in typeList" :key="index">{{item.name}}</span>
      </nav>
      <item-list @getDelAnyMsg="getDelAnyMsg" @changeIsShow="changeIsShow" @getDelMsg="getDelMsg" :list="list" :isShow="isShow" />
      <bottom @getCurrentPage="getCurrentPage" :total="total" type="pagination" />
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
        total:0,
        pageNo:1,
        current:-1,
        type:'',
        isShow:false,
        typeList:[]
      }
    },
    methods:{
      getCurrentPage(e){
        this.pageNo = e
        this.fetchData()
      },
      PickAny(e){
        this.isShow = e
      },
      getDelAnyMsg(e){
        e && this.fetchData()
      },
      changeIsShow(e){
        this.isShow = e
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      handleClickChange(e,type){
        this.current = e
        this.type = type
        this.pageNo = 1
        this.fetchData()
      },
      propKey(e){
        this.fetchData(e)  
      },
      getTypeList(){
        this.$http('SchoolFellow/getMutual_Help_Type').then(res=>{
          this.typeList = res.data
        })
      },
      fetchData(title){
        this.$http('SchoolFellow/getMutual_Help',{title:title,type:this.type,pageNo:this.pageNo,student_info_id:sessionStorage.getItem('userId')}).then(res=>{
          this.list = res.data
          this.total = res.total
        })
      }
    },
    created(){
      this.fetchData()
      this.getTypeList()
    }
  }
</script>

<style lang="less" scoped>
nav.nav{
  margin-top:10px;
  padding:5px 10px;
  font-size: 16px;
  border:1px solid #e0e0e0;
  border-radius: 2px;
  span{
    margin-right:15px;
    font-size: 15px;
  }
  span:hover{
    cursor: pointer;
  }
  span:first-of-type{
    margin-left:10px;
  }
}
</style>
