import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/home',
    component: () => import('../components/Home.vue'),
    redirect: '/shou',
  },
  {
    path: '/home',
    component: () => import('../components/Home.vue'),
    children:[
      {
        path: '/shou',
        component: () => import('../views/Shou.vue')
      },
      {
        path: '/vip',
        component: () => import('../views/Vip.vue')
      },
      {
        path: '/gong',
        component: () => import('../views/Gong.vue')
      },
      {
        path: '/goods',
        component: () => import('../views/Goods.vue')
      },
      {
        path: '/yuan',
        component: () => import('../views/Yuan.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
