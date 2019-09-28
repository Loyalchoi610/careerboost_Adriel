<template>
  <div>
    <header>
      <div class="todo">{{title}}</div>
      <router-link  to="/TodoForm" class="register">{{new_todo_btn}}</router-link>
    </header>
    <section id="container">
      <section class= "row">
        <section class="col-4">
          <div id="todo">
            <div class="card_title">TODO</div>

            <div class="card_content" v-for="(item, index) in Todo.Todo" v-bind:key="item.id">
              <div class="title">
                <h1>{{item.title}}</h1>
              </div>
              <div class="content">
                {{name_regDate}}: {{getYearMonthDay(item.regDate)}}, {{item.name}}, {{name_priority}} {{item.sequence}}
                <button class="btn_todo" v-on:click="moveTodoItem('Todo',index)">→</button>
              </div>
            </div>
          </div>
        </section>
        <section class="col-4">
          <div id="doing">
            <div class="card_title">DOING</div>
            <div class="card_content" v-for="(item, index) in Todo.Doing" v-bind:key="item.id">
              <div class="title">
                <h1>{{item.title}}</h1>
              </div>
              <div class="content">
                {{name_regDate}}: {{getYearMonthDay(item.regDate)}}, {{item.name}}, {{name_priority}} {{item.sequence}}
                <button class="btn_todo" v-on:click="moveTodoItem('Doing',index)">→</button>
              </div>
            </div>
          </div>
        </section>
        <section class="col-4">
          <div id="done">
            <div class="card_title">DONE</div>
            <div v-bind:key="item.id" class="card_content" v-for="item in Todo.Done">
              <div class="title">
                <h1>{{item.title}}</h1>
              </div>
              <div class="content">
                {{name_regDate}}: {{getYearMonthDay(item.regDate)}}, {{item.name}}, {{name_priority}} {{item.sequence}}
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TodoList',
  methods: {
    ...mapActions({ update: 'Todo/updateTodo' }),
    getYearMonthDay (timestamp) {
      let date = timestamp.toDate()
      let mm = date.getMonth() + 1
      let dd = date.getDate()
      return [date.getFullYear() + '.',
        (mm > 9 ? '' : '0') + mm + '.',
        (dd > 9 ? '' : '0') + dd
      ].join('')
    },
    moveTodoItem (type, index) {
      this.update({ todoItem: this.Todo[type][index], index }).then()
    }
  },
  computed: {
    ...mapState(['Todo'])
  },
  data () {
    return {
      title: unescape('%uB098%uC758%20%uD574%uC57C%uD560%20%uC77C%uB4E4'),
      new_todo_btn: unescape('%uC0C8%uB85C%uC6B4%20TODO%20%uB4F1%uB85D'),
      name_regDate: unescape('%uB4F1%uB85D%uB0A0%uC9DC'),
      name_priority: unescape('%uC6B0%uC120%uC21C%uC704')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/list.scss";
</style>
