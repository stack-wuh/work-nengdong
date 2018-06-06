<template>
  <section class="wrapper">
    <nav>
      <span @click="item.click" class="btn" v-for="(item,index) in btnList.sub" :key="index">{{item.name}}</span>
    </nav>
  </section>  
</template>


<script>
  export default{
    props:['type'],
    data(){
      return{
        list:[
          {
            type:'action',
            sub:[
              {
                name:'删除',
                click:this.handleClickDel
              },
              {
                name:'取消',
                click:this.handleClickCancel
              }
            ]
          }
        ]
      }
    },
    computed:{
      btnList(){
        return this.list.find(item=>{
          return item.type == this.type
        })
      }
    },
    methods:{
      //单击删除
      handleClickDel(){},
      //单击取消
      handleClickCancel(){
        this.$emit('handleCancel',true)
      }
    }
  }
</script>

<style lang="less" scoped>
.wrapper{
  width:100%;
  height:60px;
  background-color: #eee;
  nav{
    display: flex;
    align-items: center;
    height:60px;
    padding:0 10px;
    line-height:60px;
  }
}
</style>
