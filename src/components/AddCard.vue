<template>
  <router-link class='d-flex' :to="to">
    <div class="add-button d-flex justify-content-center align-items-center btn btn-success"
       :style="{'min-width': width, 'min-height': height}">
      <b-icon :font-scale="iconScale" icon="plus-circle"></b-icon>
    </div>
  </router-link>
</template>

<script>

import { BIcon, BIconPlusCircle } from 'bootstrap-vue'

export default {
  name: 'AddCard',
  components: {
    BIcon,
    BIconPlusCircle
  },
  props: ['to', 'width', 'height', 'iconScale']
}
</script>

<style scoped>
.add-button {
  border-radius: 5px;
  vertical-align: center;
  cursor: pointer;
}

.add-button:hover {
  border-color: darkgreen;
}

</style>
