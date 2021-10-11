<template>
<div>
 <p>costumer: {{costumer.name}} is of type {{costumer.userType}}</p>
 <b-button variant = "danger" v-on:click="$emit('del-user', costumer._id)"></b-button>
</div>
</template>

<script>
export default {
  name: 'costumer-item',
  props: ['user']
}
</script>
