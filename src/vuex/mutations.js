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
  },
  changeLoading(state,status){
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
  },

  //dialog框提交成功之后，页面刷新
  changeRefresh(state,status){
    state.submitState = status.state
    console.log(state,status,'state is change')
  }
}

export default mutations