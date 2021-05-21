<template>
  <people-list :show_add="true"></people-list>
</template>

<script>
import PeopleList from './PeopleList'

export default {
  name: 'PeoplePage',
  components: { PeopleList }
}
</script>

<style scoped>

</style>
