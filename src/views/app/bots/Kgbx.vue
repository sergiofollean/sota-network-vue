<template>
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

      <v-text-field
          v-model="Bot.TradeAmount"
          label="Розмір контракту"
          outlined
          :rules="[rules.TradeAmount]"
      />

      <v-card-title class="px-0">Нашалтування індикатора</v-card-title>

      <v-row>
        <v-col md="6">
          <v-select
              outlined
              v-model="Bot.Base_MA_Type"
              label="Base MA Type"
              :items="Base_MA_Type"
              hide-details
          />
        </v-col>
        <v-col md="6">
          <v-text-field
              v-model="Bot.Base_MA_Length"
              label="Base MA Length"
              outlined
              hide-details
          />
        </v-col>
        <v-col md="6">
          <v-select
              v-model="Bot.Price_Data_Timeframe"
              outlined
              label="Price Data Timeframe"
              :items="Price_Data_Timeframe"
          />
        </v-col>
        <v-col md="6">
          <v-text-field
              outlined
              v-model="Bot.ATR_Length"
              label="ATR Length"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/database";

const firestore = firebase.firestore();
const database = firebase.database();

export default {
  name: 'Kgbx_bot',
  props: {
    Bot: {},
    markets: [],
    binanceMarkets: null,
  },
  data() {
    return {
      Base_MA_Type: ['Sma', 'Ema', 'Wma', 'Dema', 'Tema', 'Trima', 'Kama', 'Mama', 'T3'],
      Price_Data_Timeframe: [
          '1 minute',
          '2 minutes',
          '3 minutes',
          '4 minutes',
          '5 minutes',
          '6 minutes',
          '10 minutes',
          '12 minutes',
          '15 minutes',
          '20 minutes',
          '30 minutes',
          '45 minutes',
          '1 hour',
          '1.5 hour',
          '2 hour',
          '2.5 hour',
          '3 hour',
          '4 hour',
      ],
      rules: {
        TradeAmount(value) {
          if(value.length === 0) {
            return 'Це поле обовьязкове!';
          }
          if (/^[0-9\.]*$/.test(value)){
            return true;
          }
          return 'Дозволено тільки цифри з точкою. (приклад 3.14)'
        }
      }
    }
  },
  created() {
    this.Bot.Base_MA_Type = 'Ema';
    this.Bot.Base_MA_Length = 10;
    this.Bot.Price_Data_Timeframe = '1 minute'
    this.Bot.ATR_Length = 50;
  },
  methods: {
    saveKgbx() {
      firebase.auth().onAuthStateChanged(async user => {
        /* First save so create new { */
        if (this.Bot.id === null) {
          // Adding to firestore user profile
          let Bot = await firestore.collection('users').doc(user.uid).collection('Bots').add({
            Name: this.Bot.Name,
            PriceDriver: this.Bot.PriceDriver,
            Market: this.Bot.Market,
            Status: "pending",
            Bot: this.Bot.Bot,
            Oposition: this.Bot.Oposition,
            TradeAmount: this.Bot.TradeAmount,
            Base_MA_Type: this.Bot.Base_MA_Type,
            Base_MA_Length: this.Bot.Base_MA_Length,
            Price_Data_Timeframe: this.Bot.Price_Data_Timeframe,
            ATR_Length: this.Bot.ATR_Length
          });

          if(Bot) {
            // Adding to the tasker
            await database.ref('tasks').push().set({
              task: 'add_bot',
              user: user.uid,
              data: {
                id: Bot.id,
                PriceDriver: this.Bot.PriceDriver,
                Market: this.Bot.Market,
                Bot: this.Bot.Bot,
                Oposition: this.Bot.Oposition,
                TradeAmount: this.Bot.TradeAmount,
                Base_MA_Type: this.Bot.Base_MA_Type,
                Base_MA_Length: this.Bot.Base_MA_Length,
                Price_Data_Timeframe: this.Bot.Price_Data_Timeframe,
                ATR_Length: this.Bot.ATR_Length
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

            if (this.Bot.PriceDriver !== (await Bot.get()).data()['PriceDriver']) {
              // Update PriceDriver
              data.PriceDriver = this.Bot.PriceDriver;
              data.Market = this.Bot.Market;
            }

            if (this.Bot.Market !== (await Bot.get()).data()['Market']) {
              // Update Market
              data.Market = this.Bot.Market;
            }

            if (this.Bot.TradeAmount !== (await Bot.get()).data()['TradeAmount']) {
              // Update Trade Amount
              data.TradeAmount = this.Bot.TradeAmount;
            }

            if (this.Bot.Base_MA_Type !== (await Bot.get()).data()['Base_MA_Type']) {
              // Update Base_MA_Type
              data.Base_MA_Type = this.Bot.Base_MA_Type;
            }

            if (this.Bot.Base_MA_Length !== (await Bot.get()).data()['Base_MA_Length']) {
              // Update Base_MA_Length
              data.Base_MA_Length = this.Bot.Base_MA_Length;
            }

            if (this.Bot.Price_Data_Timeframe !== (await Bot.get()).data()['Price_Data_Timeframe']) {
              // Update Price_Data_Timeframe
              data.Price_Data_Timeframe = this.Bot.Price_Data_Timeframe;
            }

            if (this.Bot.ATR_Length !== (await Bot.get()).data()['ATR_Length']) {
              // Update ATR_Length
              data.ATR_Length = this.Bot.ATR_Length;
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
  }
}
</script>