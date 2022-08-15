import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
Vue.prototype.$axios = axios

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUI)


Vue.config.productionTip = false


// axios.defaults.baseURL = "http://localhost:3000"


// 导航守卫
// router.beforeEach((to,from,next) => {
//   next()
//   const token = sessionStorage.getItem('token')
//   if(!token) return next('/')
// })


// 拦截器
// axios.interceptors.request.use(function (config) {
//   config.headers.Authorization = sessionStorage.getItem('token')
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
