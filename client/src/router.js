import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn'
import Garden from './views/Garden.vue'
import Gardens from './views/Gardens.vue'
import Plants from './views/Plants.vue'
import User from './views/User.vue'
import Costumers from './views/Costumers.vue'
import Farmer from './views/Farmer.vue'

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
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn
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
      path: '/users',
      name: 'users',
      component: User
    },
    {
      path: '/farmers',
      name: 'farmers',
      component: Farmer
    },
    {
      path: '/costumers',
      name: 'costumers',
      component: Costumers
    },
    {
      path: '/plants',
      name: 'plants',
      component: Plants
    }
  ]
})
