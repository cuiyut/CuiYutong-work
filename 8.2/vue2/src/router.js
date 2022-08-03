import Vue from 'vue'
import Router from 'vue-router'

import deng from './views/deng.vue'
import home from './views/home.vue'

import shou from './components/shou.vue'
import vip from './components/vip.vue'
import gong from './components/gong.vue'
import goods from './components/goods.vue'
import yuan from './components/yuan.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: deng
        },
        {
            path: '/home',
            component: home,
            children:[
                {
                    path: '/shou',
                    component: shou
                },
                {
                    path: '/vip',
                    component: vip
                },
                {
                    path: '/gong',
                    component: gong
                },
                {
                    path: '/goods',
                    component: goods
                },
                {
                    path: '/yuan',
                    component: yuan
                }
            ]
        }
    ]
})