const state = {
  globlaLoading:false,
  isShowDialog:false,
  dialogTitle:'提示',
  isShowLoading:false,
  formType:'',
  addState:false,
  action:'add',
  id:'',
  submitState:'false',
  total:0,   // 消息--选择的操作人数
  chooseArr:[],  // 消息 -- 选择的对象
  keys:[],   // 消息 -- 选择对象的key
  addFormItem:{},  // 消息 -- 添加表单的值
  isShowChooseBtn:false // 批量操作按钮
}

export default state