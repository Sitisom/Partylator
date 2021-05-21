<template>
  <div class="mt-3">
    <b-form @submit="addPeople">
      <b-form-group label="Имя:" label-for="name-input">
        <b-form-input id="name-input" v-model="form.name"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import {BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'

export default {
  name: 'PeopleCreatePage',
  components: {BForm, BFormGroup, BFormInput, BButton},
  data: function () {
    return {
      form: {
        name: ''
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
  }
}
</script>

<style scoped>

</style>
