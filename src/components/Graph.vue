<template>
  <trading-vue :data="this.$data" :width="this.$props.colWidth"></trading-vue>
</template>
<script>
// const layout = this.$props.layout
//
// console.log(layout);
import TradingVue from "trading-vue-js";
import Overlays from 'tvjs-overlays'
const Binance = require('node-binance-api');

export default {
  name: 'graph',
  components: { TradingVue },
  props: ['colWidth'],
  data() {
    return {
      ohlcv: [
        [ 1551128400000, 33,  37.1, 14,  14,  196 ],
        [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
        [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
        [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
        [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
      ],
      timer: '',
      overlays: [Overlays['TradesPlus']],
    }
  },
  async created() {
    // console.log(this.$refs.graph_col);
    // console.log(this.props)
    // console.log(this)
    await this.fetchEventsList();
    console.log(this.$refs.tradingVue)
    const https = await this.$http.get('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=10');
    this.ohlcv = https.data.map((item) => {
      return [Number.parseFloat(item[0]), Number.parseFloat(item[1]), Number.parseFloat(item[2]), Number.parseFloat(item[3]), Number.parseFloat(item[4])];
    });

    this.timer = setInterval(await this.fetchEventsList, 3000);
  },
  methods: {
    async fetchEventsList() {
      const https = await this.$http.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
      const candels = await this.$http.get('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=1');

      const ohlcvElement = this.ohlcv[this.ohlcv.length - 1];
      const data = candels.data.map((item) => {
        return [Number.parseFloat(item[0]), Number.parseFloat(item[1]), Number.parseFloat(item[2]), Number.parseFloat(item[3]), Number.parseFloat(item[4])];
      });
      // console.log(data[0])
      // console.log(ohlcvElement[0])
      if (ohlcvElement[0] === data[0][0]) {
        // console.log('equal')
        this.ohlcv[this.ohlcv.length - 1] = [1634683500000, 64500, 50000];
      } else {
        this.ohlcv.push(data[0]);
      }
      // console.log(this.ohlcv)
    },
  }
}

</script>

<style>
.navbar-dark {
  background-color: #4670ad;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.04);
  min-height: 65px;
}

.logo {
  color: #FFFFFF;
  font-weight: 500;
  text-transform: capitalize;
}

.card {
  border-radius: 5px;
  box-shadow: 0 6px 14px 0 rgba(33,35,68,.1)!important;
}

.kpi-value {
  font-weight: 500 !important;
}
</style>