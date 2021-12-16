<template>
  <v-container>
    <v-container class="d-flex justify-center">
      <h1>{{ spiel.Heim }} : {{ spiel.Gast }}</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img src="images/Ernst_happel_stadion_sitzplan.jpg"> </v-img>
        </v-col>
        <v-col cols="6">
          <v-stepper v-model="e1" vertical>
            <v-stepper-step :complete="e1 > 1" step="1">
              Sektor wählen
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-container>
                <v-radio-group v-model="sektor">
                  <v-radio
                    v-for="s in stadion.sektoren"
                    :key="s.name"
                    :label="`Sektor ${s.name}`"
                    :value="s.name"
                  ></v-radio>
                </v-radio-group>
              </v-container>

              <v-btn :disabled="sektor == ''" color="primary" @click="e1 = 2">
                Next
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e1 > 2" step="2">
              Rang wählen
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-container>
                <v-radio-group v-model="rang">
                  <v-radio
                    v-for="r in rangofsektor"
                    :key="r.name"
                    :label="`Rang ${r.name}`"
                    :value="r.name"
                  ></v-radio>
                </v-radio-group>
              </v-container>

              <v-btn :disabled="rang == ''" color="primary" @click="e1 = 3">
                Next
              </v-btn>

              <v-btn text @click="e1 = 1">
                Back
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e1 > 3" step="3">
              Bereich wählen
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-container>
                <v-radio-group v-model="bereich">
                  <v-radio
                    v-for="b in bereichofrang"
                    :key="b"
                    :label="`Bereich ${b}`"
                    :value="b"
                  ></v-radio>
                </v-radio-group>
              </v-container>

              <v-btn :disabled="bereich == ''" color="primary" @click="e1 = 4">
                Next
              </v-btn>

              <v-btn text @click="e1 = 2">
                Back
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e1 > 4" step="4">
              Reservierung abschließen
            </v-stepper-step>

            <v-stepper-content step="4">
              <v-form v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="First name"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="10"
                        label="Last name"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>

                <v-btn v-if="sektor != ''" color="primary" @click="e1 = 2">
                  Next
                </v-btn>
              </v-form>
            </v-stepper-content>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      sektor: '',
      rang: '',
      bereich: '',
      spiel: {
        id: 1,
        Heim: 'Österreich',
        Gast: 'Polen',
        Spiel: 'Polen - Österreich',
        Liga: 'Länderspiel',
        Spieler: 'Spieler1, Spieler2, Spieler3, Spieler4, ...',
        VIP: false,
        Preis: 240,
        Datum: '21.01.2022',
        Ort: 'Ernst-Happel-Stadion',
      },
      stadion: {
        name: 'Ernst-Happel-Stadion',
        sektoren: [
          {
            name: 'A',
            ränge: [
              {
                name: 1,
                bereiche: ['E', 'F', 'G', 'H'],
              },
              {
                name: 2,
                bereiche: ['E', 'F', 'G', 'H'],
              },
              {
                name: 3,
                bereiche: ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
              },
            ],
          },
          {
            name: 'B',
            ränge: [
              {
                name: 1,
                bereiche: ['A', 'B', 'C', 'D', 'E'],
              },
              {
                name: 2,
                bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
              },
              {
                name: 3,
                bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
              },
            ],
          },
          {
            name: 'C',
            ränge: [
              {
                name: 1,
                bereiche: ['A', 'B', 'C', 'D'],
              },
              {
                name: 2,
                bereiche: ['A', 'B', 'C', 'D'],
              },
              {
                name: 3,
                bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              },
            ],
          },
          {
            name: 'D',
            ränge: [
              {
                name: 1,
                bereiche: ['D', 'E', 'F', 'G', 'H'],
              },
              {
                name: 2,
                bereiche: ['E', 'F', 'G', 'H'],
              },
              {
                name: 3,
                bereiche: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
              },
            ],
          },
          {
            name: 'E',
            ränge: [
              {
                name: 1,
                bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
              },
              {
                name: 2,
                bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
              },
              {
                name: 3,
                bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
              },
            ],
          },
          {
            name: 'F',
            ränge: [
              {
                name: 1,
                bereiche: ['A', 'B', 'C', 'D', 'E'],
              },
              {
                name: 2,
                bereiche: ['A', 'B', 'C', 'D'],
              },
              {
                name: 3,
                bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
              },
            ],
          },
        ],
      },
    };
  },
  computed: {
    rangofsektor() {
      if (this.sektor != '') {
        return this.stadion.sektoren.find((el) => el.name == this.sektor).ränge;
      } else return '';
    },
    bereichofrang() {
      if (this.rang != '') {
        return this.stadion.sektoren.find((el) => el.name == this.sektor).ränge[this.rang - 1]
          .bereiche;
      } else return '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
