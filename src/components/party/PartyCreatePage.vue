<template>
  <div class="">
    <b-form @submit="createParty" @reset="resetParty">
      <b-form-group
        label="Название:"
        label-for="title">
        <b-form-input
          id="title"
          v-model="form.title"
          placeholder="Введите название"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Дата начала:"
        label-for="startDate">
        <b-form-input
          id="startDate"
          v-model="form.startDate"
          placeholder="Дата начала"
        ></b-form-input>
      </b-form-group>
      <people-list
        :show_add="false"
        :can_remove="false"
        :show_phone="true"
        :cardClickEvent="cardClickEvent"
        :selectedPeople='people'
      ></people-list>
      <div class="control-buttons">
        <b-button type="submit" variant="primary">Добавить</b-button>
        <b-button type="reset" variant="danger">Сбросить</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import {BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'
import PeopleList from '../people/PeopleList'

export default {
  name: 'PartyCreatePage',
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    PeopleList
  },
  data: function () {
    return {
      form: {
        title: '',
        startDate: new Date().toLocaleDateString()
      },
      people: []
    }
  },
  provide() {
    return {
      selectedPeople: this.people
    }
  },
  methods: {
    cardClickEvent (id) {
      if (this.people.includes(id)) {
        this.people = this.people.filter(el => el !== id)
      } else {
        this.people.push(id)
      }
    },
    createParty (e) {
      e.preventDefault()
      this.$store.dispatch('addParty', {people: this.people, form: this.form})
      this.$router.push({name: 'PartiesListPage'})
    },
    resetParty () {
      this.form.title = ''
      this.$store.commit('resetChosenIds')
    }
  }
}
</script>

<style scoped>
.control-buttons {
  position: fixed;
  bottom: 50px;

  background-color: white;
  width: 100%;
}
</style>
