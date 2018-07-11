import qs from 'qs'
import Axios from 'axios';

const apiPost = (url,data)=>{
  // store.commit('changeLoading',{state:true})
  url = rootPath + url
  var reg = /\/?SchoolFellow/
  url = url.replace(reg,'')
  // console.log(url)
  data = qs.stringify(data)
  return new Promise((resolve,reject)=>{
    Axios.post(url,data).then(res=>{
      // store.commit('changeLoading',{state:false})
      resolve(res.data)
    }).catch(res=>{
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