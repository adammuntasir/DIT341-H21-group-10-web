<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Farmer Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="email:"
        label-for="input-2"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          placeholder="Farmer Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="password:"
        label-for="input-3"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <b-form-input
          id="input-3"
          v-model="form.password"
          placeholder="Farmer Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="streetNumber:"
        label-for="input-4"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <b-form-input
          id="input-4"
          v-model="form.streetNumber"
          placeholder="Farmer streetNumber"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="streetName:"
        label-for="input-5"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <b-form-input
          id="input-5"
          v-model="form.streetName"
          placeholder="Farmer streetName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="City:"
        label-for="input-6"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <b-form-input
          id="input-6"
          v-model="form.city"
          placeholder="Farmer City"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Create farmer</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        streetName: '',
        streetNumber: '',
        city: ''
      },
      show: true
    }
  },
  methods: {
    postFarmers(name, email, password, streetName, streetNumber, city) {
      const newFarmers = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        streetName: this.form.streetName,
        streetNumber: this.form.streetNumber,
        city: this.form.city
      }
      Api.post('/farmers/', newFarmers)
        .then(response => {
          this.farmers.push(response.data)
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
      this.postFarmers()
    }
  }
}
</script>
