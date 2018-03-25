// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import store from './store'
import { loadProgressBar } from 'axios-progress-bar'

Vue.use(loadProgressBar)

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
if (process.env.NODE_ENV === 'production') {
  Vue.prototype.API_ENDPOINT = ''
  Vue.prototype.WEB_ROOT = 'http://202.79.34.189:7711'
}

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.API_ENDPOINT = 'http://localhost:8888'
  Vue.prototype.WEB_ROOT = 'http://localhost:9999'
}

router.beforeEach((to, from, next) => {
  axios.get(Vue.prototype.API_ENDPOINT + '/api/v1/auth/checkLogin', {headers: { 'Content-Type': 'application/json' }}).then(response => {
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
