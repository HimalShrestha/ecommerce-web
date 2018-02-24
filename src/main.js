// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$loggedIn = false

const store = new Vuex.Store({
  state: {
    cartItems: [],
    cartBadge: 0
  },
  mutations: {
    increment (cartItems) {
      // state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
