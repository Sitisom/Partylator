<template>
  <div class="">
    <people-card v-for="i in $store.state.people" :name="i.name"></people-card>
    <add-card class="py-2" v-if="show_add" width="100%" :to="{name: 'PeopleCreatePage'}"></add-card>
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
  props: ['show_add']
}
</script>

<style scoped>

</style>
