import { Commit, Dispatch } from 'vuex'

/**
 * mutations types
 */
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT = 'LOGOUT'

/**
 * interface
 */
interface UserInfo {
  id: string;
  name: string;
  auth: string;
  grade?: number;
}

interface UserState {
  isLogin: boolean;
  userInfo: UserInfo | null;
}

interface LoginForm {
  id: string;
  password: string;
}

/**
 * state
 */
const state: UserState = {
  isLogin: false,
  userInfo: null
}

/**
 * getters
 */
const getters = {
  getUser (state: { userInfo: UserInfo }): UserInfo | null {
    return state.userInfo
  }
}

/**
 * actions
 */
const actions = {
  login (context: { commit: Commit; dispatch: Dispatch }, loginForm: LoginForm): void {
    const token = {
      type: 'Bearer',
      value: 'qwertyuiop123456789'
    }

    sessionStorage.setItem('access_token', JSON.stringify(token))
    context.commit(LOGIN_SUCCESS, loginForm)
  },
  logout (context: { commit: Commit }): void {
    context.commit(LOGOUT)
  }
}

/**
 * mutations
 */
const mutations = {
  [LOGIN_SUCCESS] (state: { isLogin: boolean; userInfo: UserInfo }, payload: UserInfo): void {
    state.isLogin = true
    state.userInfo = payload
  },
  [LOGIN_FAIL] (state: { isLogin: boolean; userInfo: null }): void {
    state.isLogin = false
    state.userInfo = null
  },
  [LOGOUT] (state: { isLogin: boolean; userInfo: null }): void {
    state.isLogin = false
    state.userInfo = null
    sessionStorage.removeItem('access_token')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
