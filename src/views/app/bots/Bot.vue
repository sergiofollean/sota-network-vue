<template>
  <v-row no-gutters>
    <v-col lg="12" sm="12">
      <base-card ref="panelCol" class="panelCol-event">
        <v-form
            ref="BotForm"
            lazy-validation
        >
          <v-card-text>
            <v-row>
              <v-col lg="6">
                <v-card-title class="px-0" v-if="id == null">
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
                        :rules="[(v) => !!v || 'Оберіть акаунт']"
                    />
                  </v-col>
                  <v-col sm="6">
                    <v-select
                        v-model="Bot.Market"
                        outlined
                        label="Маркет"
                        no-data-text="Спершу оберіть акаунт"
                        :items="markets"
                        :rules="[(v) => !!v || 'Оберіть маркет']"
                    />
                  </v-col>
                </v-row>
                <v-btn-toggle color="primary" borderless mandatory v-model="Bot.script" v-if="priceDriver">
                  <v-btn :disabled="priceDriver.type !== 'Spot Trading'" value="Spot">Спот</v-btn>
                  <v-btn :disabled="priceDriver.type !== 'Leverage Trading'" value="Simple Futures">Simple Futures</v-btn>
                  <v-btn :disabled="priceDriver.type !== 'Leverage Trading'" value="Pro Futures">Pro Futures</v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col lg="6">
                <div v-if="!Bot.script">
                  <v-alert
                      type="info"
                      text
                      prominent
                  >
                    Спершу виберіть акаунт
                  </v-alert>
                </div>
                <CSTM
                    :Bot="Bot"
                    :markets="markets"
                    :binanceMarkets="binanceMarkets"
                    v-if="Bot.script === 'Simple Futures'"
                />

              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text align="center">
            <v-btn color="success" @click="saveBot" :disabled="bussy" class="mr-4">Зберегти</v-btn>
            <v-btn v-if="Bot.Status === 'paused'" color="primary" @click="botStart">Запустити</v-btn>
            <v-btn v-if="Bot.Status === 'active'" color="primary" @click="botStop">Зупинити</v-btn>
            <v-btn v-if="Bot.Status === 'pending'" color="primary" disabled>Обробка</v-btn>
          </v-card-text>
        </v-form>
      </base-card>
    </v-col>
    <v-col lg="12" md="12" ref="graphCol" @resize="onResize">
      <futureGraph class="mt-4" :width="graphWidth" :height="graphHeight" :symbolName="Bot.symbolName" :apiKey="apiKey"
                   :apiSecret="apiSecret"/>
    </v-col>
    <v-col cols="12" v-if="id != null">
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
                  v-if="item.positionSide === 'LONG'"
                  color="success"
                  small
              >{{ item.positionSide }}
              </v-chip>

              <v-chip
                  v-if="item.positionSide === 'SHORT'"
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

const client = Binance();
var firestore = firebase.firestore();
var database = firebase.database();

export default {
  components: {futureGraph, CSTM},
  data() {
    return {
      priceDrivers: [],
      priceDriver: null,
      markets: [],
      binanceMarkets: null,
      Bot: {},
      id: null,
      graphWidth: 333,
      graphHeight: 400,
      // symbolName: 'BTCUSDT',
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
      apiSecret: null
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);

    this.needsUpdate = true;
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    async onResize(event) {
      if (this.$refs.graphCol.clientWidth !== undefined) {
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
          platform = 'BinanceFutures'
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
        this.binanceMarkets = await client.futuresPrices();
      }
      /* } Get Markets for v-select */
    },

    saveBot() {
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

      firebase.auth().onAuthStateChanged(async user => {
        /* First save so create new { */
        if (this.id === null) {
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
          if (Bot) {
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
            await this.$router.push({name: 'Bot', params: {id: Bot.id}});
            this.needsUpdate = true;
          }
        }
            /* } First save so create new  */
        /* Save exist bot { */
        else {
          let Bot = firestore
              .collection('users')
              .doc(user.uid)
              .collection('Bots')
              .doc(this.id);

          if (await Bot.get()) {
            await Bot.update({
              Name: this.Bot.Name
            });

            let data = {};
            if (this.Bot.PriceDriver !== (await Bot.get()).data()['PriceDriver']) {
              // Update PriceDriver
            }

            if (this.Bot.Market !== (await Bot.get()).data()['Market']) {
              // Update Market
              console.log('Market');
              Bot.update({
                Market: this.Bot.Market
              });
            }

            if (this.Bot.Level !== (await Bot.get()).data()['Level']) {
              // Update Level
            }

            if (this.Bot.Ballance !== (await Bot.get()).data()['Ballance']) {
              // Update Level
              data.SlotSize = this.Bot.SlotSize;
              Bot.update({
                Ballance: this.Bot.Ballance
              });
            }

            if (Object.keys(data).length > 0) {
              data.id = Bot.id;

              await Bot.update({
                Status: 'pending'
              });

              await database.ref('tasks').push().set({
                task: 'update_bot',
                user: user.uid,
                data: data
              });
            }
          }
        }
        /* } Save exist bot */
        this.bussy = false;
      });
      /* } Save Bot */
    },

    async botStart() {
      firebase.auth().onAuthStateChanged(async user => {
        if (this.id !== null) {
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').doc(this.id);

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
        if (this.id !== null) {
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').doc(this.id);

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
        const client2 = Binance({
          apiKey: this.apiKey,
          apiSecret: this.apiSecret,
          // getTime: await client.time(),
        })

        let futuresUserTrades = await client2.futuresAllOrders({
          symbol: this.Bot.symbolName,
          // status: 'active'
        });

        this.orders = [];
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
            console.log(el);
          }
        });
      } else {
        this.orders = [];
      }
    }
  },
  watch: {
    'Bot.PriceDriver': function (val, oldval) {
      this.getMarkets(val);

      let priceDriver = this.priceDrivers.find(obj => {
        return obj.value === val
      });

      this.apiKey = priceDriver.apiKey;
      this.apiSecret = priceDriver.apiSecret;

      this.getOrders();
    },
    'Bot.symbolName': async function (val, oldval) {
      this.getOrders();
    },
    'Bot.Market': function() {
      this.getOrders();
    },
    'needsUpdate': function () {
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
              platform: doc.data()['AccountPlatform'],
              apiKey: doc.data()['AccountPub'],
              apiSecret: doc.data()['AccountPriv']
            });
          });
        });
        // } Price Drivers

        // Bot (Single page) {
        if (this.$route.params.id) {
          var Bot = firestore
              .collection('users')
              .doc(user.uid)
              .collection('Bots')
              .doc(this.$route.params.id);

          if (await Bot.get()) {
            this.id = await Bot.id;

            Bot.onSnapshot(async snapshot => {
              this.Bot = (await Bot.get()).data();
              this.Bot.symbolName = 'BTCUSDT';
            });
          }
        }
        // } Bot (Single page)

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
      });
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