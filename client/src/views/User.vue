<template>
<div>
    <h1>Users page a user id: {{ $route.params.id }}</h1>
    <div v-for="user in users" v-bind:key="user._id">
        <user-item v-bind:user='user' v-on:del-user="deleteUser"/>
    </div>
</div>
</template>

<script>
import UserItem from '../components/UserItem.vue'
import { Api } from '@/Api'
export default {
  name: 'costumers',
  components: {
    'user-item': UserItem
  },
  mounted() {
    console.log('Page is loaded')
    Api.get('/costumers').then(response => {
      console.log(response)
      this.users = response.data.users
    }).catch(error => {
      console.log(error)
      this.users = []
    }).then(() => { console.log('this line should be runining regardeless of success or faiure') })
  },
  methods: {
    deleteUser(id) {
      console.log('Delete costumer with id', id)
      Api.delete(`/costumers/${id}`)
        .then(response => {
          const index = this.users.findIndex(user => user._id === id)
          this.users.splice(index, 1)
        })
    }
  },
  data() {
    return {
      users: []
    }
  }
}
</script>
