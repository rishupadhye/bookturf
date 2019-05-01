<template>
    <div>
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <template>
  
    <v-toolbar flat color="white">
      <v-toolbar-title>Bookings</v-toolbar-title>
      <v-divider
        class="mx-2"    
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
        <router-link to="/BookingForm">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Booking</v-btn>
        </router-link>
        
    </v-toolbar>
    <v-data-table
        class="elevation-1"
        :headers="headers"
        :items="bookings"
    >
      <template  v-slot:items="props"  >
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.contact_number }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right"> </td>
        <td class="text-xs-right"> </td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
</template>
 </v-parallax>
 </div>
</template>

<script>
import db from '@/firebase'

export default {
    data: () => ({
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
         
        },
        { text: 'Contact Number', sortable:false},
        { text: 'Date',  },
        { text: ' ',sortable:false },
        { text: ' ',sortable:false },
        { text: ' ', sortable: false }
      ],
      bookings: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    created(){
    db.collection('bookings').get().then(
      querySnapshot=>{querySnapshot.forEach(doc => {
        const data = {
          'name':doc.data().name,
          'contact_number':doc.data().contact,
          'date':doc.data().date

        }
        this.bookings.push(data)
      })})
  },

    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
}
</script>
