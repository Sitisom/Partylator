<template>
  <div class="people-create-page mt-3">
    <div class="d-flex justify-content-end">
          <b-icon-x font-size="20" @click="$router.push({name: 'PeoplePage'})"></b-icon-x>
    </div>
    <b-form @submit="addPeople">
      <b-form-group label="Имя:" label-for="name-input">
        <b-form-input id="name-input" v-model="form.name" :state="nameState"
        aria-describedby="input-live-feedback" trim></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Такое имя уже существует, дополните фамилией или отличительными признаками
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="Телефон:" label-for="phone-input">
        <b-form-input
          id="phone-input" type="tel" placeholder="+7 (___) ___-____"
          v-model="form.phone" v-mask="'+7 (###) ###-####'" :state="phoneState">
        </b-form-input>

      </b-form-group>
      <b-button type="submit" variant="primary">Добавить</b-button>
    </b-form>
  </div>
</template>

<script>
import {BForm, BFormGroup, BFormInput, BButton, BFormInvalidFeedback, BIconX} from 'bootstrap-vue'

export default {
  name: 'PeopleCreatePage',
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BFormInvalidFeedback,
    BIconX
  },
  data: function () {
    return {
      form: {
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    addPeople (e) {
      e.preventDefault()
      let obj = Object.assign({}, this.form)
      this.$store.commit('addPeople', obj)
      this.$router.push({name: 'PeoplePage'})
    }
  },
  computed: {
    nameState () {
      if (this.form.name) return !this.$store.getters.peopleNames.includes(this.form.name)
      return null
    },
    phoneState () {
      if (this.form.phone) return this.form.phone.length === 17
      return null
    }
  }
}
</script>

<style scoped>
.people-create-page {
  border: 1px solid black;
  padding: 1rem .5rem;
}
</style>
