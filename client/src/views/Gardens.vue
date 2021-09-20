<template>
    <div>
      <p>All Gardens:</p>
      <div v-for="garden in gardens" v-bind:key="garden._id">
      <p>The {{garden.name}} gardens has size {{garden.size}}</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'gardens',
  data() {
    return {
      gardens: [
        {
          manageBy: [],
          has: [],
          _id: '6143dd141b3c150a287768f0',
          name: 'blidvadersgatan17',
          size: 25000,
          cordintelongitude: 58.877691,
          cordintelatitude: 12.557681,
          __v: 0
        },
        {
          manageBy: [],
          has: [],
          _id: '6148de699716a15e48c9a697',
          name: 'blidvadersgatan17',
          size: 25000,
          cordintelongitude: 58.877691,
          cordintelatitude: 12.557681,
          __v: 0
        },
        {
          manageBy: [],
          has: [],
          _id: '6148e0599716a15e48c9a6ab',
          name: 'marconigatan27',
          size: 50000,
          cordintelongitude: 57.651986,
          cordintelatitude: 11.912743,
          __v: 0
        },
        {
          manageBy: [],
          has: [],
          _id: '6148e0609716a15e48c9a6ad',
          name: 'marconigatan27',
          size: 50000,
          cordintelongitude: 57.651986,
          cordintelatitude: 11.912743,
          __v: 0
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
