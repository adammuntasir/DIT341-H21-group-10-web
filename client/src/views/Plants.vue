<template>
  <b-container fluid="md" class="myContainer">
    <!-- <b-row>
        <b-col cols="3" offset="1" offset-md="2">
           <b-form-input v-model="text" placeholder="Which plant do you need"></b-form-input>
        </b-col>
      </b-row> -->
    <b-row>
      <b-col
        v-for="plant in plants"
        v-bind:key="plant._id"
        cols="12"
        sm="6"
        md="4"
      >
        <plant-item v-bind:plant="plant" v-on:del-plant="deletePlant" />
        <button type="button" v-on:click="addPlant">Add a plant!</button>
         <button type="button" v-on:click="getplants(id)">get a plant!</button>
      </b-col>
    </b-row>
  </b-container>
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
    addPlant() {
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
    //,
    /* deletePlants()) {
      console.log('Delete plant')
      Api.delete('/plants/')
        .then(response => {
          this.plants.splice(0, [].length)
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
    } */
    getplants(id) {
      console.log(`get plant with id ${id}`)
      Api.get(`/plants/${id}`)
        .then(response => {
          const id = this.plants.findId(plant => plant._id === id)
          console.log(response)
          this.plants = response.data.plant._id
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
