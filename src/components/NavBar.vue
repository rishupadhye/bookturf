<template>
    <nav>
      <v-toolbar flat color="elevation-0" class="teal lighten-2">
        <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
            <span>BOX-PARK</span>
        </v-toolbar-title>
      </v-toolbar>
    </nav>
</template>

<script>
  export default {
    components:{},
    data(){
      return{
        drawer:flase
      }
    }
  }
</script>

<style>

</style>
