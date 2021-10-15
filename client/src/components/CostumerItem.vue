<template>
<div>
   <div class="detail">  name   {{ costumer.name}} </div>
   <div class="detail"> email  {{ costumer.email}} </div>
 <b-button variant = "danger" v-on:click="$emit('del-costumer', costumer._id)">Delete</b-button>
</div>
</template>

<script>
export default {
  name: 'costumer-item',
  props: ['costumer']
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
