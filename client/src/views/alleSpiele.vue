<template>
  <v-container class="d-flex flex-wrap mx-auto align-center">
    <h1 class="my-7">Aktuelle Spiele</h1>
    <div class="talk buttonContainer">
      <v-btn
        @click="
          startRecognition();
          stop = true;
        "
        class="ma-5"
        icon
        ><v-icon large>mdi-volume-high</v-icon></v-btn
      >
      <v-btn @click="stopText()" class="ma-5" icon>
        <v-icon color="red" large>mdi-stop-circle</v-icon></v-btn
      >
    </div>
    <v-card
      color="grey darken-2"
      class="mt-7 align-center"
      width="1100px"
      v-for="g of games"
      :key="g.id"
    >
      <v-row class="ma-13 justify-center">
        <v-col cols="8">
          <v-row>
            <v-col cols="4" class="d-flex justify-center">
              <v-img
                :src="g.heim_logo"
                max-width="200"
                max-height="500"
              ></v-img>
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
              <div class="d-flex flex-column">
                <v-btn class="ma-2" to="/spiel">Tickets</v-btn>
                <div class="mx-auto">
                  <v-btn @click="readDetail(g)" icon class="ma-2 mx-auto">
                    <v-icon large>mdi-volume-high</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="4" class="d-flex justify-center">
              <v-img
                :src="g.gast_logo"
                max-width="200"
                max-height="300"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      SpeechRecognition:
        window.SpeechRecognition || window.webkitSpeechRecognition,
      recognition: '',
      games: [],
      textGames: [],
      speech: '',
      stop: false,
      showStop: false,
    };
  },
  async created() {
    const { data } = await axios({
      url: 'http://127.0.0.1:3000/games',
      method: 'GET',
    });
    this.games = data;
    this.recognition = new this.SpeechRecognition();

    this.recognition.onstart = function() {
      console.log('Activated');
    };
    if (!this.stop) {
      this.recognition.addEventListener('end', () => this.recognition.start());
    }
    this.recognition.onresult = (e) => {
      const current = e.resultIndex;
      const script = e.results[current][0].transcript;
      console.log(script);
      this.checkMyMessage(script);
    };
  },

  methods: {
    readNummer(zahl) {
      if (zahl == 1) {
        return 'eins';
      }
      return zahl;
    },
    async startRecognition() {
      this.stop = false;
      window.speechSynthesis.cancel();

      this.games.forEach((el, i) => {
        this.readLoud(
          `Spiel ${this.readNummer(i + 1)} ${el.Heim} gegen ${
            el.Gast
          } .....    `,
        ),
          this.textGames.push(el);
      });

      // this.readLoud(
      //   'Falls Sie alle listen möchten sagen sie ALLE, falls nicht sagen Sie was bestimmtes',
      // );
      this.recognition.start();
    },
    stopText() {
      this.recognition.stop();
      window.speechSynthesis.cancel();
    },
    readDetail(game) {
      this.showStop = true;
      window.speechSynthesis.cancel();

      const detailsGame =
        `Ein ${game.Spiel}  ${game.Heim} gegen  ${game.Gast} ...  am ${game.Datum}... im ${game.Ort}..... Der Preis pro Person beträgt ${game.Preis} € ... Für dieses Spiel gibt es` +
        (game.VIP ? '..einen W EI PI-Zutritt' : '..keinen W EI PI-Zutritt');

      this.readLoud(detailsGame);
    },

    checkMyMessage(message) {
      console.log(message);
      const finalMessage = message.toLowerCase();
      // const speech = new SpeechSynthesisUtterance();

      // speech.text = 'Bitte wiederholen Sie es';
      // console.log(finalMessage);

      if (finalMessage.includes('stop')) {
        this.readLoud('okay');

        window.speechSynthesis.cancel();
      }
      // else if (finalMessage.includes('alle')) {
      //   this.games.forEach((el) => this.readLoud(el.Spiel));
      // }
    },
    readLoud(text) {
      this.speech = new SpeechSynthesisUtterance();
      this.speech.text = text;
      this.speech.volume = 1.5;
      this.speech.rate = 1.2;
      this.speech.pitch = 1.5;

      window.speechSynthesis.speak(this.speech);
    },
  },
};
</script>

<style scoped></style>
