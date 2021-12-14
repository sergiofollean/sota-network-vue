<template>
  <div>
    <v-card-title class="px-0">Нашалтування торгів</v-card-title>
    <v-text-field
        v-model="Bot.BasePrice"
        outlined
        label="Базова ціна"
        prepend-inner-icon="mdi-currency-usd"
        :rules="[rules.BasePrice]"
    />
    <v-text-field
        v-model="Bot.Sell"
        outlined
        value="1"
        label="Кількість ордерів на продаж"
        :rules="[v => !!v || 'Це поле обовьязкове!']"
    />
    <v-text-field
        v-model="Bot.Buy"
        outlined
        label="Кількість ордерів на покупку"
        :rules="[v => !!v || 'Це поле обовьязкове!']"
    />
    <v-text-field
        v-model="Bot.OrderSize"
        outlined
        label="Розмір ордеру"
        prepend-inner-icon="mdi-currency-usd"
        :rules="[rules.OrderSize]"
    />
    <div class="input-container d-flex align-center">
      <v-text-field
          v-model="Bot.Spread"
          outlined
          label="Відстань спреду"
          prepend-inner-icon="mdi-percent"
          hide-details
          :rules="[v => !!v || 'Це поле обовьязкове!']"
      />
      <v-tooltip top max-width="200">
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" class="ml-4">mdi-help-circle</v-icon>
        </template>
        <span>Спред - це проміжок між ордерами на яких буде здійснюватись покупка і продаж</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/database";

const firestore = firebase.firestore();
const database = firebase.database();

export default {
  name: 'Spot',
  props: {
    Bot: {},
    markets: [],
    binanceMarkets: null
  },
  data() {
    return {
      rules: {
        OrderSize(value) {
          if(value.length === 0) {
            return 'Це поле обовьязкове!';
          }
          if (/^[0-9\.]*$/.test(value)){
            return true;
          }
          return 'Дозволено тільки цифри з точкою. (приклад 3.14)'
        },
        BasePrice(value) {
          if(value.length === 0) {
            return 'Це поле обовьязкове!';
          }
          if (/^[0-9\.]*$/.test(value)){
            return true;
          }
          return 'Дозволено тільки цифри з точкою. (приклад 3.14)'
        }
      },
    }
  },
  created() {
    this.Bot.Buy = 1;
    this.Bot.Sell = 0;
    this.Bot.Spread = 1;
  },
  methods: {
    saveSpot() {
      firebase.auth().onAuthStateChanged(async user => {
        /* First save so create new { */
        if (this.Bot.id === null) {
          // Adding to firestore user profile
          var Bot = await firestore.collection('users').doc(user.uid).collection('Bots').add({
            Name: this.Bot.Name,
            PriceDriver: this.Bot.PriceDriver,
            Market: this.Bot.Market,
            Status: "pending",
            Bot: this.Bot.Bot,
            BasePrice: this.Bot.BasePrice,
            Sell: this.Bot.Sell,
            Buy: this.Bot.Buy,
            OrderSize: this.Bot.OrderSize,
            Spread: this.Bot.Spread
          });

          if (Bot) {
            // Adding to the tasker
            await database.ref('tasks').push().set({
              task: 'add_bot',
              user: user.uid,
              data: {
                id: Bot.id,
                PriceDriver: this.Bot.PriceDriver,
                Market: this.Bot.Market,
                Bot: this.Bot.Bot,
                BasePrice: this.Bot.BasePrice,
                Sell: this.Bot.Sell,
                Buy: this.Bot.Buy,
                OrderSize: this.Bot.OrderSize,
                Spread: this.Bot.Spread
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

            if(this.Bot.BasePrice !== (await Bot.get()).data()['BasePrice']) {
              data.BasePrice = this.Bot.BasePrice;
            }

            if(this.Bot.Sell !== (await Bot.get()).data()['Sell']) {
              data.Sell = this.Bot.Sell;
            }

            if(this.Bot.Buy !== (await Bot.get()).data()['Buy']) {
              data.Buy = this.Bot.Buy;
            }

            if(this.Bot.OrderSize !== (await Bot.get()).data()['OrderSize']) {
              data.OrderSize = this.Bot.OrderSize;
            }

            if(this.Bot.Spread !== (await Bot.get()).data()['Spread']) {
              data.Spread = this.Bot.Spread;
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