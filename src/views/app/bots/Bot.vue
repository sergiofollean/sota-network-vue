<template>
  <v-row no-gutters>
    <v-col lg="12" sm="12">
      <base-card ref="panelCol" class="panelCol-event">
        <v-form
            ref="BotForm"
            lazy-validation
        >

          <v-card-text v-if="!Bot.Bot && !bussy">
            <v-row justify="center">
              <v-col cols="12">
                <v-card-title class="px-0 justify-center" v-if="Bot.id == null">
                  Оберіть бот який хочете створити
                </v-card-title>
              </v-col>
              <v-col md="4" class="flex flex-column align-center">
                <v-tooltip top :disabled="disabledBot.spot === false" max-width="300">
                  <template v-slot:activator="{ on }">
                    <div class="col" v-on="on">
                      <v-btn
                          block
                          :disabled="disabledBot.spot"
                          @click="Bot.Bot = 'spot'"
                          value="spot"
                          depressed
                      >Спот</v-btn>
                    </div>
                  </template>
                  <span>Для використання цього боту додайте спотовий акаунт в налаштуваннях</span>
                </v-tooltip>
                <v-tooltip top :disabled="disabledBot.futures === false" max-width="300">
                  <template v-slot:activator="{ on }">
                    <div class="col" v-on="on">
                      <v-btn block :disabled="disabledBot.futures" @click="Bot.Bot = 'futures'" value="futures" depressed>Фьючерси (простий)</v-btn>
                    </div>
                  </template>
                </v-tooltip>
                <v-tooltip top :disabled="disabledBot.futurespro === false" max-width="300">
                  <template v-slot:activator="{ on }">
                    <div class="col" v-on="on">
                      <v-btn block :disabled="disabledBot.futurespro" @click="Bot.Bot = 'futurespro'" value="futurespro" depressed>Фьючерси (PRO)</v-btn>
                    </div>
                  </template>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text v-if="Bot.Bot">
            <v-row>
              <v-col cols="12" lg="6">
                <v-card-title class="px-0" v-if="Bot.id === null">
                  Додавання нового боту
                </v-card-title>
                <v-card-title class="px-0" v-else>
                  Бот - {{ Bot.Name }}
                  <v-chip
                      v-if="Bot.Status === 'active'"
                      class="ml-4"
                      color="success"
                      label
                      small
                      text-color="white"
                  >
                    <v-icon small left>mdi-check</v-icon>
                    Активний
                  </v-chip>
                  <v-chip
                      v-else-if="Bot.Status === 'paused'"
                      class="ml-4"
                      color="warning"
                      label
                      small
                      text-color="white"
                  >
                    <v-icon class="mr-2" size="15">mdi-pause</v-icon>
                    Зупинений
                  </v-chip>
                  <v-chip
                      v-else
                      class="ml-4"
                      color="info"
                      label
                      small
                      text-color="white"
                  >
                    <v-progress-circular
                        indeterminate
                        :value="100"
                        color="white"
                        :size="15"
                        :width="2"
                        class="mr-2"
                    ></v-progress-circular>
                    Обробка
                  </v-chip>
                </v-card-title>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        v-model="Bot.Name"
                        label="Назва"
                        :rules="[v => !!v || 'Вкажіть назву']"
                        required
                        outlined
                        hide-details
                    />
                  </v-col>
                  <v-col sm="6">
                    <v-select
                        v-model="Bot.PriceDriver"
                        outlined
                        label="Акаунт"
                        :items="priceDrivers"
                        @change="getMarkets"
                        :rules="[(v) => !!v || 'Оберіть акаунт']"
                        hide-details
                    />
                  </v-col>
                  <v-col sm="6">
                    <v-overflow-btn
                        v-model="Bot.Market"
                        label="Маркет"
                        no-data-text="Спершу оберіть акаунт"
                        :items="markets"
                        :rules="[(v) => !!v || 'Оберіть маркет']"
                        hide-details
                        editable
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="6">
                <CSTM
                    :Bot="Bot"
                    :markets="markets"
                    :binanceMarkets="binanceMarkets"
                    v-if="Bot.Bot === 'futures'"
                    ref="CSTM"
                />
                <Spot
                    :Bot="Bot"
                    :markets="markets"
                    :binanceMarkets="binanceMarkets"
                    v-if="Bot.Bot === 'spot'"
                    ref="Spot"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text align="center" v-if="Bot.Bot">
            <v-btn color="success" @click="saveBot" :disabled="Bot.Status === 'pending'" depressed>Зберегти</v-btn>
            <v-btn v-if="Bot.Status === 'paused'" color="primary" @click="botStart" class="ml-4" depressed>Запустити</v-btn>
            <v-btn v-if="Bot.Status === 'active'" color="primary" @click="botStop" class="ml-4" depressed>Зупинити</v-btn>
            <v-btn v-if="Bot.Status === 'pending'" color="primary" disabled class="ml-4">Обробка</v-btn>
          </v-card-text>
        </v-form>
      </base-card>
    </v-col>
    <v-col lg="12" md="12" ref="graphCol" @resize="onResize" v-if="Bot.Bot">
      <Graph v-if="Bot.Bot === 'spot'" class="mt-4" :width="graphWidth" :height="graphHeight" :symbolName="Bot.symbolName" :apiKey="apiKey"
             :apiSecret="apiSecret" />
      <futureGraph v-else class="mt-4" :width="graphWidth" :height="graphHeight" :symbolName="Bot.symbolName" :apiKey="apiKey"
                   :apiSecret="apiSecret" />
    </v-col>
    <v-col cols="12" v-if="Bot.id !== null">
      <base-card class="mt-4">
        <v-card-title>
          Ордери
        </v-card-title>

        <v-card-text>
          <v-data-table
              :headers="ordersHeaders"
              :items="orders"
              no-data-text="Немає жодного одреру"
          >
            <template v-slot:item.time="{item}">
              {{ item.time }}
            </template>

            <template v-slot:item.positionSide="{item}">
              <v-chip
                  v-if="item.positionSide === 'LONG' || item.positionSide === 'BUY'"
                  color="success"
                  small
              >{{ item.positionSide }}
              </v-chip>

              <v-chip
                  v-if="item.positionSide === 'SHORT' || item.positionSide === 'SELL'"
                  color="error"
                  small
              >{{ item.positionSide }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>

</template>

<script>
import axios from "axios";
import firebase from "firebase";
import "firebase/database";
import Binance from 'binance-api-node';
import futureGraph from '@/views/app/dashboard/FutureGraph';
import CSTM from "@/views/app/bots/CSTM";
import Spot from "@/views/app/bots/Spot";
import Graph from "@/views/app/dashboard/Graph";

const client = Binance();
const firestore = firebase.firestore();
const database = firebase.database();

export default {
  components: {Graph, Spot, futureGraph, CSTM},
  data() {
    return {
      priceDrivers: [],
      priceDriver: null,
      markets: [],
      binanceMarkets: null,
      Bot: {
        Bot: false,
        id: null,
        symbolName: 'BTCUSDT',
        Market: {}
      },
      graphWidth: 333,
      graphHeight: 500,
      ordersHeaders: [
        {text: "Дата", value: "time"},
        {text: "Маркет", value: "market"},
        {text: "Сторона", value: "positionSide"},
        {text: "Ціна", value: "price"},
        {text: "Кількість", value: "origQty"},
      ],
      orders: [],
      bussy: false,
      needsUpdate: false,
      apiKey: null,
      apiSecret: null,
      disabledBot: {
        spot: true,
        futures: true,
        futurespro: true
      }
    }
  },
  mounted() {
    this.needsUpdate = true;

    window.addEventListener('resize', this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    async onResize(event) {
      if (typeof this.$refs.graphCol !== 'undefined') {
        this.graphWidth = this.$refs.graphCol.clientWidth;
      }

      // if(this.$refs.panelCol.$el.clientHeight !== undefined) {
      //   this.graphHeight = this.$refs.panelCol.$el.clientHeight - 34;
      // }
    },

    async getMarkets(e) {
      /* Get Markets for v-select { */

      var priceDriver = this.priceDrivers.find(obj => {
        return obj.value === e
      });
      this.priceDriver = priceDriver;

      /* Formating platform for API */
      var platform = '';
      // Binance
      if (priceDriver.platform === 'Binance') {
        if (priceDriver.type === 'Leverage Trading') {
          platform = 'BinanceFutures';
        }
        if(priceDriver.type === 'Spot Trading') {
          platform = 'Binance';
        }
      }

      /* Doing ajax to get markets from Haas */
      if (platform.length > 0) {
        axios.get('https://sota-api.gq/GetPriceMarkets/' + platform).then(response => {
          if (response.data.length > 0) {
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
        if(this.Bot.Bot === 'spot') {
          this.binanceMarkets = await client.prices();
        }
        else {
          this.binanceMarkets = await client.futuresPrices();
        }
      }
      /* } Get Markets for v-select */
    },

    async saveBot() {
      /* Save Bot { */
      if (!this.bussy) {
        this.bussy = true;
      } else if (this.bussy === true) {
        return false;
      }

      if (!this.$refs.BotForm.validate()) {
        setTimeout(() => {
          this.bussy = false;
        }, 500);
        return false;
      }

      if(this.Bot.Bot === 'spot') await this.$refs.Spot.saveSpot();
      if(this.Bot.Bot === 'futures') await this.$refs.CSTM.saveCSTM();

      // Redirect to new exist bot
      // this.needsUpdate = true;
      this.bussy = false;
      /* } Save Bot */
    },

    async botStart() {
      firebase.auth().onAuthStateChanged(async user => {
        if (this.Bot.id !== null) {
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').doc(this.Bot.id);

          if (Bot) {
            Bot.update({
              Status: 'pending'
            });
            database.ref('tasks').push().set({
              task: 'bot_start',
              user: user.uid,
              data: {
                id: Bot.id
              }
            });
          }
        }
      });
    },

    async botStop() {
      firebase.auth().onAuthStateChanged(async user => {
        if (this.Bot.id !== null) {
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').doc(this.Bot.id);

          if (Bot) {
            Bot.update({
              Status: 'pending'
            });
            database.ref('tasks').push().set({
              task: 'bot_stop',
              user: user.uid,
              data: {
                id: Bot.id
              }
            });
          }
        }
      });
    },

    async getOrders() {
      if (this.apiKey && this.apiSecret) {
        if (!this.bussy) {
          this.bussy = true;
        } else if (this.bussy === true) {
          return false;
        }

        const client2 = Binance({
          apiKey: this.apiKey,
          apiSecret: this.apiSecret,
          getTime: () => Date.now()
        })

        if(this.Bot.Bot === 'spot') {
          let spotUserTrades = await client2.allOrders({
            symbol: this.Bot.symbolName,
          });

          this.orders = [];

          if(spotUserTrades) {
            await spotUserTrades.map(el => {
              if (el.status === "NEW") {
                let time = new Date(el.time);

                this.orders.push({
                  time: time.toLocaleString().replace(',', ''),
                  market: this.Bot.Market,
                  positionSide: el.side,
                  price: el.price,
                  origQty: el.origQty
                });
              }
            });
          }
        }
        else {
          let futuresUserTrades = await client2.futuresAllOrders({
            symbol: this.Bot.symbolName,
            // status: 'active'
          });

          this.orders = [];
          if(await futuresUserTrades) {
            await futuresUserTrades.map(el => {
              if (el.status === "NEW") {
                let time = new Date(el.time);

                this.orders.push({
                  time: time.toLocaleString().replace(',', ''),
                  market: this.Bot.Market,
                  positionSide: el.positionSide,
                  price: el.price,
                  origQty: el.origQty
                });
              }
            });
          }
        }

        this.bussy = false;
      } else {
        this.orders = [];
      }}
  },
  watch: {
    'Bot.Bot': function() {
      this.needsUpdate = true;

      setTimeout(() => {
        this.onResize();
      }, 500);
    },
    'priceDrivers': function(val) {
      if(this.Bot.PriceDriver) {
        this.getMarkets(this.Bot.PriceDriver);

        let priceDriver = this.priceDrivers.find(obj => {
          return obj.value === this.Bot.PriceDriver
        });

        this.apiKey = priceDriver.apiKey;
        this.apiSecret = priceDriver.apiSecret;

        this.getOrders();
      }
    },
    'Bot.PriceDriver': function (val, oldval) {
      if(this.priceDrivers.length > 0) {
        this.getMarkets(val);

        let priceDriver = this.priceDrivers.find(obj => {
          return obj.value === val
        });

        this.apiKey = priceDriver.apiKey;
        this.apiSecret = priceDriver.apiSecret;

        this.getOrders();
      }
    },
    'binanceMarkets': function() {
      if (this.binanceMarkets && this.markets) {
        if (this.Bot.Market) {
          let marketObject = this.markets.find(obj => {
            return obj.value === this.Bot.Market
          });

          // format market symbols
          if(marketObject) {
            let marketObj = marketObject.PrimaryCurrency + marketObject.SecondaryCurrency;
            this.Bot.symbolName = marketObj;

            this.getOrders();
          }
        }
      }
    },
    'Bot.Market': function(newVal, oldVal) {
      if (newVal) {
        console.log(newVal.replace(/\//, ''))
        this.Bot.symbolName = newVal.replace(/\//, '');
        this.getOrders();
      }
    },
    'needsUpdate': function () {
      this.bussy = true;

      firebase.auth().onAuthStateChanged(async user => {
        // Bot (Single page) {
        if (this.$route.params.id) {
          var Bot = firestore
              .collection('users')
              .doc(user.uid)
              .collection('Bots')
              .doc(this.$route.params.id);

          if (await Bot.get()) {
            Bot.onSnapshot(async snapshot => {
              this.Bot = (await Bot.get()).data();
              this.Bot.id = Bot.id;
              this.Bot.symbolName = 'BTCUSDT';
            });
          }
        }
        // } Bot (Single page)

        // Price Drivers {
        var priceDrivers = firestore.collection('users').doc(user.uid).collection('PriceDrivers');
        priceDrivers.onSnapshot(snapshot => {
          this.priceDrivers = [];
          snapshot.forEach(doc => {
            if(doc.data()['AccountType'] === 'Leverage Trading') {
              this.disabledBot.futures = false;
              this.disabledBot.futurespro = false;
            }
            if(doc.data()['AccountType'] === 'Spot Trading') this.disabledBot.spot = false;

            if(doc.data()['AccountType'] === 'Spot Trading' && this.Bot.Bot === 'spot') {
              this.priceDrivers.push({
                text: doc.data()['AccountName'],
                value: doc.id,
                type: doc.data()['AccountType'],
                platform: doc.data()['AccountPlatform'],
                apiKey: doc.data()['AccountPub'],
                apiSecret: doc.data()['AccountPriv']
              });
            }
            else if(doc.data()['AccountType'] === 'Leverage Trading' && (this.Bot.Bot === 'futures' || this.Bot.Bot === 'futurespro')) {
              this.priceDrivers.push({
                text: doc.data()['AccountName'],
                value: doc.id,
                type: doc.data()['AccountType'],
                platform: doc.data()['AccountPlatform'],
                apiKey: doc.data()['AccountPub'],
                apiSecret: doc.data()['AccountPriv']
              });
            }
          });
        });
        // } Price Drivers

        // Interval to fix graph size {
        let i = 5;
        let afterInterval = setInterval(() => {
          if (i > 0) {
            this.onResize();
            i--;
          } else {
            clearInterval(afterInterval);
          }
        }, 300);
        // } Interval to fix graph size

        this.needsUpdate = false;
        this.bussy = false;
      });
    }
  }
}
</script>

<style>
.v-overflow-btn {
  margin-top: 0 !important;
}

.v-overflow-btn .v-select__slot {
  height: 54px !important;
}

.theme--light.v-overflow-btn.theme--light.v-overflow-btn > .v-input__control > .v-input__slot {
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.38);
  border-width: 1px;
}

.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
  /*border-color: #eee;*/
}

@media (max-width: 768px) {
  .v-slider__tick-label {
    font-size: 12px;
  }
}
</style>