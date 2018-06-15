<template>
    <section class="wrapper">
      <search @PickAny="pickAny" type="10" @json2excel="handleClickExport2excel" @propKey="propKey" @confirm="fetchData" />
      <section class="content">
        <p class="nav-title">当前位置: 联系学院>列表</p>
        <nav class="nav">
          类型: 
          <span @click="handleClickChange(1)" :class="{'txt-active':current==1}">全部</span>
          <span @click="handleClickChange(2)" :class="{'txt-active':current==2}">忘记密码</span>
          <span @click="handleClickChange(3)" :class="{'txt-active':current==3}">校友身份认证</span>
          <span @click="handleClickChange(4)" :class="{'txt-active':current==4}">其他</span>
        </nav>
        <item-list @getDelAnyMsg="getDelAnyMsg" @changeIsShow="changeIsShow" @getDelMsg="getDelMsg" :list="list" :isShow="isShow" />
        <bottom @getCurrentPage="getCurrentPage" :total="total" type="pagination" />
      </section>
    </section>
</template>

<script>
import Search from '@/components/common/search'
import Bottom from '@/components/common/bottom'
import ItemList from '@/components/common/itemList'
const json2Excel = require('js-export-excel')
const list=[]
  export default{
    components:{
      Search,
      Bottom,
      ItemList
    },
    data(){
      return{
        current:1,
        total:0,
        pageNo:1,
        list:list,
        key:'',
        type:'',
        isShow:false
      }
    },
    methods:{
      handleClickExport2excel(msg){
        var option = {}
        option.fileName = '导出当前页信息',
        option.datas=[
          {
            sheetData:this.list,
            sheetName:'联系学院列表',
            sheetFilter:['name','year','classes','no','phone','email','question_type','illustrate',''],
            sheetHeader:['姓名','入学年份','专业班级','身份证号','手机号','邮箱','问题类型','问题详情']
          }
        ]
        if(msg){
          var toExcel = new json2Excel(option)
          toExcel.saveExcel()
        }
      },
      getCurrentPage(e){
        this.pageNo = e
        this.fetchData()
      },
      getDelAnyMsg(e){
        e && this.fetchData()
      },
      changeIsShow(e){
        this.isShow = e
      },
      pickAny(e){
        this.isShow = e
      },
      propKey(e){
        this.fetchData(e)
      },
      getDelMsg(e){
        e && this.fetchData()
      },
      handleClickChange(e){
        this.current = e
        this.type = e == 1 ? '' : e == 2 ? '忘记密码' : e == 3 ? '校友身份认证失败' : '其他'
        this.fetchData()
      },
      fetchData(name){
        this.$http('SchoolFellow/getContact_College',{type:this.type,pageNo:this.pageNo,name:name}).then(res=>{
         res.data &&  res.data.map(item=>{
            if(item.address)
              item.address = item.address.split(',')
          })
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
    cursor: pointer;
  }
  span:first-of-type{
    margin-left:10px;
  }
}
</style>
