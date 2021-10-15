<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Magic Garden</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/">Home</b-nav-item>
          <b-nav-item router-link to="/gardens">Gardens</b-nav-item>
          <b-nav-item router-link to="/plants">Plants</b-nav-item>
          <b-nav-item router-link to="/costumers">Costumers</b-nav-item>
          <b-nav-item router-link to="/farmer">Farmer</b-nav-item>
          <b-nav-item router-link to="/sign-in">Sign In</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style scoped>
.nav-collapse{
    color: rgb(219, 28, 194);
}
</style>
