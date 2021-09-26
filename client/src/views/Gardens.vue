<template>
    <div>
      <h1>List of Garden </h1>
      <div v-for="garden in gardens" v-bind:key="garden._id">
      <garden-item v-bind:garden="garden" v-on:del-garden="deleteGarden"/>
    </div>
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
      Api.delete(`/gardens/${id}`)
        .then(response => {
          const index = this.gardens.findIndex(garden => garden._id === id)
          this.gardens.splice(index, 1)
        })
        // TODO: catch error
    }
  },
  data() {
    return {
      gardens: []
    }
  }

}
</script>

<style scoped>

</style>
