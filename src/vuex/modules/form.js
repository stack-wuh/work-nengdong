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
    },
  },

  //活动 -- 添加反馈
  addFeedback:{
    info:[
      {
        name:'填写反馈',
        value:'',
        prop:'feedback',
        isInput:false,
        isTextarea:true,
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
        isInput:false,
        isTextarea:true,
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
  //添加学院
  addPagesSchool:{
    info:[
      {
        name:'单位名称',
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
        name:'单位电话',
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
  //编辑学院详情
  editCollege:{
    info:[
      {
        name:'单位名称',
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
        name:'单位电话',
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

  //添加学校
  addPagesCollege:{
    info:[
      {
        name:'单位名称',
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
        name:'单位电话',
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
        isTextarea:true,
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
        isTextarea:true,
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
  },

  //设置--活动类型设置--添加活动类型
  addActionType:{
    info:[
      {
        name:'类型名称',
        prop:'type_name',
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
        name:'展示',
        isInput:false,
        isSwitch:false,
        isCheck:true,
        checkList:[
          {
            name:'教师端',
            prop:'faculty'
          },
          {
            name:'学生端',
            prop:'schoolfellow'
          },
          {
            name:'校友端',
            prop:'pupil'
          }
        ]
      },
      {
        name:'自定义色彩',
        prop:'color',
        isColorPicker:true,
        rules:[
          {
            required:true,
            message:'请选择色彩',
            trigger:'change'
          }
        ]
      },
      
    ],
    validForm:{
      type_name:'',
      faculty:'',
      schoolfellow:'',
      pupil:'',
      id:'',
      color:''
    }
  },
  //设置 -- 活动类型--编辑活动类型
  editActionType:{
    info:[
      {
        name:'类型名称',
        prop:'type_name',
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
        name:'展示',
        isInput:false,
        isSwitch:false,
        isCheck:true,
        checkList:[
          {
            name:'教师端',
            prop:'faculty'
          },
          {
            name:'学生端',
            prop:'schoolfellow'
          },
          {
            name:'校友端',
            prop:'pupil'
          }
        ]
      },
      {
        name:'自定义色彩',
        prop:'color',
        isColorPicker:true,
        rules:[
          {
            required:true,
            message:'请选择色彩',
            trigger:'change'
          }
        ]
      },
      
    ],
    validForm:{
      type_name:'',
      faculty:'',
      schoolfellow:'',
      pupil:'',
      id:'',
      color:''
    }
  },
  //设置 -- 添加专业设置
  addSettingMajor:{
    info:[
      {
        name:'专业名称',
        prop:'line_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写专业名称',
            trigger:'blur'
          }
        ]
      },
      {
        name:'学年',
        prop:'student_info_age_id',
        isSelect:true,
        rules:[
          {
            required:true,
            message:'请选择学年',
            trigger:['blur','change']
          }
        ],
        list:[]
      }
    ],
    validForm:{
      line_name:'',
      student_info_age_id:'',
      id:''
    }
  },
  //设置 -- 编辑专业设置
  editSettingMajor:{
    info:[
      {
        name:'专业名称',
        prop:'line_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写专业名称',
            trigger:'blur'
          }
        ]
      },
      {
        name:'学年',
        prop:'student_info_age_id',
        isSelect:true,
        list:[],
        rules:[
          {
            required:true,
            message:'请选择学年',
            trigger:['blur','change']
          }
        ]
      }      
    ],
    validForm:{
      line_name:'',
      student_info_age_id:'',
      id:''
    }
  },
  //设置 -- 添加班级设置
  addSettingKlass:{
    info:[
      {
        name:"班级名称",
        prop:'class_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写班级名称',
            trigger:'blur'
          }
        ]
      },
      {
        name:'专业',
        prop:'student_info_line_id',
        isSelect:true,
        list:[],
        rules:[
          {
            required:true,
            message:'请选择专业',
            trigger:['blur','change']
          }
        ]
      }
    ],
    validForm:{
      class_name:'',
      student_info_line_id:''
    }
  },
  //设置--编辑班级设置
  editSettingKlass:{
    info:[
      {
        name:"班级名称",
        prop:'class_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写班级名称',
            trigger:'blur'
          }
        ]
      },
      {
        name:'专业',
        prop:'student_info_line_id',
        isSelect:true,
        list:[],
        rules:[
          {
            required:true,
            message:'请选择专业',
            trigger:['blur','change']
          }
        ]
      }      
    ],
    validForm:{
      class_name:'',
      student_info_line_id:'',
      id:''
    } 
  },
  //设置 -- 添加官方组织
  addSettingOfficial:{
    info:[
      {
        name:'组织名称',
        prop:'official_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写官方组织名',
            trigger:'blur'
          }
        ]
      }
    ],
    validForm:{
      official_name:''
    }
  },
  //设置 -- 编辑官方组织
  editSettingOfficial:{
    info:[
      {
        name:'组织名称',
        prop:'official_name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写官方组织名',
            trigger:'blur'
          }
        ]
      }
    ],
    validForm:{
      official_name:''
    }
  },

  //设置--添加联系学院
  addConcatSchool:{
    info:[
      {
        name:'问题类型',
        isSelect:true,
        prop:'question_type',
        list:[
          {
            name:'忘记密码',
            value:'忘记密码'
          },
          {
            name:'校友身份认证失败',
            value:'校友身份认证失败'
          },
          {
            name:'其他',
            value:'其他'
          }
        ],
        rules:[
          {
            required:true,
            message:'请选择问题类型',
            trigger:'change'
          }
        ]
      },
      {
        name:'姓名',
        prop:'name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写姓名',
            trigger:'blur'
          }
        ]
      },
      {
        name:'详细说明',
        prop:'illustrate',
        isTextarea:true,
        rules:[
          {
            required:true,
            message:'请填写详细说明',
            trigger:'blur'
          }
        ]
      },
      {
        name:'手机号',
        prop:'phone',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写手机号',
            trigger:'blur'
          }
        ]
      },
      {
        name:'邮箱',
        prop:'email',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写邮箱地址',
            trigger:'blur'
          }
        ]
      },
      {
        name:'入学年份',
        prop:'year',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写入学年份',
            trigger:'blur'
          }
        ]
      },
      {
        name:'学号',
        prop:'number',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写学号',
            trigger:'blur'
          }
        ]
      },
      {
        name:'身份证号',
        prop:'no',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写身份证号',
            trigger:'blur'
          }
        ]
      },
      {
        name:'专业班级',
        prop:'classes',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写专业班级',
            trigger:'blur'
          }
        ]
      },
      {
        name:'辅导员',
        prop:'counsellor',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写辅导员',
            trigger:'blur'
          }
        ]
      },
      {
        name:'图片',
        prop:'file',
        isUpload:true,
        rules:[
          {
            required:true,
            message:'请上传图片',
            trigger:'change'
          }
        ]
      },                                
    ],
    validForm:{
      question_type:'',
      illustrate:'',
      phone:'',
      email:'',
      year:'',
      number:'',
      no:'',
      classes:'',
      counsellor:'',
      name:'',
      file:''
    }
  },
  //设置--编辑联系学院
  editSettingConcat:{
    info:[
      {
        name:'问题类型',
        isSelect:true,
        prop:'question_type',
        list:[
          {
            name:'忘记密码',
            value:'忘记密码'
          },
          {
            name:'校友身份认证失败',
            value:'校友身份认证失败'
          },
          {
            name:'其他',
            value:'其他'
          }
        ],
        rules:[
          {
            required:true,
            message:'请选择问题类型',
            trigger:'change'
          }
        ]
      },
      {
        name:'姓名',
        prop:'name',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写姓名',
            trigger:'blur'
          }
        ]
      },
      {
        name:'详细说明',
        prop:'illustrate',
        isTextarea:true,
        rules:[
          {
            required:true,
            message:'请填写详细说明',
            trigger:'blur'
          }
        ]
      },
      {
        name:'手机号',
        prop:'phone',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写手机号',
            trigger:'blur'
          }
        ]
      },
      {
        name:'邮箱',
        prop:'email',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写邮箱地址',
            trigger:'blur'
          }
        ]
      },
      {
        name:'入学年份',
        prop:'year',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写入学年份',
            trigger:'blur'
          }
        ]
      },
      {
        name:'学号',
        prop:'number',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写学号',
            trigger:'blur'
          }
        ]
      },
      {
        name:'身份证号',
        prop:'no',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写身份证号',
            trigger:'blur'
          }
        ]
      },
      {
        name:'专业班级',
        prop:'classes',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写专业班级',
            trigger:'blur'
          }
        ]
      },
      {
        name:'辅导员',
        prop:'counsellor',
        isInput:true,
        rules:[
          {
            required:true,
            message:'请填写辅导员',
            trigger:'blur'
          }
        ]
      },
      {
        name:'图片',
        prop:'file',
        isUpload:true,
        rules:[
          {
            required:true,
            message:'请上传图片',
            trigger:'change'
          }
        ]
      },                                
    ],
    validForm:{
      question_type:'',
      illustrate:'',
      phone:'',
      email:'',
      year:'',
      number:'',
      no:'',
      classes:'',
      counsellor:'',
      name:'',
      file:'',
      id:''
    }
  },

  //消息 -- 添加新的群组
  addGroup:{
    info:[
      {
        name:'群组名称',
        isInput:true,
        prop:'grouping_name',
        rules:[
          {
            required:true,
            message:'请填写必填项',
            trigger:'blur'
          }
        ]
      },
      {
        name:'',
        treeName:'教职工',
        isTree:true,
        prop:'age_name',
        subList:[],
        tree:[
          {
            label:'老师',
            children:[
              {
                label:'aaa1'
              },
              {
                label:'bbb1'
              }
            ]
          }
        ]
      },
      { 
        treeName:'学生',
        isTree:true,
        prop:'age_name',
        subList:[],
        tree:[
          {
            label:'学生',
            children:[
              {
                label:'aaa2'
              },
              {
                label:'bbb2'
              }
            ]
          }
        ]
      }
    ],
    validForm:{
      grouping_name:''
    }
  },
  //消息 -- 选择发送对象
  chooseReciver:{
    type:'default',  // 与表单区别开
    list:[
      {
        type:'系统分组',
        subList:[
          {
            name:'学生',
            tree:[
              {
                id:1,
                label:'学生1',
                children:[
                  {
                    id:2,
                    label:'学生1'
                  }
                ]
              },
              {
                id:3,
                label:'学生2',
                children:[
                  {
                    id:4,
                    label:'学生2'
                  },
                  {
                    id:5,
                    label:'学生3'
                  }
                ]
              },
              {
                id:6,
                label:'学生3'
              }
            ]
          }
        ]
      },
      {
        type:'',
        subList:[
          {
            name:'老师',
            tree:[
              {
                id:1,
                label:'11',
                children:[
                  {
                    id:2,
                    label:'11-1'
                  }
                ]
              },
              {
                id:3,
                label:'22',
                children:[
                  {
                    id:4,
                    label:'2-1'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type:'我创建的',
        subList:[
          {
            tree:[
              {
                id:1,
                label:'1',
                children:[
                  {
                    id:'2',
                    label:'1-1'
                  }
                ]
              },
              {
                id:3,
                label:'2',
                children:[
                  {
                    id:4,
                    label:'2-1'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type:'我加入的',
        subList:[
          {
            tree:[
              {
                id:1,
                label:'1',
                children:[
                  {
                    id:'2',
                    label:'1-1'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  //消息 -- 添加表单项目
  addFormItem:{
    type:'addForm',
    info:[
      {
        name:'表单标题',
        prop:'form_title',
        isFather:true,
        rules:[
          {
            required:true,
            message:'请填写表单标题',
            trigger:'blur'
          }
        ]
      },
      {
        name:'字段',
        prop:'form_content',
        isChild:true,
        subList:[]
      }
    ],
    validForm:{
      form_title:'',
      form_content:[]
    }
  },

  //批量导入
  upload:{
    type:'uploadFile',
    
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
