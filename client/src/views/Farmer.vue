<template>
    <div>
    <div v-for="farmer in farmers" v-bind:key="farmer.id">
        <user-item v-bind:farmer='farmer' v-on:del-user="deleteUser"/>
    </div>
    <p></p>
    <b-button type="button" v-on:click="deleteAllFarmers()">Delete all</b-button>
    </div>

</template>

<script>

import UserItem from '../components/UserItem.vue'
import { Api } from '@/Api'

export default {
  name: 'farmers',
  components: {
    'user-item': UserItem
  },
  mounted() {
    console.log('Page is loaded')
    Api.get('/farmers').then(response => {
      console.log(response)
      this.farmers = response.data.farmers
    }).catch(error => {
      console.log(error)
      this.farmers = []
    }).then(() => { console.log('this line should be runining regardeless of success or faiure') })
  },
  methods: {
    deleteUser(id) {
      console.log('Delete costumer with id', id)
      Api.delete(`/farmers/${id}`)
        .then(response => {
          const index = this.farmers.findIndex(farmer => farmer.id === id)
          this.farmers.splice(index, 1)
        })
    },
    deleteAllFarmers() {
      Api.delete('/farmers').then(response => {
        console.log('deleted successfully')
        this.farmers.splice()
      })
    }
  },
  data() {
    return {
      farmers: []
    }
  }
}
</script>
