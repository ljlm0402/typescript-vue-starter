import { Commit } from 'vuex'

const ADDCOUNT = 'ADDCOUNT'
const SUBCOUNT = 'SUBCOUNT'

interface Count {
    count: number
}

const state: Count = {
  count: 0
}

const getters = {
  getCount (state: Count): number {
    return state.count
  }
}

const actions = {
  addCount (context: { commit: Commit }, count: Count): void {
    context.commit(ADDCOUNT, count)
  },
  subCount (context: { commit: Commit }, count: Count): void {
    context.commit(SUBCOUNT, count)
  }
}

const mutations = {
  [ADDCOUNT] (state: Count, payload: number): void {
    state.count += payload
  },
  [SUBCOUNT] (state: Count, payload: number): void {
    state.count -= payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
