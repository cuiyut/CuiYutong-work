import axios from '../until/http.js'

// 头部分类
const getTop = () => {
  let data = axios.get('article/api/category/label/list')
  return data
}

// 切换分类接口
const getQie = (obj) => {
  let data = axios.post('article/api/article/search',obj)
  return data
}



export {
  getTop,
  getQie
}