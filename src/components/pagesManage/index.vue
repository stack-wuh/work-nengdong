<template>
  <section class="wrapper">
    <search @propKey="propKey" @confirm="fetchData" type="5" />
    <section class="content">
      <p class="nav-title">当前位置: 黄页管理>校友会黄页</p>
      <nav class="nav">
        类型: 
        <span @click="handleClickChange(1)" :class="{'txt-active' : No == 1}">全部</span>
        <span @click="handleClickChange(2)" :class="{'txt-active' : No == 2}">按年级分</span>
        <span @click="handleClickChange(3)" :class="{'txt-active' : No == 3}">按地域分</span>
        <span @click="handleClickChange(4)" :class="{'txt-active' : No == 4}">按行业分</span>
      </nav>
      <item-list :list="list" type="pages" />
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
        No:1,
        list:[11,22,33],
        total:0,
        pageNo:1,
        type:''
      }
    },
    methods:{
      propKey(e){
        this.fetchData(e)
      },
      handleClickChange(e){
        this.No = e
        if(e == 1){
          this.type = ''
        }else if(e == 2){
          this.type="年级"
        }else if(e == 3){
          this.type = '地域'
        }else{
          this.type = '行业'
        }
        this.fetchData()
      },
      fetchData(title){
        let data = {
          title:title,
          type:this.type,
          pageNo:this.pageNo
        }
        this.$http('SchoolFellow/getAlumni_Pages',data).then(res=>{
          this.list = res.data
          this.total = res.total
        })
      }
    },
    created(){
      this.fetchData()
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
    cursor:pointer;
  }
  span:first-of-type{
    margin-left:10px;
  }
}
</style>
