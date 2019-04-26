<template>
<div>
    <v-jumbotron>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <h3 class="display-3">BOOK OUR TURF</h3>

                    <v-divider class="my-3"></v-divider>
                    <v-layout align-start justify-space-between row fill-height>
                        <v-flex>
                            <h5>Check Availability </h5>
                        </v-flex>
                        <v-flex>
                            <h5>Select Slot</h5>
                        </v-flex>
                        <v-flex>
                            <h5>Booking Done</h5>
                        </v-flex>
                    </v-layout>

                    <v-layout justify-start row>
                        <v-flex class="my-3">
                            <v-btn color="primary">Check Slots</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            
        </v-container>
    </v-jumbotron>
    <v-container>
    <BookingForm />
    </v-container>
</div>
</template>

<script>
import BookingForm from '@/components/BookingForm'
export default {
    name:'Jumbotron',
    components:{BookingForm},
    data(){
        return{

        }
    }
}
</script>
