// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$loggedIn = false

// router.beforeEach(function (to, from, next) {
//   setTimeout(() => {
//     window.scrollTo(0, 0)
//   }, 100)
//   next()
// })

router.beforeEach((to, from, next) => {
  axios.get('/api/v1/auth/checkLogin', {headers: { 'Content-Type': 'application/json' }}).then(response => {
    if (response.data === null) {
      store.state.isLoggedIn = false
      next()
    } else {
      store.state.isLoggedIn = true
      next()
    }
  }).catch(err => {
    console.log('this is an error ', err)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
