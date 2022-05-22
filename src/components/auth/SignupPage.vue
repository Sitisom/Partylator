<template>
  <form class='mt-3'>
    <div class='form-group'>
      <label for='firstName'>Имя</label>
      <input id='firstName' type='text' class='form-control' v-model='form.firstName' required>
    </div>
    <div class='form-group'>
      <label for='lastName'>Фамилия</label>
      <input id='lastName' type='text' class='form-control' v-model='form.lastName' required>
    </div>
    <div class='form-group'>
      <label for='email'>Почта</label>
      <input id='email' type='email' class='form-control' v-model='form.email' required>
    </div>
    <div class='form-group'>
      <label for='password'>Пароль</label>
      <input id='password' type='password' class='form-control' v-model='form.password' required>
    </div>
    <div class='form-group'>
      <label for='password2'>Повторите пароль</label>
      <input id='password2' type='password' class='form-control' v-model='form.password2' required>
    </div>
    <div class='bottom-menu d-flex justify-content-between align-items-center'>
      <input type='button' value='Создать аккаунт' class='btn btn-success' @click='signup'>
      <router-link style='font-size: 14px' :to='{name: "LoginPage"}'>Войти</router-link>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import {url} from '../../utility'

export default {
  name: 'SignupPage',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    signup() {
      if (this.form.password !== this.form.password2) {
        this.$toast.error('Пароли отличаются!')
        return
      }
      axios.post(
        url(this.$store.state.auth.endpoints.signup),
        Object.assign(JSON.parse(JSON.stringify(this.form)), {username: this.form.email})
      ).then(response => response.data
      ).then(data => {
        this.$store.commit('setToken', data)
        this.$router.push({name: 'PartiesListPage'})
      }).catch(error => Object.keys(error.response.data).forEach(key => this.$toast.error(error.response.data[key])))
    }
  }
}
</script>

<style scoped>

</style>
