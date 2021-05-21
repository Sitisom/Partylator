<template>
  <people-list :show_add="show_add"></people-list>
</template>

<script>
import PeopleList from './PeopleList'

export default {
  name: 'PeoplePage',
  components: { PeopleList },
  computed: {
    show_add () {
      return this.$route.name !== 'PeopleCreatePage'
    }
  }
}
</script>

<style scoped>

</style>
