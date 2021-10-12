<template>
  <!-- <div>
      <h1>List of Garden </h1>
      <div v-for="garden in gardens" v-bind:key="garden._id">
      <garden-item v-bind:garden="garden" v-on:del-garden="deleteGarden"/>
    </div>
    </div> -->
  <b-container fluid="md" class="myContainer">
    <b-row>
      <b-col
        v-for="garden in gardens"
        v-bind:key="garden._id"
        cols="12"
        sm="6"
        md="4"
      >
        <div><garden-item v-bind:garden="garden" v-on:del-garden="deleteGardens" /></div>
        <div>
        <button type="button" v-on:click="postGardens">Add a garden!</button>
        </div>
      </b-col>
    </b-row>
  </b-container>
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
    this.gettAllGardens()
  },
  methods: {
    gettAllGardens() {
      Api.get('/gardens')
        .then(response => {
          console.log(response)
          this.gardens = response.data.gardens
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
    getGardens(id) {
      console.log(`get garden with id ${id}`)
      Api.get(`/gardens/${id}`)
        .then(response => {
          const id = this.gardens.findId(garden => garden._id === id)
          console.log(response)
          this.gardens = response.data.garden._id
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
    deleteGardens(id) {
      console.log(`Delete garden with id ${id}`)
      Api.delete(`/gardens/${id}`)
        .then(response => {
          const index = this.gardens.findIndex(garden => garden._id === id)
          this.gardens.splice(index, 1)
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
    postGardens() {
      console.log('line 94')
      const newGarden = {
        name: this.name,
        location: this.location,
        size: this.size
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
    }
    //,
    /* deleteGardens()) {
      console.log('Delete garden')
      Api.delete('/gardens/')
        .then(response => {
          this.gardens.splice(0, [].length)
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
    } */
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
  background-color: aqua;
  border: solid;
}
</style>
