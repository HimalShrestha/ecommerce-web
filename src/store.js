import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    userId: '',
    cartItems: [],
    cartBadge: 0,
    currency: 'Rs.'
  },
  mutations: {
    increment (cartItems) {
      // state.count++
    }
  }
})

export default store
