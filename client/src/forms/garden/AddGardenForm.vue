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
          placeholder="Garden Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="location:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.location"
          placeholder="Garden Location"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="size:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.size"
          placeholder="Garden size"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Create garden</b-button>
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
        location: '',
        size: 0
      },
      show: true
    }
  },
  methods: {
    postGarden(name, location, size) {
      const newGarden = {
        name: this.form.name,
        size: this.form.size,
        location: this.form.location
      }
      Api.post('/gardens/', newGarden)
        .then((response) => {
          this.gardens.push(response.data)
        })
        .catch((error) => {
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
      this.postGarden()
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.location = ''
      this.form.size = null
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

  }
}
</script>
