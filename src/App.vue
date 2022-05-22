<template>
  <div id="app">
    <Header :add-button='addButton'/>
    <main>
      <router-view></router-view>
    </main>
    <Footer v-if='showFooter'/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {Header, Footer},
  data() {
    return {
      showFooter: true,
      addButton: {
        url: '',
        show: false
      }
    }
  },
  created() {
    this.$store.commit('getToken')
    if (!this.$store.state.auth.token) {
      if (this.$router.currentRoute.name !== 'LoginPage') {
        this.$router.push({name: 'LoginPage'})
      }
    }
    // else if (this.$router.currentRoute.name !== 'PartiesListPage') {
    //   this.$router.push({name: 'PartiesListPage'})
    // }
  },
  watch: {
    '$route' (to, from) {
      this.showFooter = !['LoginPage', 'SignupPage'].includes(to.name)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  padding: .5rem .5rem 60px;
}

</style>
