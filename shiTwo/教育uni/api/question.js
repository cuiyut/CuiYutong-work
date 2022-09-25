import axios from '../until/http.js'

// 热门问答
const getHot = (obj) => {
  let data = axios.post('question/api/question/hot',obj)
  return data
}

// 最新问题
const getNew = (obj) => {
  let data = axios.post('question/api/question/new',obj)
  return data
}

// 等待问题
const getWiat = (obj) => {
  let data = axios.post('question/api/question/wait',obj)
  return data
}

export {
  getHot,
  getNew,
  getWiat
}