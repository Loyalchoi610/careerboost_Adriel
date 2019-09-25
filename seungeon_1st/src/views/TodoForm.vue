<template>
    <section id="main">
        <section id = "submitForm" v-on:submit.prevent="submitForm">
            <h1>할일 등록</h1>
            <form>
                <label for="todo">어떤일인가요?
                    <input id="todo" type="text" name="title" maxLength="24" placeholder="swift 공부하기(24자까지)" v-model="title">
                </label>
                <label for="who">누가 할일인가요?
                    <input id="who" type="text" name="name" placeholder="홍길동" v-model="name" >
                </label>
                <label class="sequence">우선순위를 선택하세요:<br>
                    <input type="radio" name="sequence" value='1' checked="checked" v-model="sequence">1순위
                    <input type="radio" name="sequence" value='2' v-model="sequence">2순위
                    <input type="radio" name="sequence" value='3' v-model="sequence">3순위
                </label>
                <section class="selection">
                    <button type="button" id="back" class="btn white left" v-on:click="goBack"> &#60; 이전</button>
                    <input class="btn sky right" id="submit" type="submit" value="제출">
                    <button type="button" id="clear" class="btn sky right" v-on:click="resetForm">내용지우기</button>
                </section>

            </form>

        </section>
    </section>
</template>

<script>
import * as firebase from 'firebase/app'

export default {
  name: 'TodoForm',
  methods: {
    goBack () {
      history.back()
    },
    resetForm () {
      this.title = ''
      this.name = ''
      this.sequence = '1'
    },
    submitForm () {
      if (this.title === '') {
        alert(unescape('%uC81C%uBAA9%uC744%20%uC785%uB825%uD574%20%uC8FC%uC138%uC694.'))
        return
      } else if (this.name === '') {
        alert(unescape('%uC774%uB984%uC744%20%uC785%uB825%uD574%20%uC8FC%uC138%uC694.'))
        return
      }
      let todoItem = {
        title: this.title,
        name: this.name,
        sequence: this.sequence,
        type: 'Todo',
        regDate: firebase.firestore.Timestamp.fromDate(new Date())
      }

      this.$store.dispatch('Todo/addTodoItem', todoItem).then(
        this.$router.push('/')
      )
    }
  },
  data () {
    return {
      name: '',
      sequence: '1',
      title: ''
    }
  }
}
</script>

<style scoped>
    @import "../assets/css/form.css";
</style>
