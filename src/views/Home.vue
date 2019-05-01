<template>
    <div>
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-container>
            <Jumbotron />
        </v-container>
        </v-parallax>
    </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
export default {
    name:'home',
    components:{Jumbotron}
}
</script>
