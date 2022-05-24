<template>
  <router-link :to="{name: 'PartyDetailPage', params: {id: id}}" class='party-card'>
    <div @click="remove(id)" class="remove-button">
      <b-icon-x font-size="24"></b-icon-x>
    </div>
    <div class="info px-2">
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
        {{ startDate }}
      </div>
    </div>
  </router-link>
</template>

<script>
import {BIconX} from 'bootstrap-vue'

export default {
  name: 'PartyCard',
  props: ['id', 'title', 'people', 'all_money', 'createdAt', 'startDate'],
  components: {BIconX},
  methods: {
    remove (id) {
      console.log('bad')
      this.$store.commit('removeParty', id)
    }
  }
}
</script>

<style scoped>
.party-card {
  border: 1px solid lightblue;
  border-radius: 5px;
  vertical-align: center;
  cursor: pointer;

  width: 100%;

  margin-bottom: 8px;

  display: flex;
  flex-direction: row-reverse;
}

.party-card:hover {
  border-color: blue;
}

.info {
  padding: 12px 0;
  flex-grow: 1;
}
</style>
