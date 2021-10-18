<style scoped>
  #item-background{
    background-color: rgb(75, 209, 75)
  }
</style>

<template>
  <div id="item-background">
    <p>
      Name: {{ farmer.name }}<br />
      Email: {{farmer.email}}
    </p>
    <b-button variant="danger" v-on:click="$emit('del-user', farmer._id)"
      >delete Farmer</b-button
    >
    <b-button v-on:click="$emit()"
      >add garden</b-button>
  </div>
</template>

<script>
export default {
  name: 'user-item',
  props: ['farmer']
}
</script>
