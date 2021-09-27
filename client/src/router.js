import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Garden from './views/Garden.vue'
import Gardens from './views/Gardens.vue'
import ShoppingList from './views/ShoppingList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gardens/:id',
      name: 'garden',
      component: Garden
    },
    {
      path: '/gardens/',
      name: '/gardens',
      component: Gardens
    },
    {
      path: '/shoppinglist',
      name: 'shoppinglist',
      component: ShoppingList
    }
  ]
})
