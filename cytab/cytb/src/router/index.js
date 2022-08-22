import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import home from '../views/cyt_home.vue'
import guo from '../components/cyt_guo.vue'
import hou from '../components/cyt_hou.vue'
import tu from '../components/cyt_tu.vue'
import table from '../components/cyt_table.vue'
import tab from '../components/cyt_tab.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home,
    children:[
      {
        path: '/guo',
        component: guo
      },
      {
        path: '/hou',
        component: hou
      },
      {
        path: '/tu',
        component: tu
      },
      {
        path: '/table',
        component: table
      },
      {
        path: '/tab',
        component: tab
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
