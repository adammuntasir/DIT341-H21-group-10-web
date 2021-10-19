<template>
  <div id="app">
    <!-- <my-header /> -->
    <my-top />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/costumers">Costumers</router-link>|
      <router-link to="/gardens/id">Garden id</router-link>|
      <router-link to= "/gardens">Gardens</router-link>|
      <router-link to="/Plants">Plants</router-link>|
      <router-link to="/About">About</router-link>|
      <router-link to="/sign-up">SignUp</router-link>

    </div> -->
    <!-- Render the content of the current page view -->
    <router-view />
    <my-footer />
  </div>
</template>

<script>
/* import Header from '@/components/Header.vue' */
import MyFooter from '@/components/MyFooter.vue'
import MyTop from '@/components/MyTop.vue'

export default {
  components: {
    // definig the name of the component
    'my-footer': MyFooter,
    /* 'my-header': Header, */
    'my-top': MyTop
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
