import mutations from './mutations'
import actions from './actions'
import state from './state'

export const Todo = {
  namespaced: true,
  state,
  actions,
  mutations
}
