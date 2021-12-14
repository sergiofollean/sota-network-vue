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
      <v-col cols="12" lg="4" md="6" sm="12">
        <base-card>
          <v-card-text>
            <apexchart
                class="my-custom-chart"
                label="Coin market cap capitalization"
                type="bar"
                height="340"
                :options="options"
                :series="series"
            />
          </v-card-text>
        </base-card>
      </v-col>

      <v-col cols="12" lg="4" md="6" sm="12">
        <base-card>
          <v-card-text>
            <apexchart id="ttreemap" type="treemap" height="350" :options="treemapOptions" :series="treemapSeries"/>
          </v-card-text>
        </base-card>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4" sm="6">
        <base-card>
          <v-card-title>{{ $t('dashboard.fearAndGreed')}}</v-card-title>
          <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
        </base-card>
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
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import Binance from 'binance-api-node';

const client = Binance();
const firestore = firebase.firestore();
const database = firebase.database();
import {now} from "trading-vue-js/src/helpers/script_utils";
import CoinMarketCap from "../../../plugins/marketCapApi";


export default {
  name: "Dashboard",
  components: {
    "analytic-one-card": analyticOneCard,
  },
  data() {
    return {
      options: {},
      series: [],
      activeBots: '0',
      totalBallance: '0',
      apiKey: null,
      apiSecret: null,
      treemapOptions: {},
      treeMapSeriesData: [],
      treemapSeries: [{ data: []}],
      polarOptions: {},
      polarSeries: [],
      tab: null,
      items: [
        {
          tab: "Спот",
          content: [
          ],
        },
        {
          tab: "Фьючерси",
          content: [
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
  async mounted() {
    this.options = {
      chart: {
        type: 'bar',
        height: 350,
        tools: {}
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      title: {
        text: 'Domination, %',
        offsetX: 15
      },
      xaxis: {
        categories: ['Today'],
      },
      fill: {
        opacity: 1
      },
      y: {
        formatter: function (val) {
          return val + '%'
        },
      }
    }
    this.treemapOptions = {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Basic Treemap'
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
        },
        formatter: function(text, op) {
          return [text, op.value + '%']
        },
        offsetY: -4
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -100,
                to: 0,
                color: '#CD363A'
              },
              {
                from: 0.001,
                to: 100,
                color: '#52B12C'
              }
            ]
          }
        }
      }
    };
    const quotes = firestore.collection('coinsStatistics').doc('quotes');
    const quoteData = (await quotes.get()).data();
    const coins = ['BTC', 'ETH', 'BNB', 'SOL', 'ADA'];

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    if (!quoteData.BTC || quoteData.date < currentDate.getTime()) {
      const client = new CoinMarketCap('7c680929-c136-4f73-81b8-a564c675da99');
      let obj = {};
      for (let i = 0; i < coins.length; i++) {
        let data = await client.getQuotes({symbol: coins[i]});
        obj[coins[i]] = data.data[coins[i]];
        await quotes.set(obj);
      }
      await quotes.update({date: (new Date()).getTime()});
    }
    const treemapData = [];
    for (let i = 0; i < coins.length; i++) {
      let coin = quoteData[coins[i]];
      this.series.push({ name: coin.name, data: [coin.quote.USD.market_cap_dominance]});
      treemapData.push({x: coin.name, y: coin.quote.USD.percent_change_24h.toFixed(2)});
    }
    this.treemapSeries = [{data: treemapData}];
    await this.getBinanceData();
  },
  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    async getBinanceData() {
      // Spot
      let symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'DOGEUSDT', 'XMRUSDT'];
      for (const symbol of symbols) {
        let index = symbols.indexOf(symbol);
        let info = await client.dailyStats({ symbol: symbol });
        this.items[0].content.push({coin: symbol, lastPrice:parseFloat(await info.lastPrice), percent: await info.priceChangePercent});

      }

      // Futures
      for (const symbol of symbols) {
        let index = symbols.indexOf(symbol);
        let info = await client.futuresDailyStats({ symbol: symbol });
        this.items[1].content.push({coin: symbol, lastPrice:parseFloat(await info.lastPrice), percent: await info.priceChangePercent});
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