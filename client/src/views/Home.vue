<template>
  <div>
    <v-app>
      <v-container class="d-flex flex-wrap mx-auto align-center">
        <h1 class="my-7">Nächstes Spiel:</h1>
        <v-card color="grey darken-3" class="mt-7 align-center elevation-3" width="1100px">
          <v-row class="ma-13 justify-center">
            <div class="topinfo">
              <v-card class="white"
                ><v-card-text class="black--text font-weight-bold"
                  ><h2>Runde 12 / 31.10.2021 / 17:00</h2></v-card-text
                ></v-card
              >
            </div>
            <div class="bottominfo">
              <v-card class="white px-10"
                ><v-card-text class="black--text font-weight-bold"
                  ><h2>Allianz Stadion</h2></v-card-text
                ></v-card
              >
            </div>
            <v-col>
              <v-row>
                <v-col cols="12" md="5" class="d-flex justify-center">
                  <v-img src="images/Austria_Wien.png" max-width="180" max-height="500"></v-img>
                </v-col>
                <v-col cols="12" md="2" class="d-flex justify-center align-center">
                  <v-btn class="white black--text" x-large>Tickets</v-btn>
                </v-col>
                <v-col sm="12" md="5" class="d-flex justify-center">
                  <v-img src="images/Rapid_Wien.png" max-width="180" max-height="300"></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style scoped>
.topinfo {
  position: absolute;
  top: -0.5rem;
  text-align: center;
  padding: 2px 4px;
}

.bottominfo {
  position: absolute;
  bottom: -0.5rem;
  text-align: center;
  padding: 2px 4px;
}
</style>
