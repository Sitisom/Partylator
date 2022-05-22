<template>
  <form class='mt-3'>
    <div class='form-group'>
      <label for='email'>Почта</label>
      <input id='email' type='email' class='form-control' v-model='form.username'>
    </div>
    <div class='form-group'>
      <label for='password'>Пароль</label>
      <input id='password' type='password' class='form-control' v-model='form.password'>
    </div>
    <div class='bottom-menu d-flex justify-content-between align-items-center'>
      <input type='button' value='Войти' class='btn btn-success' @click='auth'>
      <router-link style='font-size: 14px' :to='{name: "SignupPage"}'>Нет профиля?</router-link>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import {url} from '../../utility'

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    auth() {
      axios.post(
        url(this.$store.state.auth.endpoints.login),
        JSON.parse(JSON.stringify(this.form))
      ).then(response => response.data).then(data => {
        this.$store.commit('setToken', data)
        this.$router.push({name: 'PartiesListPage'})
      }).catch(error => Object.keys(error.response.data).forEach(key => this.$toast.error(error.response.data[key])))
    }
  }
}
</script>

<style scoped>
form {
  max-width: 300px;
  margin: 0 auto;
}
</style>
