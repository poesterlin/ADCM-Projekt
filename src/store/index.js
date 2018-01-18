import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
