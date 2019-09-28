import Vue from 'vue'
import Vuex from 'vuex'
import { Todo } from './modules/todo'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(Vuex)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_KEY,
  authDomain: 'adriel-vue.firebaseapp.com',
  databaseURL: 'https://adriel-vue.firebaseio.com',
  projectId: 'adriel-vue',
  storageBucket: 'adriel-vue.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}
firebase.initializeApp(firebaseConfig)
export default new Vuex.Store({
  state: {
    DB: firebase.firestore()
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Todo
  }
})
