<template>
    <div>
        <h1>I'm In the signUp</h1>
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
          <option>Gardener</option>
        </select>
        <button @click="createUser"> Register</button>
    </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  methods: {
    createUser(email, username, type) {
      email = this.email
      username = this.username
      type = this.type
      console.log(email, this.username, this.password, this.type, this.confirmPass, this.selected)
      Api.post('/users', { email: `${this.email}`, name: `${this.username}`, userType: 'test-2' })
    }
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPass: '',
      type: '',
      selected: ''
    }
  }
}
</script>
