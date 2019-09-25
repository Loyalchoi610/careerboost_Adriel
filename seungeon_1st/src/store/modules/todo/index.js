export const Todo = {
  namespaced: true,
  state: {
    Todo: [],
    Doing: [],
    Done: []
  },
  mutations: {
    addTodoItem (state, todoItem) {
      state[todoItem.type].push(todoItem)
    },
    removeTodoItem (state, { type, index }) {
      state[type].splice(index, 1)
    }
  },
  actions: {
    loadTodos ({ commit, rootState }) {
      return new Promise(resolve => {
        rootState.db.collection('Todo')
          .orderBy('regDate', 'desc')
          .get()
          .then(docs => {
            docs.forEach(doc => {
              commit('addTodoItem', { ...doc.data(), id: doc.id })
            })
            resolve()
          })
      })
    },
    loadDoings ({ commit, rootState }) {
      return new Promise(resolve => {
        rootState.db.collection('Doing')
          .orderBy('regDate', 'desc')
          .get()
          .then(docs => {
            docs.forEach(doc => {
              commit('addTodoItem', { ...doc.data(), id: doc.id })
            })
            resolve()
          })
      })
    },
    loadDones ({ commit, rootState }) {
      return new Promise(resolve => {
        rootState.db.collection('Done')
          .orderBy('regDate', 'desc')
          .get()
          .then(docs => {
            docs.forEach(doc => {
              commit('addTodoItem', { ...doc.data(), id: doc.id })
            })
            resolve()
          })
      })
    }
  }
}
