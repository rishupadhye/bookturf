<template>
  <v-app class="grey lighten-3">
    <NavBar />
    <Jumbotron />
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Jumbotron from '@/components/Jumbotron'
export default {
  name: 'App',
  components: { NavBar, Jumbotron, Footer },
  data () {
    return {
      //
    }
  }
}
</script>
