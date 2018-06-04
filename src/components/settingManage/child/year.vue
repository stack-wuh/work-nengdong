<template>
  <section class="wrapper">
    <search @confirm="confirm" @propKey="propKey" type="7" />
    <e-table @getDelMsg="getDelMsg" type="year" :info="info" />
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ETable from '@/components/common/table'
  const list = [
    {
      year:'2010',
      is_site:0
    },
    {
      year:2011,
      is_site:1
    }
  ]
  export default{
    components:{
      ETable,
      Search
    },
    data(){
      return{
        info:{
          type:'year',
          list:list
        }
      }
    },
    methods:{
      //获取所有入学年份
      fechData(name){
        this.$http('SchoolFellow/getYear',{name:name}).then(res=>{
          this.info.list = res.data
        })
      },
      confirm(e){
        this.fechData(e)
      },
      propKey(e){
        this.fechData(e)
      },
      //获取子组件删除操作的返回消息
      getDelMsg(e){
        e && this.fechData()
      }
    },
    created(){
      this.fechData()
    }
  }
</script>

<style lang="less" scoped>

</style>
