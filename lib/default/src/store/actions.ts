import { Commit } from 'vuex'
import { ADDCOUNT, SUBCOUNT } from './mutations-types'
import { Count } from './interface'

export const addCount = (context: { commit: Commit }, count: Count): void => {
  context.commit(ADDCOUNT, count)
}

export const subCount = (context: { commit: Commit }, count: Count): void => {
  context.commit(SUBCOUNT, count)
}

export default {
  addCount,
  subCount
}
