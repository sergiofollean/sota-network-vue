<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      </v-col>
      <v-col
          cols="12"
      >
        <base-card>
          <v-card-text>
            <div class="ul-donation-item flex items-center justify-between py-lg flex-wrap">
              <div class="flex-grow-1 py-4">
                <!--        Licenses {        -->
                <!--        No License        -->
                <template v-if="userData.license === 'no-license'">
                  <div class="card-title m-0 text-xl">
                    {{ $t('dashboard.noSubscriptions') }}
                  </div>
                  <p class="text-muted mb-0">
                    {{ $t('dashboard.checkSubscriptions') }}
<!--                    Перегляньте доступні підписки-->
                  </p>
                </template>
                <!--        Pro        -->
                <template v-if="userData.license === 'pro'">
                  <div class="card-title m-0 text-xl">
                    Ліцензія - PRO
                  </div>
                  <p class="text-muted mb-0">
                    Залишилося днів - 14
                  </p>
                </template>
                <!--        } Licenses        -->
              </div>
              <v-btn
                  text
                  color="primary"
              >
                {{ $t('dashboard.manageSubscriptions') }}
<!--                Керування підписками-->
              </v-btn>
            </div>
          </v-card-text>
        </base-card>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12" md="6" lg="4" sm="6">
        <analytic-one-card
            main-icon-name="mdi-robot"
            main-icon-background-color-class="bg-indigo-200"
            main-icon-text-color="text-primary"
            :sub-heading-text="$t('dashboard.activeBots')"
            heading-text="3"
            :heading-text="activeBots"
        />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="6">
        <analytic-one-card
            main-icon-name="mdi-cash-multiple"
            main-icon-background-color-class="bg-green-200"
            main-icon-text-color="text-success"
            :sub-heading-text="$t('dashboard.totalBalance')"
            :heading-text="totalBallance+' $'"
        />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="6">
        <analytic-one-card
            main-icon-name="mdi-alarm"
            main-icon-background-color-class="bg-purple-200"
            main-icon-text-color="text-info"
            :sub-heading-text="$t('dashboard.unrealizedProfit')"
            heading-text="+ 79,23 $"
        />
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4" sm="6">
        <v-card-title>{{ $t('dashboard.fearAndGreed')}}</v-card-title>
        <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
      </v-col>
      <v-col lg="8" md="6" sm="6">
        <base-card>
          <v-card-text>
            <v-tabs v-model="tab">
              <v-tab v-for="item in items" :key="item.tab">
                {{ item.tab }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item.tab">
                <v-card flat>
                  <v-card-text>
                    <v-simple-table>
                      <thead>
                      <tr>
                        <th class="text-left">
                          Coin
                        </th>
                        <th class="text-left">
                          Last Price
                        </th>
                        <th class="text-left">
                          Change
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(itemTwo, index) in item.content" :key="index">
                        <td>{{ itemTwo.coin }}</td>
                        <td>
                          <p :class="parseFloat(itemTwo.percent) < 0 ? 'text-red-600' : 'text-green-600'">
                            {{ itemTwo.lastPrice }} USDT
                          </p>
                        </td>
                        <td>
                          <v-chip
                              :class="parseFloat(itemTwo.percent) < 0 ? 'bg-red-600 text-gray-200' : 'bg-green-600 text-gray-200'"
                              small
                              label
                              class="ml-2"
                          >
                            {{ itemTwo.percent }} %
                          </v-chip>
                        </td>
                      </tr>
                      </tbody>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import analyticOneCard from "@/components/card/AnalyticCardVersionOne";
import {mapGetters} from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Binance from 'binance-api-node';

const client = Binance();
const firestore = firebase.firestore();
const database = firebase.database();

export default {
  name: "Dashboard",
  components: {
    "analytic-one-card": analyticOneCard,
  },
  data() {
    return {
      activeBots: '0',
      totalBallance: '0',
      apiKey: null,
      apiSecret: null,
      tab: null,
      items: [
        {
          tab: "Спот",
          content: [
            {
              coin: "BTC",
              lastPrice: 4000.32,
              number: 6.4,
              percent: "(-3.2%)",
            },
            {
              coin: "ETH",
              lastPrice: 7826.0,
              number: 2.5,
              percent: "(-5.2%)",
            },
            {
              coin: "BNB",
              lastPrice: 3456.99,
              number: 3.5,
              percent: "(-5.2%)",
            },
            {
              coin: "DOGE",
              lastPrice: 1782.99,
              number: 2.4,
              percent: "(-5.2%)",
            },
            {
              coin: "XMR",
              lastPrice: 2398.54,
              number: 2.5,
              percent: "(-5.2%)",
            },
          ],
        },
        {
          tab: "Фьючерси",
          content: [
            {
              coin: "BTC",
              lastPrice: 4000.32,
              number: 6.4,
              percent: "(-3.2%)",
            },
            {
              coin: "ETH",
              lastPrice: 7826.0,
              number: 2.5,
              percent: "(-5.2%)",
            },
            {
              coin: "BNB",
              lastPrice: 3456.99,
              number: 3.5,
              percent: "(-5.2%)",
            },
            {
              coin: "DOGE",
              lastPrice: 1782.99,
              number: 2.4,
              percent: "(-5.2%)",
            },
            {
              coin: "XMR",
              lastPrice: 2398.54,
              number: 2.5,
              percent: "(-5.2%)",
            },

          ],
        },
      ],
      breadcrumbs: [
        {
          text: this.$t('Dashboard'),
          disabled: false,
          to: '/dashboard',
        },
      ]
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(async user => {
      let Bots = firestore.collection('users').doc(user.uid).collection('Bots');
      if(await Bots.get()) this.activeBots = ((await Bots.get()).size).toString();

      let priceDrivers = firestore.collection('users').doc(user.uid).collection('PriceDrivers');
      priceDrivers = await priceDrivers.where('Status', '==', "true");
      priceDrivers = await priceDrivers.where('AccountPriv', '!=', '').limit(1).get();

      if(await priceDrivers.size > 0) {
        await priceDrivers.forEach((snapshot) => {
          this.apiKey = snapshot.data()['AccountPub'];
          this.apiSecret = snapshot.data()['AccountPriv'];
        });
      }
    });
  },
  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    async getBinanceData() {
      // const client2 = Binance({
      //   apiKey: this.apiKey,
      //   apiSecret: this.apiSecret,
      //   httpBase: 'https://sota-api-test.herokuapp.com'
      // });

      // Spot
      let symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'DOGEUSDT', 'XMRUSDT'];
      for (const symbol of symbols) {
        let index = symbols.indexOf(symbol);
        let info = await client.dailyStats({ symbol: symbol });
        await info;
        this.items[0].content[index].lastPrice = parseFloat(await info.lastPrice);
        this.items[0].content[index].percent = await info.priceChangePercent;
      }

      // Futures
      for (const symbol of symbols) {
        let index = symbols.indexOf(symbol);
        let info = await client.futuresDailyStats({ symbol: symbol });
        await info;
        this.items[1].content[index].lastPrice = parseFloat(await info.lastPrice);
        this.items[1].content[index].percent = await info.priceChangePercent;
      }
    },
  },
  watch: {
    'apiSecret': async function (val) {
      await this.getBinanceData();
    }
  }
}
</script>