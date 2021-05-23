<template>
  <div class="main-page">
    <div class="cards d-flex flex-row flex-wrap">
      <add-card width="9.2rem" height="9.2rem" :to="{name: 'PartyCreatePage'}"></add-card>
      <party-card v-for="party in $store.getters.getParties"
                  :key="party.id"
                  v-bind="party"
      ></party-card>
    </div>
  </div>
</template>

<script>

import AddCard from '../AddCard'
import PartyCard from './PartyCard'

export default {
  name: 'PartiesListPage',
  components: {
    AddCard,
    PartyCard
  },
  data () {
    return {}
  }
}
</script>

<style>
.cards {
  gap: .5rem;
}

a {
  text-decoration: none;
  color: black;
}
</style>
