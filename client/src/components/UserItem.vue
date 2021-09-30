<template>
<div>
 <p>user: {{user.name}} is of type {{user.userType}}</p>
 <b-button variant = "danger" v-on:click="$emit('del-user', user._id)"></b-button>
</div>
</template>

<script>
export default {
  name: 'user-item',
  props: ['user']
}
</script>
