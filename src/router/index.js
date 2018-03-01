import Vue from 'vue'
import Router from 'vue-router'
import Master from '@/components/Master'
import Home from '@/components/home/Home'
import Login from '@/components/login/Index'
import Register from '@/components/register/Index'
import Cart from '@/components/cart/Cart'
import Checkout from '@/components/cart/Checkout'
import Account from '@/components/account/Account'
import Product from '@/components/home/Product'
import Contact from '@/components/info/Contact'
import Faq from '@/components/info/Faq'
import Howto from '@/components/info/Howto'
import Error404 from '@/components/info/Error404'
import Category from '@/components/home/Category'

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
        },
        {
          name: 'Checkout',
          path: '/checkout',
          component: Checkout
        },
        {
          name: 'Account',
          path: '/account',
          component: Account
        },
        {
          name: 'Product',
          path: '/product/:prodId',
          component: Product,
          props: true
        },
        {
          name: 'Contact',
          path: '/contact',
          component: Contact
        },
        {
          name: 'Faq',
          path: '/faq',
          component: Faq
        },
        {
          name: 'Howto',
          path: '/howto',
          component: Howto
        },
        {
          name: 'Category',
          path: '/category/:categoryId',
          component: Category,
          props: true
        }
      ]
    },
    // Always leave this last one
    { path: '*', component: Error404 } // Not found
  ]
})
