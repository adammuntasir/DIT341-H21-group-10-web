<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link>|
      <router-link to="/gardens/id">Garden id</router-link>|
      <router-link to= "/gardens">Gardens</router-link>|
      <router-link to="/ShoppingList">ShoppingList</router-link> |
      <router-link to="/About">About</router-link>

    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'

export default {
  components: {
    // definig the name of the component
    'my-footer': MyFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
