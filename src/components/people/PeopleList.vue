<template>
  <div class="pb-3 mb-5">
    <people-card v-for="person in reversedPeople"
                 :key="person.id"
                 :can_remove="can_remove"
                 :show_phone="true"
                 v-bind="person"
                 @cardClickEvent="cardClickEvent"
    ></people-card>
    <add-card class="add-card py-2" v-if="can_create" width="95%" :to="{name: 'PeopleCreatePage'}"></add-card>
    <router-view></router-view>
  </div>
</template>

<script>
import PeopleCard from './PeopleCard'
import AddCard from '../AddCard'

export default {
  name: 'PeopleList',
  components: {
    PeopleCard,
    AddCard
  },
  props: ['can_create', 'can_remove', 'cardClickEvent'],
  computed: {
    reversedPeople () {
      return Array.from(this.$store.getters.getPeople).reverse()
    }
  }
}
</script>

<style scoped>
.add-card {
  position: fixed;
  bottom: 55px;
  background-color: white;
}
</style>
