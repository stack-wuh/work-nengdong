<template>
    <section class="father">
        <div v-for="(item,index) in format.subList" :key="index">
          <span :class="[item.isActive ? 'base' : '','btn']" v-on:click="item.click(item)">{{item.name}}</span>
        </div>
        <div class="empty"></div>
        <div>
          <el-input clearable @change="$emit('confirm',keywords)" v-model="keywords" class="my-input" placeholder="请输入关键字">
            <template slot="append"><span v-on:click="$emit('propKey',keywords)" class="my-input-text">搜索</span></template>
          </el-input>
        </div>
    </section>
</template>

<script>
export default {
  props: ["type",'school'],
  data() {
    return {
      list: [
        {
          type: 1,
          subList: [
            {
              name: "添加",
              click:this.handleClickAdd
            },
            {
              name: "批量导入",
              click:this.otherImport
            },
            {
              name: "导出当前页名单",
              click:this.export2excel
            }
          ],
          showInput: true
        },
        {
          type:2,
          showInput:false,
          subList:[
            {
              name:'返回上一级',
              showInput:true,
              click:this.pageBack
            }
          ]
        },
        {
          type:3,
          subList:[
            {
              name:'发起活动',
              click:this.handleClickAction
            },
            {
              name:'批量操作',
              click:this.handleClickPick
            },
          ],
          showInput:true
        },
        {
          type:4,
          showInput:true,
          subList:[
            {
              name:'待审核',
              click:this.handleClickPedding,
              isActive:true
            },
            {
              name:'未通过',
              click:this.peddingFail,
              isActive:false
            }
          ]
        },
        {
          type:5,
          subList:[
            {
              name:'创建',
              click:this.handleClickFirends
            },
            {
              name:'批量操作',
              click:this.handleClickPick
            }
          ],
          showInput:true
        },
        {
          type:6,
          subList:[
            {
              name:'发布',
              click:this.jump2other
            },
            {
              name:'批量操作',
              click:this.handleClickPick
            }
          ],
          showInput:true
        },
        {
          type:7,
          subList:[
            {
              name:'添加',
              click:this.handleClickAdd
            }
          ],
          showInput:true
        },
        {
          type:8,
          subList:[
            {
              name:'添加',
              click:this.handleClickAdd
            },
            {
              name:'批量操作',
              click:this.handleClickPick
            }
          ]
        },
        {
          type:9,
          subList:[
            {
              name:'发布公告',
              click:this.jump2other
            },
            {
              name:'返回上一级',
              click:this.pageBack
            }
          ]
        },
        {
          type:10,
          subList:[
            {
              name:'批量操作',
              click:this.handleClickPick
            },
            {
              name:'导出当前页'
            }
          ]
        },
        {
          type:11,
          subList:[
            {
              name:'添加',
              click:this.jump2other
            },
            {
              name:'批量操作',
              click:this.handleClickPick
            }
          ],
          showInput:true,
        }
      ],
      keywords:''
    };
  },
  computed: {
    format() {
      return this.list.find(item=>{
        return item.type == this.type
      })
    }
  },
  created(){
    // console.log(this.format)
  },
  methods:{
    //添加事件
    handleClickAdd(data){
      this.$store.commit('changeDialogStatus',{title:'修改密码',status:true})
      if(data){
        let path = this.$router.history.current.path
        let params = {title:data.name,status:true}
        if(path == '/setting/year'){
          params.type = 'addYear'
        }else if(path == '/donate'){
          params.type = 'addDonate'
        }else if(path == '/setting/helpType'){
          params.type = 'addHelpType'
        }else if(path == '/setting/type'){
          params.type = 'addActionType'
        }else if(path == '/pages/school' && this.school == 1){
          params.type = 'addPagesSchool'
        }else if(path == '/pages/school' && this.school == 2){
          params.type = 'addPagesCollege'
        }else if(path == '/setting/major'){
          params.type = 'addSettingMajor'
        }else if(path == '/setting/klass'){
          params.type = 'addSettingKlass'
        }else if(path == '/setting/official'){
          params.type = 'addSettingOfficial'
        }else if(path == '/setting/concat'){
          params.type = 'addConcatSchool'
        }
        this.$store.commit('changeDialogStatus',params)
      }
    },
    otherImport(){
      console.log('批量导入')
    },
    export2excel(){
      console.log('导出当前页菜单')
    },
    //活动模块
    //返回上一级
    pageBack(){
      this.$router.go(-1)
    },
    //发起活动
    handleClickAction(){
      this.$router.push('/action/active')
    },
    //创建校友会
    handleClickFirends(){
      this.$router.push('/pages/new')
    },
    //批量操作
    handleClickPick(){
      this.$emit('PickAny',true)
    },

    //跳转路由
    jump2other(){
      let path = ''
      switch(this.$route.path){
        case '/setting/helpList' : path = '/setting/help'
                                break;
        case '/concat' : path = '/concat/action'
                        break; 
        case '/donate' : path = '/donate/publish'
                        break;
      }
      this.$router.push(path)
    },
    //待审核
    handleClickPedding(e){
      e.isActive = true
      this.format.subList.filter(item=>{
        return item.name !== e.name
      })[0].isActive = false
      this.$emit('getList',{state:false,name:e.name})
    },
    //未通过
    peddingFail(e){
      e.isActive = true
      this.format.subList.filter(item=>{
        return item.name !== e.name
      })[0].isActive = false
      this.$emit('getList',{state:true,name:e.name})
    }
  }
};
</script>

<style lang="less" scoped>
.father {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 15px 20px;
  font-size: 16px;
  background-color: #e0e0e0;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  box-sizing: border-box;

  .empty{
    flex:1;
  }
} 

  .my-input-text{
    display: inline-block;
    width: 100%;
    height:100%;
    text-align: center;
    line-height:40px;
    user-select: none;
  }
</style>
