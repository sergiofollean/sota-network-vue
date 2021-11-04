<template>
  <div>
    <v-card-title class="px-0">Нашалтування торгів</v-card-title>
    <v-radio-group label="Сторона" row v-model="Bot.Oposition">
      <v-radio
          label="short"
          color="red"
          value="short"
      />
      <v-radio
          label="long"
          color="green"
          value="long"
      />
    </v-radio-group>
    <v-slider
        v-model="Bot.Level"
        class="my-4"
        :tick-labels="level"
        :max="2"
        ticks="always"
    />
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
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/database";
const firestore = firebase.firestore();
const database = firebase.database();

export default {
  name: 'CSTM_bot',
  props: {
    Bot: {},
    markets: [],
    binanceMarkets: null
  },
  data() {
    return {
      level: ["Низький ризик", "Середній ризик", "Високий ризик"],
      BallanceHint: 'Спершу оберіть біржу',
    }
  },
  methods: {
    calculateBallance() {
      /* Calculating contracts count to Ballance */

      if (this.binanceMarkets && this.markets) {
        if (this.Bot.Market) {
          let marketObject = this.markets.find(obj => {
            return obj.value === this.Bot.Market
          });

          // format market symbols
          let marketObj = marketObject.PrimaryCurrency + marketObject.SecondaryCurrency;
          this.Bot.symbolName = marketObj;

          if (this.Bot.Ballance) {
            // calculating contract size
            let contractUstd = this.Bot.Ballance / 110;
            let contractSize = (contractUstd / this.binanceMarkets[marketObj]).toFixed(3);

            // check if more then minimum trade amount
            if (contractSize >= marketObject.MinimumTradeAmount) {
              this.BallanceHint = "Розмір ордеру " + contractSize;
              this.Bot.SlotSize = contractSize;
            } else {
              console.log(marketObject.MinimumTradeAmount);
              this.BallanceHint = "Замалий баланс для торгівлі";
            }
          } else {
            this.BallanceHint = "Вкажіть суму в рамках якої буде працювати бот";
          }
        } else {
          this.BallanceHint = "Тепер оберіть маркет";
        }
      } else {
        this.BallanceHint = "Спершу оберіть біржу";
      }
    },
    saveCSTM() {
      firebase.auth().onAuthStateChanged(async user => {
        /* First save so create new { */
        if (this.Bot.id === null) {
          // Adding to firestore user profile
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').add({
            Name: this.Bot.Name,
            PriceDriver: this.Bot.PriceDriver,
            Market: this.Bot.Market,
            Oposition: this.Bot.Oposition,
            Level: this.Bot.Level,
            Ballance: this.Bot.Ballance,
            Status: "pending",
            Bot: this.Bot.Bot
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
                Oposition: this.Bot.Oposition,
                Level: this.Bot.Level,
                SlotSize: this.Bot.SlotSize,
                Bot: this.Bot.Bot
              }
            });
          }
        }
        /* } First save so create new  */
        /* Save exist bot { */
        else {
          let Bot = firestore
              .collection('users')
              .doc(user.uid)
              .collection('Bots')
              .doc(this.Bot.id);

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
      });
    }
  },
  watch: {
    'Bot.Ballance': function (val, oldval) {
      this.calculateBallance();
    },
    'Bot.Market': function () {
      this.calculateBallance();
    },
    'markets': function () {
      this.calculateBallance();
    },
    'Bot.symbolName': function() {
      this.calculateBallance();
    }
  }
}
</script>