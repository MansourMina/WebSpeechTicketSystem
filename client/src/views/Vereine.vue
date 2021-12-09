<template>
    <v-container class="d-flex flex-wrap justify-center">
    <v-card v-for="verein in vereine" :key="verein.id" class="ma-3" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="verein.img"
      >
       
      </v-img>
 <v-card-title>{{verein.name}}</v-card-title>
      

      <v-card-actions><v-btn dark>
              Spiele
            </v-btn></v-card-actions>
            
    </v-card>
    
  </v-container>
</template>

<script>
import axios from "axios"
    export default {
        data() {
            return {
                vereine: []
            }
        },
        methods: {
            async getVereine() {
                const d=await axios({method:"GET",url:"http://localhost:3000/vereine"});
                this.vereine=d.data
            }
        },
        created () {
            this.getVereine();
        },
    }
</script>

<style lang="scss" scoped>

</style>