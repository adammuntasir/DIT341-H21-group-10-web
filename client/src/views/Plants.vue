<template>
  <div>
<<<<<<< HEAD
    <h3>Plants</h3>
    <crud-table
      endpoint='/plants'
      :columns="['name', 'type', 'color', 'season', 'price', 'Action']"
      :form-fields="{
        name: '',
        type: '',
        color: '',
        season: '',
        price: ''
      }"
    >
      <!-- your form input fields in this slot-->
      <template v-slot:input-fields="{ formdata }">
        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Type:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.type"
            required
            placeholder="Enter type"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Color:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.color"
            required
            placeholder="Enter color"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Season:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.season"
            required
            placeholder="Enter season"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="price:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formdata.price"
            required
            placeholder="Enter price"
          ></b-form-input>
        </b-form-group>
      </template>
    </crud-table>
=======
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
              Back to garden?
              <router-link to="/Gardens">Click here</router-link>
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
>>>>>>> dc19ccd2cfb0838d704393875ae27063d53df6ef
  </div>
</template>

<script>
import CrudTable from '../components/crud-table'

export default {
  components: { CrudTable }
}
</script>

<<<<<<< HEAD
<style scoped></style>
=======
<style>
.myContainer {
  background-color: rgb(169, 216, 194);
  border: solid;
}
</style>
>>>>>>> dc19ccd2cfb0838d704393875ae27063d53df6ef
