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
  },
  updateTodo ({ commit, rootState }, { todoItem, index }) {
    let oldCollectionName = todoItem.type
    let newCollectionName = todoItem.type === 'Todo' ? 'Doing' : 'Done'
    let newtodoItem = { ...todoItem }

    return new Promise((resolve, reject) => {
      rootState.db.runTransaction(transaction => {
        newtodoItem.type = newCollectionName
        newtodoItem.id = rootState.db.collection(newCollectionName).doc().id
        transaction.delete(rootState.db.collection(oldCollectionName).doc(todoItem.id))
        transaction.set(rootState.db.collection(newCollectionName).doc(newtodoItem.id), newtodoItem)
        return Promise.resolve('success')
      }).then(() => {
        commit('removeTodoItem', { type: oldCollectionName, index })
        commit('addTodoItem', newtodoItem)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}
