<template>
  <v-app>
    <div class="talk buttonContainer">
      <h1>Hi, want to talk?</h1>
      <v-btn @click="startRecognition()">Click me</v-btn>
    </div>

    <div style="position: absolute; top: -9999px; left: -9999px">
      <p class="text"></p>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      SpeechRecognition:
        window.SpeechRecognition || window.webkitSpeechRecognition,
      recognition: '',
    };
  },
  created() {
    this.recognition = new this.SpeechRecognition();

    this.recognition.onstart = function() {
      console.log('Activated');
    };

    this.recognition.onresult = function(e) {
      const current = e.resultIndex;
      const script = e.results[current][0].transcript;
      this.readLoud(script);
    };
  },
  methods: {
    async startRecognition() {
      const speech = new SpeechSynthesisUtterance();
      speech.text = 'Hallo, ich bin der Sprach assistent';
      await window.speechSynthesis.speak(speech);

      // this.recognition.start();
      await axios({
        url: 'http://'
      })
    },

    readLoud(message) {
      const finalMessage = message.toLowerCase();
      const speech = new SpeechSynthesisUtterance();

      speech.text = 'Bitte wiederholen Sie es';
      console.log(finalMessage);

      if (finalMessage.includes('stop')) {
        speech.text = 'okay';
        speech.cancel();
      }

      speech.volume = 1.5;
      speech.rate = 1.2;
      speech.pitch = 2;
      window.speechSynthesis.speak(speech);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: 'Arial';
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.buttonContainer {
  margin-top: 100px;
  text-align: center;
}

h1 {
  color: rgba(69, 69, 69, 1);
  line-height: 2em;
}
</style>
