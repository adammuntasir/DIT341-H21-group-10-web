<template>
<div>
   <p>The {{ garden.name}} garden is at latitude {{ garden.cordintelatitude}} and at logitude
        {{ garden.cordintelongitude}}</p>
        <b-button variant="danger" v-on:click="$emit('del-garden', garden._id)">Delete</b-button>
</div>
</template>

<script>
export default {
  name: 'garden-item',
  props: ['garden']
}
</script>
