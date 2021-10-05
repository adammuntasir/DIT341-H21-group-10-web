<template>
<b-container fluid="md" class="myContainer" >
      <b-row>
        <b-col v-for="costumer in costumers" v-bind:key="costumer._id" cols="12" sm="6" md="4">
            <costumer-item v-bind:costumer="costumer" v-on:del-costumer="deleteCostumers"/>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import CostumerItem from '../components/CostumerItem.vue'
import { Api } from '@/Api'
export default {
  name: 'costumers',
  components: {
    'costumer-item': CostumerItem
  },
  mounted() {
    console.log('Page is loaded')
    Api.get('/costumers').then(response => {
      console.log(response)
      this.costumers = response.data.costumers
    }).catch(error => {
      console.log(error)
      this.costumers = []
    }).then(() => { console.log('this line should be runining regardeless of success or faiure') })
  },
  methods: {
    deleteCostumer(id) {
      console.log('Delete costumer with id', id)
      Api.delete(`/costumers/${id}`)
        .then(response => {
          const index = this.costumers.findIndex(costumer => costumer._id === id)
          this.costumers.splice(index, 1)
        })
    }
  },
  data() {
    return {
      costumers: []
    }
  }
}
</script>
