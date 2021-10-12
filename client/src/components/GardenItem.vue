<template>
<div>
   <div class="detail">  located   {{ garden.location}} </div>
   <div class="detail">  size  {{ garden.size}} </div>
   <b-button variant="danger" v-on:click="$emit('del-garden', garden._id)">Delete</b-button>

</div>
</template>

<script>
export default {
  name: 'garden-item',
  props: ['garden']
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
    color:purple;
  }
}
</style>
