<template xmlns="http://www.w3.org/1999/html">
  <div class="flex-wrap justify-center" style="height: 100%">
    <div v-if="!Bot.Oposition" class="flex-column align-center mt-4">
      <v-alert type="info" text>Оберіть сторону</v-alert>
      <v-radio-group label="Сторона" row v-model="Bot.Oposition">
        <v-radio
            label="short"
            color="red"
            value="short"
        >
          <template v-slot:label>
            <strong class="danger--text">Шорт</strong>
          </template>
        </v-radio>
        <v-radio
            label="long"
            color="green"
            value="long"
        >
          <template v-slot:label>
            <strong class="success--text">Лонг</strong>
          </template>
        </v-radio>
      </v-radio-group>
    </div>
    <div v-else>
      <v-card-title class="px-0">Нашалтування торгів</v-card-title>

      <v-slider
          v-model="Bot.Level"
          class="my-4"
          :tick-labels="level"
          :max="2"
          ticks="always"
      />
      <v-slider
          v-model="Leverage"
          class="mt-8"
          :min="1"
          :max="20"
          ticks="always"
          label="Кредитне плече"
          thumb-label="always"
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
    binanceMarkets: null,
  },
  data() {
    return {
      level: ["Низький ризик", "Середній ризик", "Високий ризик"],
      BallanceHint: 'Спершу оберіть біржу',
      Leverage: 1
    }
  },
  methods: {
    calculateBallance() {
      /* Calculating contracts count to Ballance */

      if (this.binanceMarkets && this.markets) {
        if (this.Bot.Market) {
          if (this.Bot.Ballance) {
            let marketObject = this.markets.find(obj => {
              return obj.value === this.Bot.Market
            });

            // format market symbols
            let marketObj = marketObject.PrimaryCurrency + marketObject.SecondaryCurrency;
            this.Bot.symbolName = marketObj;

            // calculating contract size
            let delta = 110;
            if(this.Bot.Level === 0) delta = 70;
            console.log(delta);
            let contractUstd = (this.Bot.Ballance * this.Leverage) / delta;
            let contractSize = (contractUstd / this.binanceMarkets[this.Bot.symbolName]).toFixed(3);

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

          await this.$router.push({name: 'Bot', params: {id: Bot.id}});
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

            // Collecting data to update {
            let data = {};
            // if (this.Bot.Oposition !== (await Bot.get()).data()['Oposition']) {
            //   data.Oposition = this.Bot.Oposition;
            //   await Bot.update({
            //     Oposition: this.Bot.Oposition
            //   });
            // }

            if (this.Bot.PriceDriver !== (await Bot.get()).data()['PriceDriver']) {
              // Update PriceDriver
              data.PriceDriver = this.Bot.PriceDriver;
            }

            if (this.Bot.Market !== (await Bot.get()).data()['Market']) {
              // Update Market
              data.Market = this.Bot.Market;
            }

            if (this.Bot.Level !== (await Bot.get()).data()['Level']) {
              // Update Level
              data.Level = this.Bot.Level;
            }

            if (this.Bot.Ballance !== (await Bot.get()).data()['Ballance']) {
              // Update Ballance
              data.SlotSize = this.Bot.SlotSize;
              data.SlotSize_Level = this.Bot.Level;
            }
            // } Collecting data to update

            if (Object.keys(data).length > 0) {
              data.id = Bot.id;
              data.Bot = this.Bot.Bot;
              data.Status = "pending";

              await Bot.update(data);

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
    'Leverage': function () {
      this.calculateBallance();
    },
    'Bot.Level': function () {
      this.calculateBallance();
    },
    'Bot.Market': function () {
      this.calculateBallance();
    },
    'markets': function () {
      this.calculateBallance();
    },
    'binanceMarkets': function() {
      this.calculateBallance();
    },
    'Bot.symbolName': function() {
      this.calculateBallance();
    }
  }
}
</script>