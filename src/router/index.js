import Vue from 'vue'
import Router from 'vue-router'
import Master from '@/components/Master'
import Home from '@/components/home/Home'
import Login from '@/components/login/Index'
import Register from '@/components/register/Index'
import Cart from '@/components/cart/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Master,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          name: 'Home',
          path: '',
          component: Home
        },
        {
          name: 'Login',
          path: '/login',
          component: Login
        },
        {
          name: 'Register',
          path: '/register',
          component: Register
        },
        {
          name: 'Cart',
          path: '/cart',
          component: Cart
        }
      ]
    }
  ]
})
