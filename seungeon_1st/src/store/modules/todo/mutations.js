export default {
  addTodoItem (state, todoItem) {
    state[todoItem.type].push(todoItem)
  },
  removeTodoItem (state, { type, index }) {
    state[type].splice(index, 1)
  }
}
