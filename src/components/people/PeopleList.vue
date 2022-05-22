<template>
  <div class="pb-3 mb-5">
    <div class='page-header'>
      <add-card class="add-card py-2" v-if="can_create" width='100%' :to="{name: 'PeopleCreatePage'}"></add-card>
    </div>
    <div class='list'>
      <people-card v-for="person in people"
                 :key="person.id"
                 :can_remove="can_remove"
                 :show_phone="true"
                 v-bind="person"
                 @cardClickEvent="cardClickEvent"
      ></people-card>
    </div>
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
  data() {
    return {
      people: []
    }
  },
  mounted() {
    this.people = Array.from(this.$store.getters.getPeople).reverse()
  },
  watch: {
    '$store.getters.getPeople' (people) {
      this.people = Array.from(people).reverse()
    }
  }
}
</script>

<style scoped>
.add-card {
  width: 100%;
}
</style>
