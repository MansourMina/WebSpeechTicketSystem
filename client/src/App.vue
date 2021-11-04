<template>
  <v-app>
    <v-app-bar app color="grey darken-3" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Tiket Service</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text class="mr-2">Home</v-btn>
      <v-btn to="/alleSpiele" text class="mr-2">Alle Spiele</v-btn>
      <v-btn to="/vereine" text class="mr-2">Vereine</v-btn>
      <v-btn to="/kontakt" text class="mr-2">Kontakt</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Vue from 'vue';
// import Vuetify from 'vuetify/lib';

// Vue.use(Vuetify);

// export default new Vuetify({
//   theme: { dark: true },
// });
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

