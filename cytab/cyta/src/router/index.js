import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/xue',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '/jiang',
        component: () => import('../components/cyt_jiang.vue')
      },
      {
        path: '/xue',
        component: () => import('../components/cyt_xue.vue')
      },
      {
        path: '/zhu',
        component: () => import('../components/cyt_zhu.vue')
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
