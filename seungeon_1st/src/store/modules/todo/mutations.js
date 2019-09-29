export default {
  addTodoItem (state, todoItem) {
    state[todoItem.type].push(todoItem)
  },
  setTodoItem (state, todoItems) {
    state.Todo = todoItems
  },
  setDoingItem (state, todoItems) {
    state.Doing = todoItems
  },
  setDoneItem (state, todoItems) {
    state.Done = todoItems
  },
  removeTodoItem (state, { type, index }) {
    state[type].splice(index, 1)
  }
}
