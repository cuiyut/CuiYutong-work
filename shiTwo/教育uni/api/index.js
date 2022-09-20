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

// 热门推荐
const getHot = () => {
  let data = axios.get('course/api/course/search')
  return data
}

// 近期上新
const getNew = () => {
  let data = axios.get('course/api/course/search')
  return data
}

// 免费精选
const getFree = () => {
  let data = axios.get('course/api/course/search')
  return data
}

// 付费精品
const getnoFree = () => {
  let data = axios.get('course/api/course/search')
  return data
}


export {
  getSwiper,
  getFen,
  getHot,
  getNew,
  getFree,
  getnoFree
}