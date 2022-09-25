import axios from '../until/http.js'

// 轮播图
const getSwiper = () => {
  let data = axios.get('article/api/advert/show/1')
  return data
}

// 首页分类
const getFen = () => {
  let data = axios.get('article/api/category/label/list')
  return data
}

// 热门推荐、近期上新、免费精选、付费精品
const getHot = (obj) => {
  let data = axios.post('course/api/course/search',obj)
  return data
}
const getNew = (obj) => {
  let data = axios.post('course/api/course/search',obj)
  return data
}
const getFree = (obj) => {
  let data = axios.post('course/api/course/search',obj)
  return data
}
const getNofree = (obj) => {
  let data = axios.post('course/api/course/search',obj)
  return data
}


export {
  getSwiper,
  getFen,
  getHot,
  getNew,
  getFree,
  getNofree
}