import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../views/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/TodoForm',
      name: 'Todoform',

      component: () => import('../views/TodoForm.vue')
    }
  ]
})
