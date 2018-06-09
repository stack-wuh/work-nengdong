<template>
  <section class="wrapper">
    <search @propKey="propKey" @confirm="fetchData" type="7" />
    <e-table @getDelMsg="getDelMsg" type="actions" :info="info"  />
    <bottom type="pagination" :total="total" />
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ETable from '@/components/common/table'
  import Bottom from '@/components/common/bottom'
  const list = [
    {
      type:'校友活动',
      color:'#002211',
      setting:[
        {
          stu:0,
          tea:0,
          fir:0
        }
      ],
    },
    {
      type:'学院活动',
      color:'#002211',
      setting:[
        {
          stu:1,
          tea:1,
          fir:1
        }
      ]
    }
  ]
  export default{
    components:{
      ETable,
      Search,
      Bottom
    },
    data(){
      return{
        info:{
          type:'actions',
          list:list
        },
        total:0,
        pageNo:1
      }
    },
    computed:{
      submitState(){
        return this.$store.state.submitState
      }
    },
    watch:{
      submitState(e){
        e && this.fetchData()
      }
    },
    methods:{
      getDelMsg(e){
        e && this.fetchData()
      },
      propKey(e){
        this.fetchData(e)
      },
      fetchData(name){
        this.$http('SchoolFellow/getActivity_Type',{pageNo:this.pageNo,type_name:name}).then(res=>{
          for(var k in res.data){
            for(var j in res.data[k]){
              if(j !== 'id'){
                if(res.data[k][j] == '0' || res.data[k][j] == 'false'){
                  res.data[k][j] = false
                }else if(res.data[k][j] == '1' || res.data[k][j] == 'true'){
                  res.data[k][j] = true
                }
              }
            }
          }
          this.info.list = res.data
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

</style>
