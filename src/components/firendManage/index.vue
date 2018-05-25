<template>
    <section class="wrapper">
        <search type="1" />
        <ul class="check-list">
          <li></li>
        </ul>
    </section>
</template>

<script>
import Search from  '@/components/common/search'
export default {
  components:{
    Search
  },
  data() {
    return {
      checkList:[
        {
          name:'入学年份',
          list:[
            {
              name:'全部',
              list:[
                {
                  name:''
                }
              ]
            },
            {
              name:'2010',
            },
            {
              name:'2011'
            },
            {
              name:'2012'
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  .check-list{

  }
}
</style>
