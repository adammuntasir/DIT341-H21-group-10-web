<style scoped>
#item-background {
  background-color: rgb(75, 209, 75);
}
p {
  margin-top: 10px;
  margin-bottom: 0;
}
</style>

<template>
  <div id="item-background">
    <p>
      Name: {{ farmer.name }}<br />
      Email: {{ farmer.email }}
    </p>
    <b-button variant="danger" v-on:click="$emit('del-user', farmer._id)"
      >delete Farmer</b-button
    >
    <b-button @click="showSecondModal">farms owned</b-button>
    <b-button id="show-btn" @click="showModal">add farm</b-button>
    <b-button id="show-btn" @click="showThirdModal">info</b-button>

    <b-modal ref="my-modal-2">
      <p>this belongs to {{farmer.name}}</p>
      <div v-for="garden in gardens" v-bind:key="garden">
        <p>garden name: {{garden.name}}</p>
      </div>
    </b-modal>

    <b-modal ref="my-modal-3">
      <div>
        <p>username: {{users.name}} </p>
        <p>email: {{users.email}}</p>
        <p>id: {{users._id}}</p>
        <p>Id's of gardens owned:</p>
          <p>{{users.gardensOwned}}</p>
      </div>
    </b-modal>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>farmer: {{ farmer.name }}</h3>
        <p>Garden Name</p>
        <b-form-input
          v-model="gardenName"
          placeholder="Garden Name"
        ></b-form-input>
        <p>Garden Size</p>
        <b-form-input
          v-model="gardenSize"
          placeholder="Garden Size"
        ></b-form-input>
        <p>Garden Location</p>
        <b-form-input
          v-model="gardenLocation"
          placeholder="Garden Location"
        ></b-form-input>
      </div>
      <b-button class="mt-3" block @click="postGarden">Post Garden</b-button>
    </b-modal>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'user-item',
  props: ['farmer'],
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    showSecondModal() {
      this.getGarden()
      this.$refs['my-modal-2'].show()
    },
    hideSecondModal() {
      this.$refs['my-modal-2'].hide()
    },
    showThirdModal() {
      this.getOneFarmer()
      this.$refs['my-modal-3'].show()
    },
    hideThirdModal() {
      this.$refs['my-modal-3'].hide()
    },
    getGarden() {
      Api.get(`/farmers/${this.farmer._id}/gardens`).then(response => {
        console.log(response)
        this.gardens = response.data.gardensOwned
      })
    },
    getOneFarmer() {
      Api.get(`/farmers/${this.farmer._id}`).then(response => {
        console.log(response)
        this.users = response.data
      })
    },
    postGarden() {
      console.log(
        this.gardenName,
        this.gardenSize,
        this.gardenLocation,
        'farmerID is: ',
        this.farmer._id
      )
      Api.post(`farmers/${this.farmer._id}/gardens`, {
        name: `${this.gardenName}`,
        size: `${this.gardenSize}`,
        location: `${this.gardenLocation}`
      })
      this.$refs['my-modal'].hide()
    }
  },
  data() {
    return {
      users: [],
      gardens: [],
      gardenName: '',
      gardenSize: '',
      gardenLocation: ''
    }
  }
}
</script>
