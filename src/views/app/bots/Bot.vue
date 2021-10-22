<template>
  <v-row no-gutters>
    <v-col lg="5" sm="12" order="1" order-lg="0">
      <base-card>
        <v-card-title v-if="id == null">
          Додавання нового боту
        </v-card-title>
        <v-card-title v-else>
          Бот - {{ Bot.Name }}
          <v-chip
              v-if="Bot.Status === 'active'"
              class="ml-4"
              color="success"
              label
              small
              text-color="white"
          >
            <v-icon small left >mdi-check</v-icon>
            Активний
          </v-chip>
          <v-chip
              v-if="Bot.Status === 'paused'"
              class="ml-4"
              color="warning"
              label
              small
              text-color="white"
          >
            <v-icon class="mr-2" size="15">mdi-pause</v-icon>
            Зупинений
          </v-chip>
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
                <v-col md="12">
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
                  suffix="USDT"
                  :rules="[v => !!v || 'Це поле обовьязкове!']"
                  :hint="BallanceHint"
                  persistent-hint
              />
            </v-card-text>
            <v-card-text>
              <v-btn color="success" @click="saveBot">Зберегти</v-btn>
              <v-btn v-if="Bot.Status === 'paused'" color="primary" class="ml-3">Запустити</v-btn>
              <v-btn v-if="Bot.Status === 'active'" color="primary" class="ml-3">Зупинити</v-btn>
            </v-card-text>
          </v-form>
      </base-card>
    </v-col>
    <v-col lg="7" md="12" ref="graphCol" @resize="onResize">
      <Graph :colWidth="graphCol"></Graph>
    </v-col>
    <v-col cols="12" v-if="id != null" order="3">
      <base-card class="mt-4">
        <v-card-title>
          Ордери
        </v-card-title>

        <v-card-text>
          <v-data-table
              no-data-text="Немає жодного одреру"
          />
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>

</template>

<script>
import axios from "axios";
import firebase from "firebase";
import "firebase/database";
import Graph from "@/components/Graph";
import Binance from 'binance-api-node';

const client = Binance();
var firestore = firebase.firestore();
var database = firebase.database();

// Authenticated client, can make signed calls
// const client2 = Binance({
//   apiKey: 'cIOx48OYVU8ixZ6C7ZmXhxMDOdAcTOnO49Qk9drn3QfppGttCf00VR3Z2Mj4kNGR',
//   apiSecret: 'rJZ80K7NEyGRrhZHgqR5IwNZBBFd54ihQZKdmX4gYDy14lIB2NgTI03iMMXCtxTa',
//   // getTime: xxx,
// })

export default {
  components: {Graph},
  data() {
    return {
      level: [ "Низький ризик", "Середній ризик", "Високий ризик" ],
      priceDrivers: [],
      markets: [],
      Markets: null,
      Bot: {},
      id: null,
      graphCol: 333,
      BallanceHint: 'Спершу оберіть біржу'
    }
  },
  async created() {
    window.addEventListener('resize', this.onResize);
    setTimeout(() => {
      this.onResize();
    }, 100);

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

      // Bot (Single page) {
      if(this.$route.params.id) {
        var Bot = firestore
            .collection('users')
            .doc(user.uid)
            .collection('Bots')
            .doc(this.$route.params.id);

        if(await Bot.get()) {
          this.id = await Bot.id;
          this.Bot = (await Bot.get()).data();
        }
      }
      // } Bot (Single page)
    });
  },
  methods: {
    onResize(event) {
      console.log(this.$refs.graphCol.clientWidth);
      this.graphCol = this.$refs.graphCol.clientWidth - 30;
    },

    async getMarkets(e) {
      /* Get Markets for v-select { */

      var priceDriver = this.priceDrivers.find(obj => {
        return obj.value === e
      });

      /* Formating platform for API */
      var platform = '';
      // Binance
      if(priceDriver.platform === 'Binance') {
        if(priceDriver.type === 'Leverage Trading') {
          platform = 'BinanceFutures'
        }
      }

      /* Doing ajax to get markets from Haas */
      if(platform.length > 0) {
        axios.get('https://sota-api.gq/GetPriceMarkets/'+platform).then(response => {
          if(response.data.length > 0) {
            response.data.map(el => {
              this.markets.push({
                text: el.ShortName,
                value: el.ShortName,
                PrimaryCurrency: el.PrimaryCurrency,
                SecondaryCurrency: el.SecondaryCurrency,
                MinimumTradeAmount: el.MinimumTradeAmount
              });
            });
          }
        });

        /* Doing request to Binance API */
        this.Markets = await client.futuresPrices();
        this.calculateBallance();
      }
      /* } Get Markets for v-select */
    },

    saveBot() {
      /* Save Bot { */

      if(!this.$refs.BotForm.validate()) return false;

      firebase.auth().onAuthStateChanged(async user => {
        /* First save so create new { */
        if(this.id === null) {
          // Adding to firestore user profile
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').add({
            Name: this.Bot.Name,
            PriceDriver: this.Bot.PriceDriver,
            Market: this.Bot.Market,
            Level: this.Bot.Level,
            Ballance: this.Bot.Ballance,
            Status: "pending"
          });

          // Adding to the tasker
          if(Bot) {
            await database.ref('tasks').push().set({
              task: 'add_bot',
              user: user.uid,
              data: {
                id: Bot.id,
                PriceDriver: this.Bot.PriceDriver,
                Market: this.Bot.Market,
                Level: this.Bot.Level,
                SlotSize: this.Bot.SlotSize,
              }
            });

            // Redirect to new exist bot
            this.$router.push('/bots/bot/' + Bot.id);
          }
        }
        /* } First save so create new  */
        /* Save exist bot { */
        else {
          //
        }
        /* } Save exist bot */
      });
      /* } Save Bot */
    },

    calculateBallance() {
      /* Calculating contracts count to Ballance */

      if(this.Markets) {
        if(this.Bot.Market) {
          if(this.Bot.Ballance) {
            let marketObject = this.markets.find(obj => {
              return obj.value === this.Bot.Market
            });

            // format market symbols
            let marketObj = marketObject.PrimaryCurrency + marketObject.SecondaryCurrency;

            // calculating contract size
            let contractUstd = this.Bot.Ballance / 110;
            let contractSize = (contractUstd / this.Markets[marketObj]).toFixed(3);

            // check if more then minimum trade amount
            if(contractSize >= marketObject.MinimumTradeAmount) {
              this.BallanceHint = "Розмір ордеру " + contractSize;
              this.Bot.SlotSize = contractSize;
            }
            else {
              console.log(marketObject.MinimumTradeAmount);
              this.BallanceHint = "Замалий баланс для торгівлі";
            }
          }
          else {
            this.BallanceHint = "Вкажіть суму в рамках якої буде працювати бот";
          }
        }
        else {
          this.BallanceHint = "Тепер оберіть маркет";
        }
      }
      else {
        this.BallanceHint = "Спершу оберіть біржу";
      }
    }
  },
  watch: {
    'Bot.PriceDriver': function(val, oldval) {
      this.getMarkets(val);
    },
    'Bot.Ballance': function(val, oldval) {
      this.calculateBallance();
    },
    'Bot.Market': function () {
      this.calculateBallance();
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .v-slider__tick-label {
    font-size: 12px;
  }
}
</style>