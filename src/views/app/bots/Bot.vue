<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>
          Додавання нового боту
        </v-card-title>

          <v-form
              ref="BotForm"
              lazy-validation
          >
            <v-card-text>
              <v-text-field
                  v-model="Bot.Name"
                  label="Назва"
                  :rules="[v => !!v || 'Вкажіть назву']"
                  required
                  outlined
              />
              <v-row>
                <v-col sm="6">
                  <v-select
                      v-model="Bot.PriceDriver"
                      outlined
                      label="Акаунт"
                      :items="priceDrivers"
                      @change="getMarkets"
                  />
                </v-col>
                <v-col sm="6">
                  <v-select
                      v-model="Bot.Market"
                      outlined
                      label="Маркет"
                      no-data-text="Спершу оберіть акаунт"
                      :items="markets"
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-subheader>Нашалтування торгів</v-subheader>
            <v-card-text>
              <v-row>
                <v-col md="6">
                  <v-slider
                      v-model="Bot.Level"
                      class="my-4"
                      :tick-labels="level"
                      :max="2"
                      ticks="always"
                  />
                </v-col>
              </v-row>
              <v-text-field
                  v-model="Bot.Ballance"
                  outlined
                  label="Баланс для торгівлі"
                  prepend-inner-icon="mdi-currency-usd"
                  :rules="[v => !!v || 'Це поле обовьязкове!']"
              />
            </v-card-text>
            <v-card-text>
              <v-btn color="success" @click="saveBot">Зберегти</v-btn>
              <v-btn color="primary" disabled class="ml-3">Запустити</v-btn>
            </v-card-text>
          </v-form>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import firebase from "firebase";

export default {
  data() {
    return {
      level: [ "Низький ризик", "Середній ризик", "Високий ризик" ],
      priceDrivers: [],
      markets: [],
      Bot: {},
      id: null
    }
  },
  created() {
    var firestore = firebase.firestore();
    firebase.auth().onAuthStateChanged(async user => {
      // Price Drivers {
      var priceDrivers = firestore.collection('users').doc(user.uid).collection('PriceDrivers');
      priceDrivers.onSnapshot(snapshot => {
        this.priceDrivers = [];
        snapshot.forEach(doc => {
          this.priceDrivers.push({
            text: doc.data()['AccountName'],
            value: doc.id,
            type: doc.data()['AccountType'],
            platform: doc.data()['AccountPlatform']
          });
        });
      });
      // } Price Drivers

      // Bot {
      if(this.$route.params.id) {
        var Bot = firestore.collection('users').doc(user.uid).collection('Bots').doc(this.$route.params.id);

        if(await Bot.get()) {
          console.log('yes');
          // console.log(await Bot.get().data());
        }
      }
      // } Bot
    });
    // axios.get('http://34.116.142.95/GetPriceMarkets').then(response => {
    //   console.log(response);
    // });
  },
  methods: {
    getMarkets(e) {
      var priceDriver = this.priceDrivers.find(obj => {
        return obj.value === e
      });

      var platform = '';
      // Binance
      if(priceDriver.platform === 'Binance') {
        if(priceDriver.type === 'Leverage Trading') {
          platform = 'BinanceFutures'
        }
      }

      if(platform.length > 0) {
        axios.get('https://sota-api.gq/GetPriceMarkets/'+platform).then(response => {
          if(response.data.length > 0) {
            response.data.map(el => {
              this.markets.push({ text: el.ShortName, value: el.DisplayName });
            });
          }
        });
      }
    },

    saveBot() {
      if(!this.$refs.BotForm.validate()) return false;

      var firestore = firebase.firestore();

      firebase.auth().onAuthStateChanged(async user => {
        if(this.id === null) {
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').add({
            Name: this.Bot.Name,
            PriceDriver: this.Bot.PriceDriver,
            Market: this.Bot.Market,
            Level: this.Bot.Level,
            Ballance: this.Bot.Ballance
          });

          if(Bot) {
            this.$router.push('/bots/bot/' + Bot.id);
          }
        }
      });
    }
  }
}
</script>