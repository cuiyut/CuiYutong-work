import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/create',
        component: () => import('../views/wenzhang/Create.vue')
      },
      {
        path: '/ranking',
        component: () => import('../views/wenzhang/Ranking.vue')
      },
      {
        path: '/manage',
        component: () => import('../views/yonghu/Manage.vue')
      },
      {
        path: '/permission',
        component: () => import('../views/yonghu/Permission.vue')
      },
      {
        path: '/role',
        component: () => import('../views/yonghu/Role.vue')
      },
      {
        path: '/chart',
        component: () => import('../views/Chart.vue')
      },
      {
        path: '/profile',
        component: () => import('../views/Profile.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
