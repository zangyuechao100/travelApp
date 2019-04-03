import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/home/home.vue')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('./views/city/city.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('./views/detail/detail.vue')
    }
  ],
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})
