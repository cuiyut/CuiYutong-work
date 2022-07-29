import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import my from '../components/my.vue'
import shop from '../components/shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    component:my
  },
  {
    path: '/shop',
    component:shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
