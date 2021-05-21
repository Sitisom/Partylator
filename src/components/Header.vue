<template>
  <header @click="$router.push({name: 'PartiesListPage'})">
    <span>Partylator</span>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
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
  padding-top: 16px;
}

</style>
