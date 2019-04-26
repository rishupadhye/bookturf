<template>
<div>
    <v-layout>
        <form>
            <!-- NAME  -->
            <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required>
            </v-text-field>


            <!-- CONTACT NUMBER  -->
            <v-text-field 
            v-model="contact_number"
            v-validate="'required|max:10'"
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
                    label="Start time"
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
            <v-flex xs12>
            <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                lazy
                full-width
                width="290px"
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
                v-if="modal2"
                v-model="time"
                full-width
                >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                </v-time-picker>
            </v-dialog>
            </v-flex>
            <v-spacer></v-spacer>

            <!-- SUBMIT BUTTON -->
            <v-layout>
                <v-flex>
                    <v-btn color="primary">SUBMIT</v-btn>
                </v-flex>
            </v-layout>
        </v-layout>
        </form>
    </v-layout>
</div>

</template>

<script>
export default {
    name:'bookingform',
    data: () => ({
        arrayEvents: null,
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        time: null,
        menu2: false,
        modal2: false
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
      }
    }
}
</script>
