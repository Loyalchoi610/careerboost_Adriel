export default {
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
  },
  addTodoItem ({ commit, rootState }, todoItem) {
    return new Promise(resolve => {
      rootState.db.collection('Todo')
        .add(todoItem)
        .then(doc => {
          commit('addTodoItem', { ...todoItem, id: doc.id })
          resolve()
        })
    })
  }
}
