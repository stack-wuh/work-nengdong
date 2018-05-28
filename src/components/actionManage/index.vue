<template>
    <section class="wrapper">
      <search type='3' />
      <div class="content">
        <p class="nav-title">当前位置: 活动管理>活动列表</p>
        <ul class="item-list">
          <li v-for="(item,index) in checkList" :key="index" >
            <span>{{item.name}}: </span>
            <p>
              <span v-for="(subItem,subIndex) in item.list" :key="subIndex">{{subItem}}</span>
            </p>
          </li>
        </ul>
        
        <item-list />
      </div>
    </section>
</template>

<script>
import Search from '@/components/common/search'
import ItemList from '@/components/common/itemList'
  export default{
    components:{
      Search,
      ItemList
    },
    data(){
      return{
        checkList:[
          {
            name:'类型',
            list:['全部','校友活动','学院活动','专业活动','班级活动','讲座活动']
          },
          {
            name:'组织者',
            list:['全部','官方','非官方']
          },
          {
            name:'官方组织',
            list:['全部','校友会','院学生会','院科协']
          },
          {
            name:'状态',
            list:['全部','进行中','已结束']
          }
        ]
      }
    },
  }
</script>

<style lang="less" scoped>

</style>
