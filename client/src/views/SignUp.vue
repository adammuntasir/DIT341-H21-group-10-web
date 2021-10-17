<style scoped>
div{
  background-color: rgb(50, 217, 144)
  }
  p{
    margin-bottom: 0px;
    padding-top: 10px;
  }

</style>

<template>
    <div id="body">
        <p>email adress</p>
        <input v-model="email" placeholder="ex. 1234@yahoo.com">
        <p>user name</p>
        <input v-model="username" placeholder="username">
        <p>password</p>
        <input v-model="password" placeholder="password">
        <p>confirm password</p>
        <input v-model="confirmPass" placeholder="confirm Password">
        <p>Are you a gardener or a costumer</p>
        <select v-model="selected">
          <option disabled value="a">Please select one</option>
          <option>Costumer</option>
          <option>Farmer</option>
        </select>
        <b-button @click="createUser"> Register</b-button>
    </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  methods: {
    createUser() {
      let path = ''
      if (this.password === this.confirmPass) {
        console.log(this.email, this.username, this.password, this.type, this.confirmPass, this.selected)
        if (this.selected === 'Costumer') {
          path = '/costumers'
        } else path = '/farmers'
        Api.post(path, { email: `${this.email}`, name: `${this.username}`, password: `${this.password}` })
      } else {
        alert('passwords do not match')
      }
    }
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPass: '',
      selected: ''
    }
  }
}
</script>
