<template>
    <section id="main">
        <section id = "submitForm" v-on:submit.prevent="submitForm">
            <h1>{{form_title}}</h1>
            <form>
                <label for="todo">{{label_job}}
                    <input id="todo" type="text" name="title" maxLength="24" :placeholder="placeholder_job" v-model="title">
                </label>
                <label for="who">{{label_author}}
                    <input id="who" type="text" name="name" :placeholder="placeholder_author" v-model="name">
                </label>
                <label class="sequence">{{label_priority}}<br>
                    <input type="radio" name="sequence" value='1' checked="checked" v-model="sequence">1{{input_priority}}
                    <input type="radio" name="sequence" value='2' v-model="sequence">2{{input_priority}}
                    <input type="radio" name="sequence" value='3' v-model="sequence">3{{input_priority}}
                </label>
                <section class="selection">
                    <button type="button" id="back" class="btn white left" v-on:click="goBack"> &#60; {{btn_back}}</button>
                    <input class="btn sky right" id="submit" type="submit" v-bind:value="btn_submit">
                    <button type="button" id="clear" class="btn sky right" v-on:click="resetForm">{{btn_reset}}</button>
                </section>

            </form>

        </section>
    </section>
</template>

<script>
import * as firebase from 'firebase/app'
import { mapActions } from 'vuex'

export default {
  name: 'TodoForm',
  methods: {
    ...mapActions({ addItem: 'Todo/addTodoItem' }),
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

      this.addItem(todoItem).then(
        this.$router.push('/')
      )
    }
  },
  data () {
    return {
      form_title: unescape('%uD560%uC77C%20%uB4F1%uB85D'),
      label_job: unescape('%uC5B4%uB5A4%uC77C%uC778%uAC00%uC694%3F'),
      placeholder_job: unescape('swift%20%uACF5%uBD80%uD558%uAE30%2824%uC790%uAE4C%uC9C0%29'),
      label_author: unescape('%uB204%uAC00%20%uD560%uC77C%uC778%uAC00%uC694%3F'),
      placeholder_author: unescape('%uD64D%uAE38%uB3D9'),
      label_priority: unescape('%uC6B0%uC120%uC21C%uC704%uB97C%20%uC120%uD0DD%uD558%uC138%uC694%3A'),
      input_priority: unescape('%uC21C%uC704'),
      btn_back: unescape('%uC774%uC804'),
      btn_submit: unescape('%uC81C%uCD9C'),
      btn_reset: unescape('%uB0B4%uC6A9%uC9C0%uC6B0%uAE30'),
      name: '',
      sequence: '1',
      title: ''
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/css/form.scss";
</style>
