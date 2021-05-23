<template>
  <div class="">
    <div class="info">
      <div class="title">
        <h1>{{ party.title }}</h1>
      </div>
    </div>
    <expenses-list v-bind="party"></expenses-list>
    <router-view></router-view>
  </div>
</template>

<script>
import ExpensesList from './ExpensesList'
import {BIcon, BIconPlus} from 'bootstrap-vue'

export default {
  name: 'PartyDetailPage',
  components: {ExpensesList, BIcon, BIconPlus},
  computed: {
    party () {
      let parties = this.$store.getters.getParties.filter(
        obj => obj.id === parseInt(this.$route.path.split('/').slice(-1).pop())
      )
      return parties.length ? parties[0] : this.$router.push({name: 'PartiesListPage'})
    }
  }
}
</script>

<style scoped>

</style>
