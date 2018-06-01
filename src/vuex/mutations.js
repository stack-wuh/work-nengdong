const mutations = {
  showLoading(state,status){
    state.globlaLoading = status
  },
  changeDialogStatus(state,status){
    state.dialogTitle = status.title
    state.isShowDialog = status.status
    state.formType = status.type
  },
  changeLoading(state,status){
    state.isShowLoading = status.state
  }
}

export default mutations