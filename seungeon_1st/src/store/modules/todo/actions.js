import { Observable } from 'rxjs'
const orderByPriority = (a, b) => a.sequence - b.sequence
export default {
  loadTodos ({ commit, rootState }) {
    new Observable(observer => {
      rootState.Db.collection('Todo')
        .orderBy('regDate', 'desc')
        .onSnapshot(observer)
    }).subscribe(querySnapshot => {
      commit('setTodoItem', querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort(orderByPriority))
    })
  },
  loadDoings ({ commit, rootState }) {
    new Observable(observer => {
      rootState.Db.collection('Doing')
        .orderBy('regDate', 'desc')
        .onSnapshot(observer)
    }).subscribe(querySnapshot => {
      commit('setDoingItem', querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort(orderByPriority))
    })
  },
  loadDones ({ commit, rootState }) {
    new Observable(observer => {
      rootState.Db.collection('Done')
        .orderBy('regDate', 'desc')
        .onSnapshot(observer)
    }).subscribe(querySnapshot => {
      commit('setDoneItem', querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort(orderByPriority))
    })
  },
  addTodoItem ({ commit, rootState }, todoItem) {
    return new Promise(resolve => {
      rootState.Db.collection('Todo')
        .add(todoItem)
        .then(() => {
          resolve()
        })
    })
  },
  updateTodo ({ commit, rootState }, { todoItem, index }) {
    let oldCollectionName = todoItem.type
    let newCollectionName = todoItem.type === 'Todo' ? 'Doing' : 'Done'
    let newtodoItem = { ...todoItem }
    return new Promise((resolve, reject) => {
      rootState.Db.runTransaction(transaction => {
        newtodoItem.type = newCollectionName
        newtodoItem.id = rootState.Db.collection(newCollectionName).doc().id
        transaction.delete(rootState.Db.collection(oldCollectionName).doc(todoItem.id))
        transaction.set(rootState.Db.collection(newCollectionName).doc(newtodoItem.id), newtodoItem)
        return Promise.resolve('success')
      }).then(() => {
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}
