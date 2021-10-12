<template>
<div>
<div><button type="button" v-on:click="postPlant">Add a plant!</button></div>
<div><button type="button" v-on:click="deletePlants">delete all plants!</button></div>

  <b-container fluid="md" class="myContainer">
    <b-row>
      <b-col
        v-for="plant in plants"
        v-bind:key="plant._id"
        cols="12"
        sm="6"
        md="4"
      >
        <plant-item v-bind:plant="plant" v-on:del-plant="deletePlant" />
         <div><button type="button" v-on:click="getPlant(plant._id)">get a plant id!</button></div>
         <div><button type="button" v-on:click="putPlant(plant._id)">put a plant</button></div>
         <div><button type="button" v-on:click="patchPlant(plant._id)">patch a plant</button></div>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import PlantItem from '../components/PlantItem.vue'
import { Api } from '@/Api'

export default {
  name: 'plants',
  components: {
    'plant-item': PlantItem
  },
  mounted() {
    console.log('Page is loaded!')
    // load the plant from server
    Api.get('/plants')
      .then((response) => {
        console.log(response)
        this.plants = response.data.plants
      })
      .catch((error) => {
        this.plants = []
        console.log(error)
        //  to do dispaly some error message istead of logging to consle
      })
      .then(() => {
        console.log('this run every time after sucess or error.')
      })
  },
  methods: {
    deletePlant(id) {
      console.log(`Delete plant with id ${id}`)
      Api.delete(`/plants/${id}`).then((response) => {
        const index = this.plants.findIndex((plant) => plant._id === id)
        this.plants.splice(index, 1)
      })
      // TODO: catch error
    },
    postPlant() {
      console.log('line 60')
      const newPlant = {
        name: this.name,
        type: this.type,
        color: this.color,
        season: this.season,
        price: this.price
      }
      Api.post('/plants/', newPlant)
        .then((response) => {
          this.plants.push(response.data)
        })
        .catch((error) => {
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    deletePlants() {
      console.log('Delete plant')
      Api.delete('/plants/')
        .then(response => {
          console.log(response.data)
          this.plants = []
        })
        .catch(error => {
          this.plants = []
          console.log(error)
        //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
        // TODO: catch error
    },
    getPlant(id) {
      console.log(`get plant with id ${id}`)
      Api.get(`/plants/${id}`)
        .then(response => {
          // const id = this.plants.findId(plant => plant._id === id)
          console.log(response.data)
          //  this.plant._id
        })
        .catch(error => {
          this.plants = []
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    patchPlant(id) {
      console.log(`patch plant with id ${id}`)
      Api.patch(`/plants/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          this.plants = []
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    putPlant(id) {
      console.log(`put plant with id ${id}`)
      Api.put(`/plants/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          this.plants = []
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
      plants: [],
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
