<template>
  <div>
    <crud-table
      endpoint="/gardens"
      :columns="['name', 'size', 'location', 'Action']"
      :form-fields="{
        name: '',
        size: 0,
        location: ''
      }"
    >
      <!-- your form input fields in this slot-->
      <template v-slot:input-fields="{ formdata }">
        <b-form-group id="input-group-3" label="Name:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="formdata.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Size:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.size"
            required
            placeholder="Enter size"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Location:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.location"
            required
            placeholder="Enter location"
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

<style scoped>
div {
  background-color: rgba(230, 201, 228, 0.842);
}
</style>
