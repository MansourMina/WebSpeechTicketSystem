<template>
    <v-container class="d-flex flex-wrap mx-auto align-center">
        <h1 class="my-7">Aktuelle Spiele</h1>
        <v-card color="grey darken-2" class="mt-7 align-center" width="1100px">
          <v-row class="ma-13 justify-center" >
            <v-col cols="8">
              <v-row>
                <v-col cols="4" class="d-flex justify-center" >
                  <v-img src="images/Austria_Wien.png" max-width="180" max-height="500"></v-img>
                </v-col>
                <v-col cols="4"  class="d-flex justify-center align-center" >
                  <v-btn>Tickets</v-btn>
                </v-col>
                <v-col cols="4" class="d-flex justify-center">
                  <v-img src="images/Rapid_Wien.png" max-width="180" max-height="300"></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
</template>

<script>
    export default {
        
    }
</script>


<style scoped>

</style>