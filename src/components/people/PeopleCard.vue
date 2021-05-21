<template>
  <div class="people-card d-flex flex-row justify-content-between">
    <div class="info">
      {{name}}
    </div>
    <div @click="remove(id)">
      <b-icon-x font-size="20"></b-icon-x>
    </div>
  </div>
</template>

<script>
import {BIconX} from 'bootstrap-vue'
export default {
  name: 'PeopleCard',
  props: ['id', 'name', 'phone'],
  components: {BIconX},
  methods: {
    remove (id) {
      this.$store.commit('removePeople', id)
    }
  }
}
</script>

<style scoped>
.people-card {
  border: 1px solid black;
  padding: 1rem .5rem;
  margin-bottom: .5rem;
}
</style>
