<template>
  <div class="main-page">
    <div class="cards d-flex flex-row flex-wrap">
      <div class='header-block'>
        <div class='info'>
          <button class='btn btn-info'> Приглашения: {{invitesCount}}</button>
        </div>
        <div class=''>
          <add-card width='38px' height='38px' icon-scale='1' :to="{name: 'PartyCreatePage'}"></add-card>
        </div>
      </div>
      <div class='list w-100'>
        <party-card v-for="party in parties"
                  :key="party.id"
                  v-bind="party"
        ></party-card>
      </div>
      <Empty v-if='!parties.length'></Empty>
    </div>
  </div>
</template>

<script>

import AddCard from '../AddCard'
import PartyCard from './PartyCard'
import Empty from '../Empty'

export default {
  name: 'PartiesListPage',
  components: {
    AddCard,
    PartyCard,
    Empty
  },
  data () {
    return {
      invitesCount: 0,
      parties: []
    }
  },
  mounted() {
    this.parties = this.$store.getters.getParties
  }
}
</script>

<style>
.header-block {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.cards {
  gap: .5rem;
}

a {
  text-decoration: none;
  color: black;
}

.add-button {
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
}
</style>
