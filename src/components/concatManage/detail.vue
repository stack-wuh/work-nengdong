<template>
  <section class="wrapper">
    <search type=2 />
    <section class="content">
      <p class="nav-title">当前位置: 互联互助>详情</p>

      <action-info type="concat" :info="info" />
      <bottom v-if="info.list.check_text == '待审核'" type="btn" :data="{id:$route.params.id}" />
    </section>
  </section>
</template>

<script>
  import Search from '@/components/common/search'
  import ActionInfo from '@/components/common/actionInfo'
  import Bottom from '@/components/common/bottom'
  export default {
    components:{
      Search,
      ActionInfo,
      Bottom
    },
    data(){
      return{
        info:{
          type:'',
          list:[]
        }
      }
    },
    methods:{
      fetchData(){
        this.$http('SchoolFellow/getMutual_Help').then(res=>{
          this.info.list = res.data.find(item=>{
            return item.id == this.$route.params.id
          })
          this.info.list = Object.assign(this.info.list,this.info.list.student_info)
          this.info.list.addressList = this.info.list.mutual_help_image.address.split(',')
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
