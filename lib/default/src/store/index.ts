import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: 'userInfo',
      paths: ['isLogin', 'errorCode', 'userInfo']
    })
  ]
})
