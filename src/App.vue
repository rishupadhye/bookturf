<template>
  <v-app class="grey lighten-3">
    <NavBar />
      <router-view>
        
      </router-view>
   
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { NavBar, Footer },
  data () {
    return {
      //
    }
  }
}
</script>
