<template>
    <nav>
      <v-toolbar flat  class="blue darken-1">
        <v-toolbar-side-icon class="white--text" @click="drawer=!drawer"></v-toolbar-side-icon>
        <router-link to="/" tag="button">
          <v-toolbar-title class="white--text">
                <span>BOX-PARK</span>
          </v-toolbar-title>
        </router-link>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" class="black lighten-3">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text"  router :to="link.route">
                    <v-list-tile-action>
                        <v-icon color="white">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey--text darken-4">{{ link.text }} </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>

</template>

<script>
  export default {
    components:{},
    data(){
      return{
        drawer:false,
        links: [  {icon:'person_add', text:'Book a slot', route:'/bookingform'},
                  {icon:'pageview', text:'View Bookings', route:'/displaybooking'},
              ]
      }
    }
  }
</script>

<style>

</style>
