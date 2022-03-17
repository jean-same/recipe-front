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
  }
}
</script>

<style scoped lang="scss">
</style>