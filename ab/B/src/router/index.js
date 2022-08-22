import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path:'/book',
        component: () => import('../views/Book.vue')
      },
      {
        path:'/hou',
        component: () => import('../views/Backstage.vue')
      },
      {
        path:'/guo',
        component: () => import('../views/International.vue')
      },
      {
        path:'/table',
        component: () => import('../views/Table.vue')
      },
      {
        path:'/tab',
        component: () => import('../views/Tab.vue')
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
