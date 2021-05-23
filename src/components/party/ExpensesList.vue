<template>
  <div class="align-middle">
    <div class="all-expenses d-flex flex-row justify-content-between">
      <div class="info">
        <span>Общий расход: {{ all_money }}</span>
      </div>
      <div class="add-button" @click="$router.push({name: 'AddMoneyPage', params: {}})">
        <b-icon icon="plus" font-size="50"></b-icon>
      </div>
    </div>
    <people-card v-for="person in people"
                 v-bind="$store.getters.getPerson(person.id)"
                 :key="person.id"
                 :can_remove="false"
                 :show_phone="false"
                 :cardClickEvent="(id) => {}"
    >
      <div class="expenses-data d-flex flex-row">
        <div class="persons-money mr-5">{{ person.money }}</div>
        <div class="add-money-button">
          <b-icon font-size="25" icon="plus-square"></b-icon>
        </div>
      </div>
    </people-card>
  </div>
</template>

<script>
import PeopleCard from '../people/PeopleCard'
import {BIcon, BIconPlusSquare} from 'bootstrap-vue'

export default {
  name: 'ExpensesList',
  props: ['id', 'people', 'all_money'],
  components: {PeopleCard, BIcon, BIconPlusSquare},
  methods: {
    addToAllMoney (money) {

    }
  }
}
</script>

<style scoped>
.all-expenses {
  border: 1px solid black;
  margin-bottom: .5rem;
}
.all-expenses .info span{
  line-height: 50px;
  margin-left: .5rem;
}
.add-button {
  border-left: 1px solid black;
}
</style>
