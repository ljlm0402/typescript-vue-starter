import { Count } from './interface'

export default {
  getCount (state: Count): number {
    return state.count
  }
}
