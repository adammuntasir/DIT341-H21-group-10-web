<template>
  <div>
    <crud-table
      endpoint="/costumers"
      :columns="[
        'name',
        'email',
        'password',
        'streetNumber',
        'streetName',
        'city',
        'Action'
      ]"
      :form-fields="{
        name: '',
        email: '',
        password: '',
        streetNumber: '',
        streetName: '',
        city: ''
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
        <b-form-group id="input-group-2" label="Email:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.email"
            required
            placeholder="Enter email"
          ></b-form-input>
          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="formdata.password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="streetName:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="formdata.streetName"
            required
            placeholder="Enter streetName"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="streetNumber:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="formdata.streetNumber"
            required
            placeholder="Enter streetNumber"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="City:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.city"
            required
            placeholder="Enter City"
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
