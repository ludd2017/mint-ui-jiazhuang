import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Scene from '@/pages/Scene'
import Category from '@/pages/Category'
import Showroom from '@/pages/Showroom'
import Mine from '@/pages/Mine'
import SceneDetail from '@/pages/SceneDetail'
import allOrders from '@/pages/allOrders'
import login from '@/pages/login'
//import test from '@/pages/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/scene',
      name: 'scene',
      component: Scene
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/showroom',
      name: 'showroom',
      component: Showroom
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/scene-detail/:id',
      name: 'scene-detail',
      component: SceneDetail
    },
    {
      path: '/allOrders/:id',
      name: 'allOrders',
      component: allOrders
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
//  {
//    path: '/test',
//    name: 'test',
//    component: test
//  },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // console.log('scrollBehavior : ')
    // console.log(to)
    // console.log(from)
    // console.log(savedPosition)
    return {x: 0, y: 0}
  },
})
