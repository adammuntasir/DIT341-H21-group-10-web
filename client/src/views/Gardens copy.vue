<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div>
      <b-button-group>
        <b-dropdown right text="Menu">
          <b-dropdown-item v-on:click="postGarden"
            >Create garden</b-dropdown-item
          >
          <b-dropdown-item v-on:click="getGarden(garden._id)"
            >Get one garden</b-dropdown-item
          >
          <b-dropdown-item v-on:click="deleteGarden(garden._id)"
            >Delete one garden</b-dropdown-item
          >
          <b-dropdown-item v-on:click="deleteGardens"
            >Delete all gardens</b-dropdown-item
          >
          <b-dropdown-item v-on:click="putGarden(garden._id)"
            >update garden</b-dropdown-item
          >
          <b-dropdown-item v-on:click="patchtGarden(garden._id)"
            >change a garden</b-dropdown-item
          >
          <b-dropdown-item v-on:click="addPlants(garden._id)"
            >add plant to garden</b-dropdown-item
          >
          <b-dropdown-item v-on:click="getPlants(garden._id)"
            >get plant from garden</b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
        </b-dropdown>
      </b-button-group>
    </div>

    <b-container fluid="md" class="myContainer">
      <div>
        <div>
          <h1 class="mb-2 mr-sm-2 mb-sm-0">Create a new Garden!</h1>
          <add-garden-form />
          <p class="mt-2">
            add plants to garden?
            <router-link to="/Plants">click here</router-link>
          </p>
        </div>
      </div>
      <b-row>
        <b-col
          v-for="garden in gardens"
          v-bind:key="garden._id"
          cols="12"
          sm="6"
          md="4"
        >
          <garden-item v-bind:garden="garden" v-on:del-garden="deleteGarden" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GardenItem from '../components/GardenItem.vue'
import AddGardenForm from '../forms/garden/AddGardenForm.vue'
import { Api } from '@/Api'

export default {
  name: 'gardens',
  components: {
    'garden-item': GardenItem,
    'add-garden-form': AddGardenForm
  },
  mounted() {
    console.log('Page is loaded!')
    // load the garden from server
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
  methods: {
    deleteGarden(id) {
      console.log(`Delete garden with id ${id}`)
      Api.delete(`/gardens/${id}`).then(response => {
        const index = this.gardens.findIndex(garden => garden._id === id)
        this.gardens.splice(index, 1)
      })
      // TODO: catch error
    },
    postGarden() {
      console.log('line 61')
      const newGarden = {
        name: this.name,
        size: this.size,
        location: this.location
      }
      Api.post('/gardens/', newGarden)
        .then(response => {
          this.gardens.push(response.data)
        })
        .catch(error => {
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
    patchGarden(id) {
      console.log(`Patch garden with id ${id}`)
      Api.patch(`/gardens/${id}`).then(response => {
        const id = this.gardens.findById(garden => garden._id === id)
        this.gardens = response.data.gardens
      })
      // TODO: catch error
    },
    putGardent(id) {
      console.log(`Put garden with id ${id}`)
      Api.put(`/gardens/${id}`).then(response => {
        const id = this.gardens.findByIdAndUpdate(garden => garden._id === id)
        this.gardens = response.data.gardens
      })
      // TODO: catch error
    },

    addPlants(gardenId) {
      console.log('line 112')
      const newPlant = {
        name: this.name,
        type: this.type,
        color: this.color,
        season: this.season,
        price: this.price,
        has: gardenId
      }
      Api.post(`/gardens/${gardenId}/plants`, newPlant)
        .then(response => {
          const index = this.gardens.findIndex(
            garden => garden._id === gardenId
          )
          this.gardens[index].has.push(response.data)
          console.log(this.gardens[index])
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    getPlants(gardenId) {
      console.log('line 137')
      Api.get(`/gardens/${gardenId}/plants`)
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
