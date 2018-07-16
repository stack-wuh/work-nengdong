<template>
  <section class="wrapper">
    <search type="2" />
    <section class="content">
        <p class="nav-title">当前位置: 校友捐赠>详情</p>
        <div class="article-info">
           <h3>{{info.title}}</h3>
           <p>{{info.details}}</p>
           <p>
             <img :src="info.image || '../../../static/img/logo.png'" alt="avatar">
           </p>
           <article v-html="info.proclaim"></article>
        </div>
    </section>
  </section>
</template>


<script>
  import Search from '@/components/common/search'
  export default{
    components:{
      Search
    },
    data(){
      return{
        info:{}
      }
    },
    methods:{
      fetchData(){
        this.$http('SchoolFellow/showAlumni',{id:this.$route.params.id}).then(res=>{
            this.info = res.data[0]
        })
      }
    },
    created(){
      this.fetchData()
    }
  }
</script>

<style lang="less" scoped>
.article-info{
  height:100%;

  h3{
    text-align:center;
  }
  h3~p{
    text-align:center;
  }
  article{
    padding:10px;
    overflow: hidden;
  }
}
img[alt="avatar"]{
  width:120px;
  height:120px;
}
</style>
