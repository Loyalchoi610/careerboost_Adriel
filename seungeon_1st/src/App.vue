<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created () {
    this.loadTodos()
    this.loadDoings()
    this.loadDones()
  },
  methods: {
    ...mapActions({
      loadTodos: 'Todo/loadTodos',
      loadDoings: 'Todo/loadDoings',
      loadDones: 'Todo/loadDones'
    })
  }
}
</script>
<style lang="scss">
  @import "assets/css/layout";
</style>
