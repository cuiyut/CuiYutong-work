import axios from '../until/http.js'

const getCate = () => {
  let data = axios.get('article/api/category/label/list')
  return data
}

export {
  getCate
}