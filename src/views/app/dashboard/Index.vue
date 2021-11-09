<template>
  <div>
    <v-row>
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
        {{ $t('dashboard.fearAndGreed')}}
        <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
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
          // console.log(snapshot.data());
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
      //   getTime: () => Date.now()
      // });

      // let info = await client2.lendingAccount();
      // console.log(await info);
    },
  },
  watch: {
    'apiSecret': async function(val) {
      await this.getBinanceData();
    }
  }
}
</script>