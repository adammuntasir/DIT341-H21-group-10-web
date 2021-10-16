<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div>
      <b-button-group
        ><b-dropdown right text="Menu">
          <b-dropdown-item v-on:click="postCostumer"
            >Create new costumer!</b-dropdown-item
          >
          <b-dropdown-item v-on:click="getCostumer(costumer._id)"
            >Get the id!</b-dropdown-item
          >
          <b-dropdown-item v-on:click="deleteCostumer(costumer._id)"
            >Delete one costumer!</b-dropdown-item
          >
          <b-dropdown-item v-on:click="deleteCostumers()"
            >Delete all costumers!</b-dropdown-item
          >
          <b-dropdown-item v-on:click="addPlants(costumer._id)"
            >buy plant!</b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
        </b-dropdown>
      </b-button-group>
    </div>
    <!-- <div>
      <button type="button" v-on:click="postCostumer">
        Create a costumer!
      </button>
    </div>
    <div>
      <button type="button" v-on:click="deleteCostumers">
        delete all costumers!
      </button>
    </div> -->
    <b-container fluid="md" class="myContainer">
      <div>
        <b-card>
          <h1 class="mt-2 mb-5">Create Costumer!</h1>
          <add-costumer-form />
          <p class="mt-2">
            Do you want to buy plants?
            <router-link to="/Plants">click here</router-link>
          </p>
        </b-card>
      </div>
      <b-row>
        <b-col
          v-for="costumer in costumers"
          v-bind:key="costumer._id"
          cols="12"
          sm="6"
          md="4"
        >
          <costumer-item
            v-bind:costumer="costumer"
            v-on:del-costumer="deleteCostumer"
          />
          <!--  <div>
            <button type="button" v-on:click="getCostumer(costumer._id)">
              get a costumer id!
            </button>
          </div>
          <div>
            <button type="button" v-on:click="addPlants(costumer._id)">
              add plant to costumer!
            </button>
          </div>
          <div>
            <button type="button" v-on:click="getPlants(costumer._id)">
              Show Costumer's plant !
            </button>
          </div> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import CostumerItem from '../components/CostumerItem.vue'
import AddCostumerForm from '../forms/costumer/AddCostumerForm.vue'
import { Api } from '@/Api'
export default {
  name: 'costumers',
  components: {
    'costumer-item': CostumerItem,
    'add-costumer-form': AddCostumerForm
  },
  mounted() {
    console.log('Page is loaded')
    Api.get('/costumers')
      .then(response => {
        console.log(response)
        this.costumers = response.data.costumers
      })
      .catch(error => {
        console.log(error)
        this.costumers = []
      })
      .then(() => {
        console.log(
          'this line should be runining regardeless of success or faiure'
        )
      })
  },
  methods: {
    deleteCostumer(id) {
      console.log('Delete costumer with id', id)
      Api.delete(`/costumers/${id}`).then(response => {
        const index = this.costumers.findIndex(costumer => costumer._id === id)
        this.costumers.splice(index, 1)
      })
    },
    postCostumer() {
      console.log('line 61')
      const newCostumer = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        streetNumber: this.form.streetNumber,
        streetName: this.form.streetName,
        city: this.form.city
      }
      Api.post('/costumers/', newCostumer)
        .then(response => {
          this.costumers.push(response.data)
        })
        .catch(error => {
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    deleteCostumers() {
      console.log('Delete costumer')
      Api.delete('/costumers/')
        .then(response => {
          console.log(response.data)
          this.costumers = []
        })
        .catch(error => {
          this.costumers = []
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
      // TODO: catch error
    },
    getCostumer(id) {
      console.log(`get costumer with id ${id}`)
      Api.get(`/Costumer/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          this.costumers = []
          console.log(error)
          //  to do dispaly some error message istead of logging to consle
        })
        .then(() => {
          console.log('this run every time after sucess or error.')
        })
    },
    addPlants(costumerId) {
      console.log('line 112')
      const newPlant = {
        name: this.name,
        type: this.type,
        color: this.color,
        season: this.season,
        price: this.price,
        plantsBought: costumerId
      }
      Api.post(`/costumers/${costumerId}/plants`, newPlant)
        .then(response => {
          const index = this.costumers.findIndex(
            costumer => costumer._id === costumerId
          )
          this.costumers[index].plantsBought.push(response.data)
          console.log(this.costumers[index])
          console.log(response.data)
        })
        .catch(error => {
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
      costumer: []
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
