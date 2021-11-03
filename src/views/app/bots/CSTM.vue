<template>
  <div>
    <v-card-title class="px-0">Нашалтування торгів</v-card-title>
    <v-radio-group label="Сторона" row v-model="Bot.oposition">
      <v-radio
          label="Short"
          color="red"
      />
      <v-radio
          label="Long"
          color="green"
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