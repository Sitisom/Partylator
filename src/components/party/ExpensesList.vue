<template>
  <div class="align-middle">
    <div class="all-expenses d-flex flex-row justify-content-between">
      <div class="info">
        <span>Общий расход: {{ all_money }}</span>
      </div>
      <div class="add-button" @click="$refs['add-money'].show()">
        <b-icon icon="plus" font-size="50"></b-icon>
      </div>
    </div>
    <div class='people-list'>
      <people-card v-for="person in people"
                   v-bind="$store.getters.getPerson(person.id)"
                   :key="person.id"
                   :can_remove="false"
                   :show_phone="false"
                   :cardClickEvent="(id) => {}">
        <div class="expenses-data d-flex flex-row">
          <div class="persons-money mr-5">{{ computeMoney(person) }}</div>
          <div class="add-money-button" @click="personAddButton(person)">
            <b-icon font-size="25" icon="plus-square"></b-icon>
          </div>
        </div>
      </people-card>
    </div>
    <div class="add-money-modal">
      <b-modal ref="add-money" centered :hide-header="true" :hide-footer="true">
        <b-form @submit="makeMoneyTransaction">
          <b-form-group label="Сумма" label-for="money-input">
            <b-form-input id="money-input" v-model="form.money"></b-form-input>
          </b-form-group>
          <b-button type="submit">Добавить</b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import PeopleCard from '../people/PeopleCard'
import {BButton, BForm, BFormGroup, BFormInput, BIcon, BIconPlusSquare, BModal} from 'bootstrap-vue'

export default {
  name: 'ExpensesList',
  data: function () {
    return {
      form: {
        money: ''
      },
      transaction: {
        type: 'all',
        person: null
      }
    }
  },
  props: ['id', 'people', 'all_money'],
  components: {
    PeopleCard,
    BIcon,
    BIconPlusSquare,
    BModal,
    BForm,
    BFormGroup,
    BFormInput,
    BButton
  },
  methods: {
    makeMoneyTransaction (e) {
      e.preventDefault()
      this.$refs['add-money'].hide()
      if (this.transaction.type === 'all') {
        this.$store.dispatch('addMoneyToParty',
          Object.assign({id: this.id, money: this.form.money}))
      } else if (this.transaction.type === 'person' && this.transaction.person) {
        let moneyObj = Object.assign({
          id: this.id,
          personId: this.transaction.person.id,
          money: this.form.money
        })
        this.$store.dispatch('addMoneyToPerson', moneyObj)
      }
      this.form.money = ''
      this.transaction.type = 'all'
      this.transaction.person = null
    },
    computeMoney (person) {
      let money = ((parseInt(this.all_money) / this.people.length) + person.money)
      return Number.isInteger(money) ? money : money.toFixed(2)
    },
    personAddButton (person) {
      this.transaction.type = 'person'
      this.transaction.person = person
      this.$refs['add-money'].show()
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
