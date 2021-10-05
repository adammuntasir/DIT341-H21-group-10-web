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
        <input v-model="passwordConf" placeholder="password">
        <p>Are you a gardener or a costumer</p>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>Costumer</option>
          <option>Gardener</option>
        </select>
    </div>
</template>

<script>
// import { Api } from '@/Api'
export default {
  data() {
    return {
      data: {
        selected: 'costumer',
        options: [{ text: 'costumer', value: 'costumer' }, { text: 'gardener', value: 'gardener' }]
      }
    }
  }
}
</script>
