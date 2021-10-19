<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Magic Garden</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item router-link to="/">Home</b-nav-item>
          <b-nav-item router-link to="/gardens">Gardens</b-nav-item>
          <b-nav-item router-link to="/plants">Plants</b-nav-item>
          <b-nav-item router-link to="/costumers">Costumers</b-nav-item>
          <b-nav-item router-link to="/farmers">Farmers</b-nav-item>
          <b-nav-item router-link to="/sign-in">Sign In</b-nav-item> -->
          <router-link to="/" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link"
              >Home</span
            >
          </router-link>
          <router-link to="/gardens" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link"
              >Gardens</span
            >
          </router-link>
          <router-link to="/plants" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link"
              >Plants</span
            >
          </router-link>
          <router-link to="/costumers" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link"
              >Costumers</span
            >
          </router-link>
          <router-link to="/farmers" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link"
              >Farmers</span
            >
          </router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'my-top'
}
</script>
<style scoped>
.nav-collapse {
  color: rgb(219, 28, 194);
}
</style>
