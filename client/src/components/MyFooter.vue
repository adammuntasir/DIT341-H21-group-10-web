<template>
  <b-container>
    <b-row class="mt-4 mb-2">
      <b-col>
        <router-link to="/">
          <img src="../assets/MagicGardenLogo.png" class="logo" />
        </router-link>
      </b-col>
      <!-- <b-col>
        <b-button variant="outline-success" @click="toTop" size="m">
          Go to top <b-icon-arrow-up-circle />
        </b-button>
      </b-col> -->
    </b-row>
    <b-row class="mb-3">
      <!-- <b-col>
        <router-link to="/about" class="mr-4">
          About
        </router-link>
        <router-link to="/contact" class="mr-4">
          Contact
        </router-link>
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'my-footer'
}
</script>

<style scoped>
h1 {
  color: #00ff4c;
}
</style>
