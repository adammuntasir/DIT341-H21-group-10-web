<template>
<div>
 <p>costumer: {{costumer.name}} is of type {{costumer.costumerType}}</p>
 <b-button variant = "danger" v-on:click="$emit('del-costumer', costumer._id)"></b-button>
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
