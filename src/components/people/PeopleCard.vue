<template>
  <div class="people-card d-flex flex-row justify-content-between" :class="{active: isActive}"
       @click="$emit('cardClickEvent', id)">
    <div class="info">
      <div class="name">
        {{name}}
      </div>
      <div class="phone" v-if="show_phone">
        {{phone}}
      </div>
    </div>
    <div v-if="can_remove" @click="remove(id)" >
      <b-icon-x font-size="20"></b-icon-x>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {BIconX} from 'bootstrap-vue'
export default {
  name: 'PeopleCard',
  props: ['id', 'name', 'phone', 'can_remove', 'show_phone', 'cardClickEvent', 'selectedPeople'],
  components: {BIconX},
  methods: {
    remove (id) {
      this.$store.commit('removePeople', id)
    }
  },
  computed: {
    isActive () {
      if (this.selectedPeople) {
        return this.selectedPeople.includes(this.id)
      }
      return false
    }
  }
}
</script>

<style scoped>
.people-card {
  border: 1px solid lightblue;
  padding: 1rem .5rem;
  margin-bottom: .5rem;
}
.people-card.active {
  border-color: blue;
  box-shadow: 0 5px 10px 3px rgba(0, 7, 225, 0.2);
}
</style>
