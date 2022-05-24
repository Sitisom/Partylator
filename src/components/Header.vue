<template>
  <header @click="$router.push({name: 'PartiesListPage'})" class='d-flex flex-row justify-content-between align-items-center'>
    <div class='site-title'>
      <span>Meetupify</span>
    </div>
  </header>
</template>

<script>
import { BIcon, BIconPlusCircle } from 'bootstrap-vue'

export default {
  name: 'Header',
  components: {
    BIcon,
    BIconPlusCircle
  }
}
</script>

<style scoped>

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: lightseagreen;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}

</style>
