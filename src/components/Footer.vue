<template>
  <footer>
    <div class="d-flex flex-row">
      <router-link class="h3" v-for='button in buttons'
                   :to="button.url"
                   :key="button.page">
        <b-icon :icon="$route.name === button.page ? button.active : button.passive"></b-icon>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { BIcon, BIconHouseDoor, BIconHouseDoorFill, BIconPeople, BIconPeopleFill } from 'bootstrap-vue'

export default {
  name: 'Footer',
  components: {
    BIcon,
    BIconHouseDoor,
    BIconHouseDoorFill,
    BIconPeople,
    BIconPeopleFill
  },
  data: function () {
    return {
      buttons: [
        { page: 'PartiesListPage', url: '/parties', active: 'house-door-fill', passive: 'house-door' },
        { page: 'PeoplePage', url: '/people', active: 'people-fill', passive: 'people' }
      ]
    }
  }
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  z-index: 1000;
}
</style>
