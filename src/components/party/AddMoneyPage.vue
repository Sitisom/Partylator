<template>
  <b-form @submit="$emit('setMoney', form.money)">
    <b-form-group label="Сумма" label-for="money-input">
      <b-form-input id="money-input" v-model="form.money"></b-form-input>
    </b-form-group>
    <b-button type="submit"></b-button>
  </b-form>
</template>

<script>
export default {
  name: 'AddMoneyPage',
  props: ['setMoney'],
  data: function () {
    return {
      form: {
        money: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
