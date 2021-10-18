<template>
  <div>
    <h3>Plants</h3>
    <crud-table
      endpoint='/plants'
      :columns="['name', 'type', 'color', 'season', 'price', 'Action']"
      :form-fields="{
        name: '',
        type: '',
        color: '',
        season: '',
        price: ''
      }"
    >
      <!-- your form input fields in this slot-->
      <template v-slot:input-fields="{ formdata }">
        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Type:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.type"
            required
            placeholder="Enter type"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Color:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.color"
            required
            placeholder="Enter color"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Season:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.season"
            required
            placeholder="Enter season"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="price:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.price"
            required
            placeholder="Enter price"
          ></b-form-input>
        </b-form-group>
      </template>
    </crud-table>
  </div>
</template>

<script>
import CrudTable from '../components/crud-table'

export default {
  components: { CrudTable }
}
</script>

<style scoped></style>
