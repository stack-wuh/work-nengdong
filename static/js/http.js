import qs from 'qs'
import Axios from 'axios';

const apiPost = (url,data)=>{
  // _g.openGlobalLoading()
  store.commit('changeLoading',{state:true})
  url = rootPath + url
  data = qs.stringify(data)
  return new Promise((resolve,reject)=>{
    Axios.post(url,data).then(res=>{
      // _g.closeGlobalLoading()
      store.commit('changeLoading',{state:false})
      resolve(res.data)
    }).catch(res=>{
      // _g.closeGlobalLoading()
      store.commit('changeLoading',{state:false})
      resolve(res)
      $bus.$message({
        message:'请求超时,请检查网络',
        type:'wraning'
      })
    })
  })
}

export default apiPost