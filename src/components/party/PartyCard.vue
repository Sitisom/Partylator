<template>
  <div class="party-card d-flex">
    <router-link :to="{name: 'PartyDetailPage', params: {id: id}}" class="w-100">
      <div @click="remove(id)" class="w-100 text-right">
        <b-icon-x font-size="20"></b-icon-x>
      </div>
      <div class="info px-2 pb-2">
        <div class="title">
          <h6>{{title}}</h6>
        </div>
        <div class="people-count">
          Людей: {{people.length}}
        </div>
        <div class="total-money">
          Денег: {{all_money}}
        </div>
        <div class="date">
          {{ date }}
        </div>
      </div>

    </router-link>
  </div>
</template>

<script>
import {BIconX} from 'bootstrap-vue'

export default {
  name: 'PartyCard',
  props: ['id', 'title', 'people', 'all_money', 'date'],
  components: {BIconX},
  methods: {
    remove (id) {
      this.$store.commit('removeParty', id)
    }
  }
}
</script>

<style scoped>
.party-card {
  border: 2px solid black;
  border-radius: 5px;
  vertical-align: center;
  cursor: pointer;

  width: 9.2rem;
  height: 9.2rem;
}

.party-card:hover {
  border-color: blue;
}

</style>
