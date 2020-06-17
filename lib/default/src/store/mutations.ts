import * as actions from './mutations-types'
import { UserInfo } from './interface'

export default {
  [actions.LOGIN_SUCCESS] (state: { isLogin: boolean; errorCode: number; userInfo: UserInfo | null }, payload: UserInfo): void {
    console.log('LOGIN_SUCCESS')

    state.isLogin = true
    state.errorCode = 0
    state.userInfo = payload
  },
  [actions.LOGIN_FAIL] (state: { isLogin: boolean; errorCode: number; userInfo: UserInfo | null }, payload: number): void {
    console.log('LOGIN_FAIL')

    state.isLogin = false
    state.errorCode = payload
    state.userInfo = null
  },
  [actions.LOGOUT] (state: { isLogin: boolean; errorCode: number; userInfo: UserInfo | null }): void {
    console.log('LOGOUT')

    state.isLogin = false
    state.errorCode = 0
    state.userInfo = null
    sessionStorage.removeItem('access_token')
  }
}
