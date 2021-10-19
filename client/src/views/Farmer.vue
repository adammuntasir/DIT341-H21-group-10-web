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
 <div>
  <b-container fluid="md" class="myContainer">
    <b-row>
      <b-col cols="3">
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="farmer in farmers"
        v-bind:key="farmer.id"
        cols="10"
        sm="6"
        md="4"
      >
        <user-item v-bind:farmer="farmer" v-on:del-user="deleteFarmer">
        </user-item>
      </b-col>
    </b-row>
  </b-container>

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
    }
  },
  data() {
    return {
      farmers: []
    }
  }
}
</script>
