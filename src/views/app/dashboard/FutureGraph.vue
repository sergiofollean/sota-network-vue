<template>
  <div>
    {{ symbol }}
    <base-tf-selector :charts="tfs" :width="width" :height="height" v-on:selected="on_selected" :period="period">
    </base-tf-selector>
    <trading-vue :data="chart" :overlays="overlays" :width="width" :height="height" :title-txt="symbol" :toolbar="true" :tf="period" ref="tradingVue"></trading-vue>
  </div>
</template>
<script>
import TradingVue from "trading-vue-js";
import Binance from 'binance-api-node'
import { DataCube } from "trading-vue-js";
import Overlays from 'tvjs-overlays'

export default {
  name: 'futureGraph',
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
    },
    apiKey: {
      type: String
    },
    apiSecret: {
      type: String
    }
  },
  async created() {
    this.binance = new Binance({
      apiKey: this.apiKey,
      apiSecret: this.apiSecret
    });
  },
  data() {
    return {
      overlays: [Overlays['EMA'], Overlays['Ichi'], Overlays['LongShortTrades']],
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
      this.chart.del('Trades')
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
      const orders = await this.binance.futuresAllOrders({
        symbol: this.symbol,
      });
      const ordersData = [];
      const orderIds = []
      orders.forEach((order) => {
        if (order.status === 'FILLED') {
            let orderType;
            if (order.positionSide === 'LONG') {
              orderType = order.side === 'BUY' ? 1 : 3;
            } else {
              orderType = order.side === 'BUY' ? 0 : 2;
            }
            if (orderIds[order.orderId]) {
              orderIds[order.orderId].push(order);
            } else {
              orderIds[order.orderId] = [order];
            }
            let data = this.findNearestCandle(order.time);
            if (data) {
              ordersData.push([
                data[0], orderType, Number(order.avgPrice), '', data[1], data[2], data[3], data[4]
              ])
            }
          }
      });
      this.chart.add('onchart', { name: 'Trades', type: 'LongShortTrades', data: ordersData, settings: {
        'z-index': 10,
        'showLabel': true
      }})
    },
    findNearestCandle(time) {
      let counter = 0;
      const step = this.chart.data.chart.data[1][0] - this.chart.data.chart.data[0][0];
      let candle = this.chart.data.chart.data[counter];
      while (time - candle[0] > 0) {
        candle = this.chart.data.chart.data[counter++];
      }
      return candle[0] - time < step ? this.chart.data.chart.data[counter++] : null;
    }
  },
  watch: {
    symbolName: function(newVal, oldVal) { // watch it
      this.symbol = newVal;
      this.on_selected({i: 0, name: '1m'})
    }
  }
}

</script>
