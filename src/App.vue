<template>
  <div id="app">
    
    <MyHeader />
    <main>
      <router-view />
    </main>
    <MyFooter />
  </div>
</template>

<script>

import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import axiosDefault from './services/axiosDefaultService'
import userService from './services/userService'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },

  async created() {
    axiosDefault.setDefault()

    let checkExpiredToken = userService.isAuthenticated()
    
    if(!checkExpiredToken) {
      this.$router.push('/login');
    }
   /* if(this.$store.state.auth.user) {
      userService.checkToken(this.$store.state.auth.user.token)
    } */
  },
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,500&display=swap');

  #app {
    font-family: 'Open Sans', sans-serif;
  }

</style>
