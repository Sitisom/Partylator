<template>
  <div class="">
    DETAILS {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'PartyDetailPage',
  props: ['id']
}
</script>

<style scoped>

</style>
