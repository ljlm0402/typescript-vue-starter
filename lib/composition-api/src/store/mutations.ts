import { ADDCOUNT, SUBCOUNT } from './mutations-types'
import { Count } from './interface'

export default {
  [ADDCOUNT] (state: Count, payload: number): void {
    state.count += payload
  },
  [SUBCOUNT] (state: Count, payload: number): void {
    state.count -= payload
  }
}
