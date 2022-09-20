import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/students',
    component: () => import('../views/home.vue'),
    children:[
      {
        path:'/students',
        component: () => import('../views/Students.vue')
      },
      {
        path:'/teacher',
        component: () => import('../views/Teacher.vue')
      },
      {
        path:'/assistent',
        component: () => import('../views/Assistent.vue')
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
