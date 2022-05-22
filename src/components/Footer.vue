<template>
  <footer>
    <div class="control-panel d-flex flex-row py-2 px-3">
      <router-link class="h3" v-for='button in buttons'
                   :to="button.url"
                   :key="button.page">
        <b-icon :icon="$route.path.includes(button.page) ? button.active : button.passive"></b-icon>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { BIcon, BIconHouseDoor, BIconHouseDoorFill, BIconPeople, BIconPeopleFill, BIconGear, BIconGearFill } from 'bootstrap-vue'

export default {
  name: 'Footer',
  components: {
    BIcon,
    BIconHouseDoor,
    BIconHouseDoorFill,
    BIconPeople,
    BIconPeopleFill,
    BIconGear,
    BIconGearFill
  },
  data: function () {
    return {
      buttons: [
        { page: '/parties', url: {name: 'PartiesListPage'}, active: 'house-door-fill', passive: 'house-door' },
        { page: '/people', url: {name: 'PeoplePage'}, active: 'people-fill', passive: 'people' },
        { page: '/settings', url: {name: 'SettingsPage'}, active: 'gear-fill', passive: 'gear' }
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
  width: 100%;
  height: 50px;
  background-color: white;
}
a {
  color: black;
  display: block;
  padding: 0 1rem;
}

svg {
  font-size: 2rem;
}
</style>
