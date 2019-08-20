import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/Index'
import home from '@/views/nav/Home'
import find from '@/views/nav/Find'
import order from '@/views/nav/Order'
import user from '@/views/nav/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: index,
      children: [
        {
          path: '/home',
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
    }    
  ]
})
