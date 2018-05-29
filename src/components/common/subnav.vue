<template>
  <section class="wrapper">
    <ul class='list'>
      <li @click.stop="jump2other(item)" :class="[format.length > 5 ? 'list-item-other list-item' : 'list-item']" v-for="(item,index) in format" :key="index">{{item.name}}</li>
    </ul>
  </section>  
</template>

<script>
  export default {
    props:['subList'],
    data(){
      return{
          list : this.subList
      }
    },
    computed:{
      format(){
       return this.subList
      }
    },
    methods:{
      jump2other(e){
        this.$router.push(e.urlPath)
      },
    }
  }
</script>

<style lang="less" scoped>
  .wrapper{
    position: absolute;
    color: #333;
    z-index: 1000 !important;
    .list-item-other{
      top:-320px !important;
    }
    .list{
      width:100%;
      padding:10px 0;
      background-color: #fff;
      list-style-type:none;

      .list-item{
        height:30px;
        padding-left:20px;
        font-size: 17px;
        text-align: left;
        line-height:30px;
      }
      .list-item .active,
      .list-item:hover{
        background:#00998d;
        color: #fff;
        transition:all .5s linear;
      }
    }
  }
</style>
