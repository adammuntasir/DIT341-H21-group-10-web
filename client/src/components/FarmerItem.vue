<template>
<div>
 <p>Farmer: {{farmer.name}}</p>
 <b-button variant = "danger" v-on:click="$emit('del-farmer', farmer._id)">delete farmer</b-button>
</div>
</template>

<script>
export default {
  name: 'far-item',
  props: ['farmer']
}
</script>
