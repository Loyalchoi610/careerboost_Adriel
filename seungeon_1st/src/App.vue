<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    Promise.all([this.$store.dispatch('Todo/loadTodos'),
      this.$store.dispatch('Todo/loadDoings'),
      this.$store.dispatch('Todo/loadDones')])
      .then()
  }
}
</script>
<style>
  @import "assets/css/layout.css";
</style>
