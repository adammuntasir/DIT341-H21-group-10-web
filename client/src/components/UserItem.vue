<template>
 <p>user: {{user.name}} is of type {{user.userType}}</p>
</template>

<script>
export default {
  name: 'user-item',
  props: ['user']
}
</script>
