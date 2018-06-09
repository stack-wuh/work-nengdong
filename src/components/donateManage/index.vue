<template>
  <section class="wrapper">
    <search @PickAny="pickAny" @confirm="fetchData" @propKey="propKey" type="11" />
    <section class="content">
      <p class="nav-title">当前位置: 校友捐赠>列表</p>
      <item-list @getDelAnyMsg="getDelAnyMsg" @changeIsShow="changeIsShow" @getDelMsg="getDelMsg" :list="list" :isShow="isShow" />
      <bottom @getCurrentPage="getCurrentPage" type="pagination" :total="total" />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ItemList from '@/components/common/itemList'
  import Bottom from '@/components/common/bottom'
  import E from 'wangeditor'
  export default{
    components:{
      Search,
      ItemList,
      Bottom
    },
    data(){
      return{
        list:[],
        pageNo:1,
        total:0,
        isShow:false
      }
    },
    methods:{
      getCurrentPage(e){
        this.pageNo = e
        this.fetchData()
      },
      getDelAnyMsg(e){
        e && this.fetchData()
        this.isShow = false
      },
      changeIsShow(e){
        this.isShow = e
      },
      pickAny(e){
        this.isShow = e
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      propKey(e){
        this.fetchData(e)
      },
      fetchData(title){
        this.$http('SchoolFellow/getAlumni',{pageNo:this.pageNo,title:title}).then(res=>{
          this.list = res.data
          this.total = res.total
        })
      }
    },
    created(){
      this.fetchData()
      this.$nextTick(()=>{
        var editor = new E('#editor')
        editor.create()
      })
    }
  }
</script>

<style lang="less" scoped>

</style>
