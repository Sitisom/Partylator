<template>
  <div class="party-card d-flex">
    <router-link :to="{name: 'PartyDetailPage', params: {id: 1}}">
      ТУСА
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PartyCard',
  props: ['id']
}
</script>

<style scoped>
.party-card {
  border: 2px solid black;
  border-radius: 5px;
  vertical-align: center;
  cursor: pointer;

  min-width: 9.2rem;
  min-height: 9.2rem;
}

.party-card:hover {
  border-color: blue;
}

</style>
