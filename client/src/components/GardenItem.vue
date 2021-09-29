<template>
<div>
  <b-button variant="danger" v-on:click="$emit('del-garden', garden._id)">Delete</b-button>
   <div>The {{ garden.name}} garden </div>
   <div class="detail"> is at latitude {{ garden.cordintelatitude}} and at logitude
        {{ garden.cordintelongitude}} </div>
</div>
</template>

<script>
export default {
  name: 'garden-item',
  props: ['garden']
}
</script>
