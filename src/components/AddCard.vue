<template>
  <div class="party-card d-flex justify-content-center align-items-center"
       :style="{'min-width': width, 'min-height': height}">
    <router-link :to="to">
      <b-icon font-scale="3" icon="plus-circle"></b-icon>
    </router-link>
  </div>
</template>

<script>

import { BIcon, BIconPlusCircle } from 'bootstrap-vue'

export default {
  name: 'AddCard',
  components: {
    BIcon,
    BIconPlusCircle
  },
  props: ['to', 'width', 'height']
}
</script>

<style scoped>
.party-card {
  border: 2px solid black;
  border-radius: 5px;
  vertical-align: center;
  cursor: pointer;
}

.party-card:hover {
  border-color: blue;
}

</style>
