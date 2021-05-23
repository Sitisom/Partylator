<template>
  <people-list :can_create="can_create"
               :can_remove="true"
               :cardClickEvent="(id) => {}"
  ></people-list>
</template>

<script>
import PeopleList from './PeopleList'

export default {
  name: 'PeoplePage',
  components: { PeopleList },
  computed: {
    can_create () {
      return this.$route.name !== 'PeopleCreatePage'
    }
  }
}
</script>
