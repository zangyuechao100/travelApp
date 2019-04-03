import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import City from './views/city/city.vue'
import Detail from './views/detail/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})
