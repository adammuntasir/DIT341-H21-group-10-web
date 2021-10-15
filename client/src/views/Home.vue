<template>
  <div>
     <b-jumbotron header="Magic Garden" >
       <img src="../assets/MagicGarden.png" class="Magic" />
      <!-- <b-button class="btn_message" variant="primary" v-on:click="getMessage()"
        >Get Message from Server</b-button -->
      <!-- >
      <p>
        Message from the server:<br />
        {{ message }}
      </p> -->
    <!-- </b-jumbotron> -->
    </b-jumbotron>
    <div>
      <my-footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
// import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style scoped>
.btn_message {
  margin-bottom: 1em;
}
.jumbotron{
  color: rgb(17, 67, 231);
  font:initial;
}
</style>
