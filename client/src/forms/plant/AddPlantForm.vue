<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.Name"
          type="name"
          placeholder="Plant Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Type:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.type"
          placeholder="Enter type"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="color:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.color"
          placeholder="Enter color"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="season:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.season"
          :options="season"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="price:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.price"
          placeholder="Enter price"
          required
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">Add plant</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  data() {
    return {
      form: {
        name: '',
        type: '',
        color: '',
        season: null,
        price: 0,
        checked: []
      },
      season: [
        { text: 'Select season', value: null },
        'Summer',
        'Autumn',
        'Winter',
        'Spring'
      ],
      show: true
    }
  },
  methods: {
    addPlant(name, type, color, season, price) {
      var newPlant = {
        name: this.form.name,
        type: this.form.type,
        color: this.form.color,
        season: this.form.season,
        price: this.form.price
      }
      Api.post('/plants/', newPlant)
        .then(response => {
          this.plants.push(response.data)
        })
        .catch(error => {
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
      this.addPlant()
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
