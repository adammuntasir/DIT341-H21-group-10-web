<template>
  <!-- <div>
    <div v-for="farmer in farmers" v-bind:key="farmer.id">
        <user-item v-bind:farmer='farmer' v-on:del-user="deleteFarmer"/>
    </div>
    <p></p>
    <b-button type="button" v-on:click="deleteAllFarmers()">Delete all</b-button>
    <p></p>
    <b-button type="button" v-on:click="postFarmers">Create farmer</b-button>
    </div>
 -->
  <b-container fluid="md" class="myContainer">
    <b-button type="button" v-on:click="postFarmers">Create farmer</b-button>
    <b-row>
      <b-col cols="3">
        <b-button>Create New</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="farmer in farmers"
        v-bind:key="farmer.id"
        cols="12"
        sm="6"
        md="4"
      >
        <user-item v-bind:farmer="farmer" v-on:del-user="deleteFarmer" />
      </b-col>
    </b-row>
  </b-container>
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
    Api.get('/farmers')
      .then(response => {
        console.log(response)
        this.farmers = response.data.farmers
      })
      .catch(error => {
        console.log(error)
        this.farmers = []
      })
      .then(() => {
        console.log(
          'this line should be runining regardeless of success or faiure'
        )
      })
  },
  methods: {
    deleteFarmer(id) {
      console.log('Delete costumer with id', id)
      Api.delete(`/farmers/${id}`).then(response => {
        const index = this.farmers.findIndex(farmer => farmer.id === id)
        this.farmers.splice(index, 1)
      })
    },
    deleteAllFarmers() {
      Api.delete('/farmers').then(response => {
        console.log('deleted successfully')
        this.farmers.splice()
      })
    },
    postFarmers() {
      console.log('line 61')
      const newFarmers = {
        name: 'carlos',
        email: 'abc@example.com'
      }
      Api.post('/farmers/', newFarmers)
        .then(response => {
          this.farmers.push(response.data)
        })
        .catch(error => {
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
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
