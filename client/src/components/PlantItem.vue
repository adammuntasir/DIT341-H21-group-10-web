<template>
  <div>
    <b-card
      :title="name"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        <b-list-group id="list-group">
      <b-list-group-item>
        Type: &emsp;{{type}}
      </b-list-group-item>
      <b-list-group-item>
        Color: &emsp;{{color}}
      </b-list-group-item>
      <b-list-group-item>
        Season: &emsp; {{season}}
      </b-list-group-item>
      <b-list-group-item>
        price: &emsp;{{price}}
      </b-list-group-item>
    </b-list-group>
      </b-card-text>

      <b-button variant="danger" v-on:click="$emit('del-plant', plant._id)">Delete</b-button>
      <b-button variant="success" v-b-modal.modal-prevent-closing >Update</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'plant-item',
  props: ['plant', 'name', 'type', 'color', 'season', 'price']
}
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .detail {
    display: none;
  }
}
@media screen and (min-width: 600px) {
  .more-info {
    color: rgb(0, 255, 64);
  }
}
#list-group {
  text-align: left;

}
</style>
