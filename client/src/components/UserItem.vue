<template>
  <div>
    <p>
      Name: {{ farmer.name }}<br />
    </p>
    <b-button variant="danger" v-on:click="$emit('del-user', farmer._id)"
      >delete Farmer</b-button
    >
    <b-button v-on:click="$emit()"
      >visit page</b-button>
  </div>
</template>

<script>
export default {
  name: 'user-item',
  props: ['farmer']
}
</script>
