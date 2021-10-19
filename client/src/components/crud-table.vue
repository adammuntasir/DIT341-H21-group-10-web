<template>
  <div>
    <b-button @click="createItem" class="mb-2" variant="success" size="m"
      >Create</b-button
    >
    <b-button @click="deleteAllItems" class="mb-2" variant="danger" size="m"
      >Delete all!</b-button
    >

    <b-table striped hover :items="tableData" :fields="columns">
      <template #cell(action)="data">
        <b-button @click="editItem(data.item)" variant="secondary" size="sm"
          >Edit</b-button
        >
        <b-button @click="patchItem(data.item)" variant="primary" size="sm"
          >Patch</b-button
        >
        <b-button
          @click="deleteItem(data.item)"
          v-b-modal="'edit-modal'"
          variant="danger"
          size="sm"
          >Delete</b-button
        >
      </template>
    </b-table>

    <b-modal v-model="modalShow" :title="formTitle" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>
        <b-button type="submit" size="sm" variant="success">
          Submit
        </b-button>

        <b-button size="sm" variant="danger" @click="close">
          Cancel
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  props: ['endpoint', 'columns', 'formFields'],
  data() {
    return {
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      indexOfItem: 0,
      tableData: []
    }
  },
  computed: {
    formTitle() {
      let com = ''
      switch (this.editedIndex) {
        case -1:
          com = 'New item'
          break
        case 0:
          com = 'Edit item'
          break
        case 1:
          com = 'Patch item'
      }
      return com
    }
  },

  methods: {
    createItem() {
      this.modalShow = true
      this.editedItem = Object.assign({}, this.formFields)
      this.editedIndex = -1
    },
    editItem(item) {
      this.modalShow = true
      this.editedIndex = 0
      this.indexOfItem = this.tableData.indexOf(item)

      this.editedItem = Object.assign({}, item)
    },
    patchItem(item) {
      this.modalShow = true
      this.editedIndex = 1
      this.indexOfItem = this.tableData.indexOf(item)

      this.editedItem = Object.assign({}, item)
    },

    deleteItem(item) {
      const index = this.tableData.indexOf(item)
      this.tableData.splice(index, 1)
      Api.delete(this.endpoint + '/' + item._id)
    },
    deleteAllItems() {
      Api.delete(this.endpoint + '/')
      this.tableData = []
    },
    close() {
      this.modalShow = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields)
        this.editedIndex = -1
      }, 300)
    },
    save() {
      if (this.editedIndex === 0) {
        // edit
        Object.assign(this.tableData[this.indexOfItem], this.editedItem)
        Api.put(this.endpoint + '/' + this.editedItem._id, this.editedItem)
      } else if (this.editedIndex === -1) {
        // new
        Api.post(this.endpoint, this.editedItem).then(result => {
          console.log('result', result.data)
          this.tableData.push(result.data)
        })
      } else if (this.editedIndex === 1) {
        // patch
        Object.assign(this.tableData[this.indexOfItem], this.editedItem)
        Api.patch(this.endpoint + '/' + this.editedItem._id, this.editedItem)
      }
      this.close()
    }
  },
  mounted() {
    Api(this.endpoint).then(response => {
      console.log('mounted', response.data)
      this.tableData = response.data.data
    })
  }
}
</script>
