<template>
  <div>
    <div><button type="button" v-on:click="addPlant">Add a plant!</button></div>
    <div>
      <button type="button" v-on:click="deletePlants">
        delete all plants!
      </button>
    </div>

    <b-container fluid="md" class="myContainer">
      <div>
      <div class="sign-up-page add-white-space">
        <b-card class="sign-up-form-container">
          <b-card-body class="mx-2">
            <h1 class="mt-2 mb-5">
              Add Plant!
            </h1>

            <add-plant-form />

            <p class="mt-2">
              Already registered?
              <router-link to="/sign-in">Sign in here</router-link>
            </p>
          </b-card-body>
        </b-card>
      </div>
    </div>
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
          <div>
            <button type="button" v-on:click="getPlant(plant._id)">
              get a plant id!
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PlantItem from '../components/PlantItem.vue'
import AddPlantForm from '../forms/plant/AddPlantForm.vue'
import { Api } from '@/Api'

export default {
  name: 'plants',
  components: {
    'plant-item': PlantItem,
    'add-plant-form': AddPlantForm
  },
  mounted() {
    console.log('Page is loaded!')
    // load the plant from server
    Api.get('/plants')
      .then(response => {
        console.log(response)
        this.plants = response.data.plants
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
  methods: {
    deletePlant(id) {
      console.log(`Delete plant with id ${id}`)
      Api.delete(`/plants/${id}`).then(response => {
        const index = this.plants.findIndex(plant => plant._id === id)
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
        .then(response => {
          this.plants.push(response.data)
        })
        .catch(error => {
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
