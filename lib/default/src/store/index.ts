import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

// NameSpace Patterns
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// Modules Patterns
import users from './users'

Vue.use(Vuex)

const debug: any = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    users
  },
  strict: debug,
  plugins: [
    debug && createLogger(),
    createPersistedState({
      storage: window.sessionStorage,
      key: 'userInfo',
      paths: ['isLogin', 'errorCode', 'userInfo']
    })
  ]
})
