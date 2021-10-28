<template>
  <div>
    <base-tf-selector :charts="tfs" :width="this.$props.width" :height="this.$props.height" v-on:selected="on_selected" :period="this.period">
    </base-tf-selector>
    <trading-vue :data="chart" :overlays="overlays" :width="this.$props.width" :height="this.$props.height" :title-txt="this.symbol" :toolbar="true" :tf="this.period" ref="tradingVue"></trading-vue>
  </div>
</template>
<script>
import TradingVue from "trading-vue-js";
import Binance from 'binance-api-node'
import { DataCube } from "trading-vue-js";
import Overlays from 'tvjs-overlays'

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
    this.binance = new Binance({
      apiKey: 'lbzNU6YXAlK5BuFeHCGKeWVlogymuIeUY74oV9j6ZZcgMkz8lKZNFuSdh08qq8A5',
      apiSecret: '7RbFl4NgokCUKwdE1FJ8i836SMZdteHl56TE2pz3YevHWWQZqC8S3W2OFm0lzwGl'
    });
  },
  data() {
    return {
      overlays: [Overlays['EMA'], Overlays['Ichi']],
      timer: '',
      symbol: this.symbolName,
      period: this.symbolPeriod,
      tfs: {'1m': {}, '3m': {}, '5m': {}, '15m': {}, '1h': {}, '4h': {}},
      binance: null,
      chart: new DataCube({
        chart: {
          tf: '1m',
          data: []
        }
      }),
      wk: 1,
      ws: null,
    }
  },
  methods: {
    async on_selected(tf) {
      this.chart.set('chart.data', []);

      if (this.ws) {
        await this.ws();
      }
      this.period = tf.name;
      this.chart.set('chart.tf', tf.name);
      let candleChartResults = await this.binance.candles({ symbol: this.symbol, interval: this.period });
      this.chart.set('chart.data', candleChartResults.map((candle) => {
        return [candle.openTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close) , Number(candle.volume)];
      }));
      this.chart.del('EMA')
      this.chart.del('Ichi')
      this.chart.add('onchart', { name: 'EMA 33', type: 'EMA', data: [], settings: {
          length: 33,
          lineWidth: 1
      }})
      this.chart.add('onchart', { name: 'EMA 55', type: 'EMA', data: [], settings: {
          length: 55,
          lineWidth: 2
      }})
      this.chart.add('onchart', { name: 'EMA 120', type: 'EMA', data: [], settings: {
          length: 120,
          lineWidth: 3
      }})
      this.chart.add('onchart', { name: 'Ichi', type: 'Ichi', data: [] });
      this.ws = this.binance.ws.candles(this.symbol, this.period, candle => {
        if (this.chart.data.chart.data[this.chart.data.chart.data.length - 1][0] === candle.startTime) {
          this.chart.data.chart.data.splice(this.chart.data.chart.data.length - 1, 1,
              [candle.startTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close), Number(candle.volume)]);
        } else {
          this.chart.data.chart.data.push([candle.startTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close), Number(candle.volume)]);
        }
      })
      this.$refs.tradingVue.resetChart();
    }
  }
}

</script>
