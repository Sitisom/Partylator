<template>
  <div class='logout-button'>
    <input type='button' class='btn btn-danger w-100' value='Выйти' @click='logout'>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push({name: 'LoginPage'})
    }
  }
}
</script>

<style scoped>

</style>
