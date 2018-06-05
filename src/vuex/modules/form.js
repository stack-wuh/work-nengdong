const state = {
  //改变密码
  changePwd: {
    info: [{
        name: '修改密码',
        value: '',
        type: 'password',
        prop: 'password',
        isInput:true,
        rules: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        },{
          min:6,
          message:'密码长度不能小于6位',
          trigger:'blur'
        } ]
      },
      {
        name: '确认密码',
        value: '',
        type: 'password',
        prop: 'checkword',
        isInput:true,
        rules: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }, 
      {
        min:6,
        message:'密码长度不能小于6位',
        trigger:'blur'
      }]
      }
    ],
    validForm:{
      password:'',
      checkword:''
    }
  },
  //设置 -- 添加年份
  addNewYear:{
    info:[
      {
        name:'入学年份',
        value:'',
        prop:'age_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请输入入学年份',
            trigger:'blur'
          }
        ]
      },
      {
        name:'是否开放档案',
        value:1,
        prop:'age_or',
        isSwitch:true,
      }
    ],
    validForm:{
      age_name:'',
      age_or:1,
    }
  },
  //活动 -- 添加反馈
  addFeedback:{
    info:[
      {
        name:'填写反馈',
        value:'',
        prop:'feedback',
        isInput:true,
        inputType:'textArea',
        row:2,
        rules:[
          {
            required:true,
            message:'请填写反馈',
            trigger:'blur'
          }
        ]
      }
    ],
    validForm:{
      feedback:''
    }
  },

  //校友会反馈
  pagesFeed:{
    info:[
      {
        name:'填写反馈',
        value:'',
        prop:'feedback',
        isInput:true,
        inputType:'textArea',
        row:2,
        rules:[
          {
            required:true,
            message:'请填写反馈',
            trigger:'blur'   
          }
        ]
      }
    ],
    validForm:{
      feedback:''
    }
  },
  //设置 -- 添加互助类型
  addHelp:{
    info:[
      {
        name:'',
        prop:'name',
        value:''
      }
    ]
  },

  //校友捐赠 -- 添加新的校友捐赠
  addDonate:{
    info:[
      {
        name:'添加标题',
        isInput:true,
        prop:'title',
        rules:[
          {
            required:true,
            message:'请添加标题',
            trigger:'blur'
          }
        ]
      },
      {
        name:'添加公告',
        prop:'proclaim',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请添加公告',
            trigger:'blur'
          }
        ]
      },
      {
        name:'选择图片',
        isUpload:true
      }
    ],
    validForm:{
      title:'',
      image:'',
      proclaim:''
    }
  },

  //编辑学院详情
  editCollege:{
    info:[
      {
        name:'学院名称',
        prop:'school_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请输入学院名称',
            trigger:'blur'
          }
        ]
      },
      {
        name:'电话',
        prop:'phone',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请输入学院电话',
            trigger:'blur'
          }
        ]
      }
    ],
    validForm:{
      school_name:'',
      phone:'',
      id:''
    }
  },
  //编辑学校详情:
  editSchool:{
    info:[
      {
        name:'学校名称',
        isInput:true,
        prop:'name',
        rules:[
          {
            required:true,
            message:'请输入学校名称',
            trigger:'blur'
          }
        ]
      },
      {
        name:'学校电话',
        isInput:true,
        prop:'phone',
        rules:[
          {
            required:true,
            message:'请输入学校电话',
            trigger:'blur'
          }
        ]
      }
    ],
    validForm:{
      name:'',
      phone:'',
      id:''
    }
  },
  //杰出校友--备注
  addRemark:{
    info:[
      {
        name:'备注信息',
        prop:'student_remarks',
        isInput:false,
        rules:[
          {
            required:true,
            message:'请输入备注后提交',
            trigger:'blur'
          }
        ]
      }
    ],
    validForm:{
      student_remarks:''
    }
  },
  //互联互助--反馈
  addConcatFeed:{
    info:[
      {
        name:'反馈信息',
        prop:'feedback',
        isInput:false,
        inputType:'textarea',
        row:2,
        rules:[
          {
            required:true,
            message:'请填写反馈信息',
            trigger:'blur'
          }
        ]
      }
    ],
    validForm:{
      feedback:''
    }
  },

  //设置--互联互助设置--添加互联互助
  addHelpType:{
    info:[
      {
        name:'类型名称',
        prop:'name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写类型名称',
            trigger:'blur'
          }
        ]
      },
      {
        name:'颜色',
        prop:'color',
        isInput:false,
        isColorPicker:true,
        rules:[
          {
            required:true,
            message:'请选择色彩',
            trigger:'change'
          }
        ]
      }
    ],
    validForm:{
      name:'',
      color:''
    }
  }
}

const mutations = {

}

const actions = {

}
const getters = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
