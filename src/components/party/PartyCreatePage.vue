<template>
  <div class="">
    <b-form>
      <b-form-group
        label="Название:"
        label-for="title">
        <b-form-input
          id="title"
          v-model="form.title"
          placeholder="Введите название"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import {BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'

export default {
  name: 'PartyCreatePage',
  components: { BForm, BFormGroup, BFormInput, BButton },
  data: function () {
    return {
      form: {
        title: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
