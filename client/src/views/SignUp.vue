<style scoped>
div{
  background-color: rgb(50, 217, 144)
  }
  p{
    margin-bottom: 0px;
    padding-top: 10px;
  }
  #input-form{
    width: 25%;
    margin-left: 37%
  }
  .dropdown-form{
    width: 25%;
    margin-left: 3.35%;
  }

</style>

<template>
    <div id="body">
        <p>email adress</p>
        <b-form-input id="input-form" v-model="email" placeholder="ex. 1234@yahoo.com"></b-form-input>
        <p>user name</p>
        <b-form-input id="input-form" v-model="username" placeholder="username"></b-form-input>
        <p>password</p>
        <b-form-input id="input-form" v-model="password" placeholder="password"></b-form-input>
        <p>confirm password</p>
        <b-form-input id="input-form" v-model="confirmPass" placeholder="confirm Password"></b-form-input>
        <p>Are you a gardener or a costumer</p>
        <b-form-select class="dropdown-form" v-model="selected">
          <option disabled value="a">Please select one</option>
          <option>Costumer</option>
          <option>Farmer</option>
        </b-form-select>
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
