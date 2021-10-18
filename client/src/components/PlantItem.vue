<template>
  <div>
    <b-button variant="danger" v-on:click="$emit('del-plant', plant._id)"
      >Delete</b-button
    >
    <div calss="name">{{ plant.name }}</div>
    <div class="detail">price {{ plant.price }}</div>
    <div class="more-info">Plant summary</div>
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
