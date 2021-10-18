<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>
          Додавання нового боту
        </v-card-title>

          <v-form>
            <v-card-text>
              <v-text-field
                  label="Назва"
                  :rules="[v => !!v || 'Вкажіть назву']"
                  required
                  outlined
              />
              <v-row>
                <v-col sm="6">
                  <v-select
                      outlined
                      label="Акаунт"
                      :items="priceDrivers"
                      @change="getMarkets"
                  />
                </v-col>
                <v-col sm="6">
                  <v-select
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
                      class="my-4"
                      :tick-labels="level"
                      :max="2"
                      ticks="always"
                  />
                </v-col>
              </v-row>
              <v-text-field
                  outlined
                  label="Баланс для торгівлі"
                  prepend-inner-icon="mdi-currency-usd"
              />
            </v-card-text>
            <v-card-text>
              <v-btn color="success">Зберегти</v-btn>
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
      Bot: []
    }
  },
  created() {
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(async user => {
      var priceDrivers = db.collection('users').doc(user.uid).collection('PriceDrivers');
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
        axios.get('http://34.116.142.95/GetPriceMarkets/'+platform).then(response => {
          if(response.data.length > 0) {
            response.data.map(el => {
              this.markets.push({ text: el.ShortName, value: el.DisplayName });
            });
          }
        });
      }
    },

    saveBot() {
      var firestore = firebase.firestore();

      firebase.auth().onAuthStateChanged(async user => {
        if(this.Bot.length == 0) {
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').add({

          });
        }
      });
    }
  }
}
</script>