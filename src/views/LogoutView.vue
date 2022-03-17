<template>
    <section>
        Dec

    </section>
</template>

<script>

import userService from '../services/userService'

export default {
  name: 'LogoutView',
  created(){
      userService.logout()
      this.$router.push('login')
  }
}
</script>

<style scoped lang="scss">
</style>