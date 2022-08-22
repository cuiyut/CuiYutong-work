import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios

import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ele)

require('../mock/index')



Vue.config.productionTip = false

// axios.defaults.baseURL = "https://api.imooc-admin.lgdsunday.club/api"

// 导航守卫
// router.beforeEach((to,from,next) => {
//   next()
//   const token = sessionStorage.getItem('token')
//   if(!token) return next('/')
// })

// 拦截器
// axios.interceptors.request.use(function (config) {
//   config.headers.Authorization = sessionStorage.getItem('token')
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
