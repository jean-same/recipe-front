<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyHeader />
    <RecipeList />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import RecipeList from './components/RecipeList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    RecipeList,
    MyFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
