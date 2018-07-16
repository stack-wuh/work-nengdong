import { STATUS_CODES } from "http";
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

const mutations = {
  showLoading(state,status){
    state.globlaLoading = status
  },
  //打开dialog对话框
  changeDialogStatus(state,status){
    state.dialogTitle = status.title
    state.isShowDialog = status.status
    state.formType = status.type
    state.id = status.id
    state.schoolIndex = status.school
  },
  changeLoading(state,status){  // Loading 动画
    state.isShowLoading = status.state
  },
  //提交事件的状态
  handleClickStatus(state,status){
    state.addState = status.state
  },
  //设置state值
  saveValue(state,status){
    state.dialogTitle = status.title
    state.isShowDialog = status.status
    state.formType = status.type
    state.form[status.name].validForm = status.value
    state.action = status.action
    state.id = status.id
    state.form[status.name].info[1].list = status.list
    console.log(state.form[status.name])
  },

  //dialog框提交成功之后，页面刷新
  changeRefresh(state,status){
    state.submitState = status.state
    // console.log(state,status,'state is change')
  },

  //修改消息页的接受对象值
  changeMessageTree(state,status){
    let student = [] , teacher = [] ,create = [] , join = [] // 新建学生树,老师树,我创建的,我加入的
    status.data.map(item=>{
      let obj = {}
      obj.label = item.age_name
      obj.children = []
      item.student_info_line.map(list=>{
          let obj1 = {}
          obj1.label = list.line_name
          obj1.children = []
          obj.children.push(obj1)
          list.student_info_class.map(clist=>{
            let obj2 = {}
            obj2.label = clist.class_name
            obj2.children = []
            obj1.children.push(obj2)
            clist.student_info.map(slist=>{
              let stu = {}
              stu.label = slist.name
              // stu.number = slist.number
              stu.number = slist.id
              obj2.children.push(stu)
            })
          })
      })
      student.push(obj)
    })
    status.teacher.map(item=>{
      let obj = {}
      obj.label = item.job_name
      obj.children = []
      item.teachar.map(list=>{
        let obj1 = {}
        obj1.label = list.teacher_name
        // obj1.number = list.teacher_number
        obj1.number = list.id
        obj.children.push(obj1)
      })
      teacher.push(obj)
    })
    status.addList.map(item=>{
      let obj = {}
      obj.label = item.grouping_name
      obj.number = item.id
      obj.children = []
      item.grouping_peopleList.map(list=>{
        let obj1 = {}
        obj1.label = list
        obj.children.push(obj1)
      })
      join.push(obj)
    })
    status.foundList.map(item=>{
      let obj = {}
      obj.label = item.grouping_name 
      obj.number = item.id
      obj.children = []
      item.grouping_peopleList.map(list=>{
        let obj1 = {}
        obj1.label = list
        obj.children.push(obj1)
      })
      create.push(obj)
    })
    state.form.addGroup.info.map(item=>{
      if(item.isTree){  // 找到所有的tree
        if(item.tree[0].label == '学生'){  // 找到label为学生的tree
          item.tree[0].children = student
        }else if(item.tree[0].label == '老师'){  //找到lebel为老师的tree
          item.tree[0].children = teacher
        }
      }
    })
    state.form.chooseReciver.list.map(item=>{
      if(item.subList[0].name == '学生'){  //消息 -- 发布 -- 找到学生的树  
        item.subList[0].tree = student
      }
      if(item.subList[0].name == '老师'){ // 消息 -- 发布 -- 找到老师的树
        item.subList[0].tree = teacher
      }
      if(item.type == '我创建的'){  // 消息 -- 发布 -- 找到我创建的树
        item.subList[0].tree = create
      }
      if(item.type == '我加入的'){  // 消息 -- 发布 -- 找到我加入的树
        item.subList[0].tree = join
      }
    })
    return
  },
  //发布 -- 保存对话框的值,关闭对话框
  saveDialogValueAndHide(state,status){
    state.isShowDialog = status.state
    state.chooseArr = status.data
    state.keys = status.keys
    state.total = status.total
  },

  //消息 -- 发布 -- 添加表单的值
  saveFormItemValue(state,status){
    state.addFormItem = status
    state.isShowDialog = false
  },

  //批量操作 -- 修改isShowChooseBtn 
  handleClickChangeChooseBtn(state,status){
    if(!status){
      this.state.isShowChooseBtn = false
    }else{
      this.state.isShowChooseBtn = !this.state.isShowChooseBtn
    }
  },

  //编辑/添加系统设置 -- 专业 -- 增加学年下拉选项 
  addMajorYearList(state,status){
    state.form.addSettingMajor.info[1].list = status.year
  },
  //编辑/添加班级设置 -- 班级 -- 增加专业下拉选项
  addKlassList(state,status){
    state.form.addSettingKlass.info[1].list = status.list
    console.log(status)
  }
}

export default mutations