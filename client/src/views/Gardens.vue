<template>
<div>
<div><button type="button" v-on:click="postGarden">Add a garden!</button></div>
<div><button type="button" v-on:click="deleteGardens">delete all gardens!</button></div>

  <b-container fluid="md" class="myContainer">
    <b-row>
      <b-col
        v-for="garden in gardens"
        v-bind:key="garden._id"
        cols="12"
        sm="6"
        md="4"
      >
        <garden-item v-bind:garden="garden" v-on:del-garden="deleteGarden" />
         <div><button type="button" v-on:click="getGarden(garden._id)">get a garden id!</button></div>
         <div><button type="button" v-on:click="addPlants(garden._id)">add plant to garden!</button></div>
          <div><button type="button" v-on:click="getPlants(garden._id)">get plant from garden!</button></div>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import GardenItem from '../components/GardenItem.vue'
import { Api } from '@/Api'

export default {
  name: 'gardens',
  components: {
    'garden-item': GardenItem
  },
  mounted() {
    console.log('Page is loaded!')
    // load the garden from server
    Api.get('/gardens')
      .then((response) => {
        console.log(response)
        this.gardens = response.data.gardens
      })
      .catch((error) => {
        this.gardens = []
        console.log(error)
        //  to do dispaly some error message istead of logging to consle
      })
      .then(() => {
        console.log('this run every time after sucess or error.')
      })
  },
  methods: {
    deleteGarden(id) {
      console.log(`Delete garden with id ${id}`)
      Api.delete(`/gardens/${id}`).then((response) => {
        const index = this.gardens.findIndex((garden) => garden._id === id)
        this.gardens.splice(index, 1)
      })
      // TODO: catch error
    },
    postGarden() {
      console.log('line 60')
      const newGarden = {
        name: this.name,
        size: this.size,
        location: this.location
      }
      Api.post('/gardens/', newGarden)
        .then((response) => {
          this.gardens.push(response.data)
        })
        .catch((error) => {
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    deleteGardens() {
      console.log('Delete garden')
      Api.delete('/gardens/')
        .then(response => {
          console.log(response.data)
          this.gardens = []
        })
        .catch(error => {
          this.gardens = []
          console.log(error)
        //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
        // TODO: catch error
    },
    getGarden(id) {
      console.log(`get garden with id ${id}`)
      Api.get(`/gardens/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          this.gardens = []
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    addPlants(gardenId) {
      console.log('line 111')
      const newPlant = {
        name: this.name,
        type: this.type,
        color: this.color,
        season: this.season,
        price: this.price,
        has: gardenId
      }
      Api.post(`/gardens/${gardenId}/plants`, newPlant)
        .then((response) => {
          const index = this.gardens.findIndex(garden => garden._id === gardenId)
          this.gardens[index].has.push(response.data)
          console.log(this.gardens[index])
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    getPlants(gardenId) {
      console.log('line 135')
      Api.get(`/gardens/${gardenId}/plants`)
        .then((response) => {
          console.log(response.data)
        })
        .catch(error => {
          this.gardens = []
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
      gardens: [],
      text: ''
    }
  }
}
</script>

<style>
.myContainer {
  background-color: rgb(179, 169, 216);
  border: solid;
}
</style>
