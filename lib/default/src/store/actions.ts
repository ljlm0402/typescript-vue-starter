import { Commit, Dispatch } from 'vuex'
import * as actions from './mutations-types'
import { LoginForm } from './interface'

export const login = (context: { commit: Commit; dispatch: Dispatch }, loginForm: LoginForm): void => {
  const token = {
    type: 'Bearer',
    value: 'qwertyuiop123456789'
  }

  sessionStorage.setItem('access_token', JSON.stringify(token))
  context.commit(actions.LOGIN_SUCCESS, loginForm.id)
}

export const logout = (context: { commit: Commit }): void => {
  context.commit(actions.LOGOUT)
}

export default {
  login,
  logout
}
