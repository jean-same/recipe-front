<template>
  <div id="app">
    
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,500&display=swap');
  
  #app {
    font-family: 'Open Sans', sans-serif;
  }

</style>
