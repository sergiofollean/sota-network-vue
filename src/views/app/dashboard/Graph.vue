<template>
  <div>
    <base-tf-selector :charts="tfs" :width="this.$props.width" v-on:selected="on_selected" :period="this.period">
    </base-tf-selector>
    <trading-vue :data="chart" :width="this.$props.width" :height="this.$props.height" :title-txt="this.symbolName" :toolbar="true" ref="tradingVue"></trading-vue>
  </div>
</template>
<script>
import TradingVue from "trading-vue-js";
import Binance from 'binance-api-node'
import { DataCube } from "trading-vue-js";

export default {
  name: 'graph',
  components: { TradingVue },
  props: {
    symbolName: {
      type: String,
      default: 'BTCUSDT'
    },
    symbolPeriod: {
      type: String,
      default: '1m'
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 600
    }
  },
  async created() {
    const binance = new Binance({
      apiKey: 'lbzNU6YXAlK5BuFeHCGKeWVlogymuIeUY74oV9j6ZZcgMkz8lKZNFuSdh08qq8A5',
      apiSecret: '7RbFl4NgokCUKwdE1FJ8i836SMZdteHl56TE2pz3YevHWWQZqC8S3W2OFm0lzwGl'
    });
    const candleChartResults = await binance.candles({ symbol: this.$props.symbolName, interval: this.$props.symbolPeriod });
    this.chart.data.chart.data = candleChartResults.map((candle) => {
      return [candle.openTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close) , Number(candle.volume)];
    })

    binance.ws.candles(this.$props.symbolName, '1m', candle => {
      if(this.chart.data.chart.data[this.chart.data.chart.data.length - 1][0] === candle.startTime) {
        this.chart.data.chart.data.splice( this.chart.data.chart.data.length - 1, 1,
          [candle.startTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close) , Number(candle.volume)]);
      } else {
        this.chart.data.chart.data.push([candle.startTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close) , Number(candle.volume)]);
      }
    })
  },
  data() {
    return {
      timer: '',
      symbol: this.symbolName,
      period: this.symbolPeriod,
      tfs: {'1m': {}, '3m': {}, '5m': {}, '15m': {}, '1h': {}, '4h': {}},
      chart: new DataCube({
        chart: {
          tf: '1m',
          data: []
        }
      }),
      wk: 1,
    }
  },
  methods: {
    on_selected(tf) {
      this.chart.set('chart.tf', tf.name)
    }
  }
}

</script>
