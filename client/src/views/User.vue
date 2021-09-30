<template>
<div>
    <h1>Users page a user id: {{ $route.params.id }}</h1>
    <div v-for="user in users" v-bind:key="user._id">
        <user-item v-bind:user='user'/>
    </div>
</div>
</template>

<script>
import UserItem from '../components/UserItem.vue'
import { Api } from '@/Api'
export default {
  name: 'users',
  components: {
    'user-item': UserItem
  },
  mounted() {
    console.log('Page is loaded')
    Api.get('/users').then(response => {
      console.log(response)
      this.users = response.data.users
    })
  },
  data() {
    return {
      users: []
    }
  }
}
</script>
