import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import find from '@/views/find'
import order from '@/views/order'
import user from '@/views/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
