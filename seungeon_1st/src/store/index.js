import Vue from 'vue'
import Vuex from 'vuex'
import { Todo } from './modules/todo'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(Vuex)
let firebaseConfig = {
  apiKey: 'AIzaSyA3r63OBSnMXnFsQ466pY5I6nxUtvX8Rtk',
  authDomain: 'adriel-vue.firebaseapp.com',
  databaseURL: 'https://adriel-vue.firebaseio.com',
  projectId: 'adriel-vue',
  storageBucket: 'adriel-vue.appspot.com',
  messagingSenderId: '112051604813',
  appId: '1:112051604813:web:9ff24dfe0cacf0433b3b04'
}
firebase.initializeApp(firebaseConfig)
export default new Vuex.Store({
  state: {
    db: firebase.firestore()
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Todo
  }
})
