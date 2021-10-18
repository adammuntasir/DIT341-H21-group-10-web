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
          placeholder="Costumer Name"
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
          placeholder="Costumer Email"
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
          placeholder="Costumer Password"
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
          placeholder="Costumer streetNumber"
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
          placeholder="Costumer streetName"
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
          placeholder="Costumer City"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Create Costumer</b-button>
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
    postCostumer(name, email, password, streetName, streetNumber, city) {
      const newCostumer = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        streetName: this.form.streetName,
        streetNumber: this.form.streetNumber,
        city: this.form.city
      }
      Api.post('/costumers/', newCostumer)
        .then(response => {
          this.costumers.push(response.data)
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
      this.postCostumer()
    }
  }
}
</script>
