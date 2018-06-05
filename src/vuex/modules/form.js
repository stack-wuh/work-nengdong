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
