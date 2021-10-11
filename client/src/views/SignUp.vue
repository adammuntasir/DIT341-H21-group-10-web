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
          <option>Farmer</option>
        </select>
        <button @click="createUser"> Register</button>
    </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  methods: {
    createUser(email, username) {
      email = this.email
      username = this.username
      let path = ''
      console.log(email, this.username, this.password, this.type, this.confirmPass, this.selected)
      if (this.selected === 'Costumer') {
        path = '/costumers'
      } else path = '/farmers'
      Api.post(path, { email: `${this.email}`, name: `${this.username}` })
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
