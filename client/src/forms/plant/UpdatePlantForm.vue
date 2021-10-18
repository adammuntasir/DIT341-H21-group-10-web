<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Update Plant"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="mname"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Type"
          label-for="type-input"
          invalid-feedback="Type is required"
          :state="typeState"
        >
          <b-form-input
            id="type-input"
            v-model="mtype"
            :state="typeState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Color"
          label-for="color-input"
          invalid-feedback="Color is required"
          :state="colorState"
        >
          <b-form-input
            id="color-input"
            v-model="mcolor"
            :state="colorState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Season"
          label-for="season-input"
          invalid-feedback="Season is required"
          :state="seasonState"
        >
          <b-form-input
            id="season-input"
            v-model="mseason"
            :state="seasonState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="price"
          label-for="price-input"
          invalid-feedback="Price is required"
          :state="priceState"
        >
          <b-form-input
            id="price-input"
            v-model="mprice"
            :state="priceState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'update-plant-form',
  props: ['nameState', 'typeState', 'colorState', 'seasonState', 'priceState'],
  data() {
    return {
      mname: '',
      mtype: '',
      mcolor: '',
      mseason: '',
      mprice: 0
    }
  }
}
</script>
<style scoped></style>
