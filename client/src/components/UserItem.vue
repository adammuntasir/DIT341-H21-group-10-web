<template>
<div>
 <p>Farmer: {{farmer.name}}</p>
 <b-button variant = "danger" v-on:click="$emit('del-user', farmer._id)">delete user</b-button>
</div>
</template>

<script>
export default {
  name: 'costumer-item',
  props: ['farmer']
}
</script>
