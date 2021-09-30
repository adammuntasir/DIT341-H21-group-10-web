<template>
    <b-container fluid="md" class="myContainer" >
      <b-row>
        <b-col cols="3" offset="1" offset-md="2">
           <b-form-input v-model="text" placeholder="Which plant do you need"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="plant in plants" v-bind:key="plant._id" cols="12" sm="6" md="4">
            <plant-item v-bind:plant="plant" v-on:del-plant="deletePlant"/>
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
      Api.delete(`/plants/${id}`)
        .then(response => {
          const index = this.plants.findIndex(plant => plant._id === id)
          this.plants.splice(index, 1)
        })
        // TODO: catch error
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
  background-color: aqua;
  border: solid;
}
</style>
