<template>
<div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">    
        <v-container>
            <v-card style="height:410px; width:535px; margin:auto;">
            <v-layout >
                <form class="white--text">
                   
                    <!-- NAME  -->
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Name"
                    light
                    required>
                    </v-text-field>


                    <!-- CONTACT NUMBER  -->
                    <v-text-field 
                    v-model="contact_number"
                    :counter="10"
                    label="Contact Number"
                    required> 
                    </v-text-field>
                    
                    
                    <!-- BOOKING FOR -->
                    


                    <!-- DATE PICKER -->
                    <v-layout justify-start >
                        <v-flex xs12 sm6 md4>
                            <v-menu
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="date"
                                    label="Select Date"
                                    prepend-icon="event"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-flex>
                    </v-layout>

                    <!-- TIME PICKER  -->
                    <v-layout row  wrap>
                    <v-flex xs12>
                    <v-menu
                        ref="menu"
                        v-model="menu1"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="time"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="time"
                            label="Start time"
                            prepend-icon="access_time"
                            readonly
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-time-picker
                        v-if="menu1"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                        ></v-time-picker>
                    </v-menu>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex xs12>
                    <v-menu
                        ref="menu"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="time"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="time"
                            label="End time"
                            prepend-icon="access_time"
                            readonly
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-time-picker
                        v-if="menu2"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                        ></v-time-picker>
                    </v-menu>
                    </v-flex>
                    <v-spacer></v-spacer>

                    <!-- SUBMIT BUTTON -->
                    <v-layout>
                        <v-flex>
                            <v-btn color="primary" @click="addentry">SUBMIT</v-btn>
                        </v-flex>
                    </v-layout>
                </v-layout>
                </form>             
            </v-layout>
         </v-card>
        </v-container>
    </v-parallax>
    <v-snackbar v-model="snackbar" top timeout="4000" color="success">
            <span>Entry Added</span>
            <v-btn flat color="white" @click="snackbar=false">close</v-btn>
    </v-snackbar>
</div>

</template>

<script>
import db from '@/firebase'
export default {
    name:'bookingform',
    data: () => ({
        arrayEvents: null,
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        time: null,
        menu1: false,
        menu2: false,
        name: null,
        contact_number: null,
        snackbar:false
    }),

    mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },

    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
      addentry(){
          db
          .collection('bookings')
          .add({
              name: this.name,
              contact: this.contact_number,
              date: this.date
          })
        this.snackbar=true
      }
 
    }
}
</script>
