<template>
  <div>
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

  },
  data() {
    return {
      overlays: Object.values(Overlays),
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
      wss: [],
      token: this.apiKey,
      secret: this.apiSecret,
      binance: new Binance({
        apiKey: this.token,
        apiSecret: this.secret
      })
    }
  },
  methods: {
    async on_selected(tf) {
      this.binance = new Binance({
        apiKey: this.apiKey,
        apiSecret: this.apiSecret
      })
      if (this.wss.length > 0) {
        for(const ws of this.wss) {
          ws();
          this.wss.splice(0, 1);
        }
      }
      this.chart.set('chart.data', []);
      this.period = tf.name;
      this.chart.set('chart.tf', tf.name);
      let candleChartResults = await this.binance.futuresCandles({ symbol: this.symbol, interval: this.period });
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
      const ws = await this.binance.ws.futuresCandles(this.symbol, this.period, candle => {
        if (this.chart.data.chart.data[this.chart.data.chart.data.length - 1].length && this.chart.data.chart.data[this.chart.data.chart.data.length - 1][0] === candle.startTime) {
          this.chart.data.chart.data.splice(this.chart.data.chart.data.length - 1, 1,
              [candle.startTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close), Number(candle.volume)]);
        } else {
          this.chart.data.chart.data.push([candle.startTime, Number(candle.open), Number(candle.high), Number(candle.low), Number(candle.close), Number(candle.volume)]);
        }
      })
      if (this.wss.length > 0) {
        for(const ws of this.wss) {
          ws();
          this.wss.splice(0, 1);
        }
      }
      this.wss.push(ws);
      this.$refs.tradingVue.resetChart();
      if (this.apiKey && this.apiKey.length > 0 && this.apiSecret && this.apiSecret.length > 0) {
        const orders = await this.binance.futuresAllOrders({
          symbol: this.symbol,
        });
        const ordersData = [];
        const orderIds = []
        orders.forEach((order) => {
          if (order.status === 'FILLED') {
              const orderType = order.side === 'BUY' ? 1 : 0;
              const orderPos = order.side === 'BUY' ? order.positionSide.substr(0, 1) : 'Sell'
              if (orderIds[order.orderId]) {
                orderIds[order.orderId].push(order);
              } else {
                orderIds[order.orderId] = [order];
              }
              let data = this.findNearestCandle(order.time);
              if (data) {
                ordersData.push([
                  Number(data[0]), Number(orderType), Number(order.avgPrice), orderPos
                ]);
              }
            }
        });
        this.chart.add('onchart', { name: 'Trades', type: 'TradesPlus', data: ordersData, settings: {
          'z-index': 10
        }})
      }
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
    symbolName: function(newVal, oldVal) {
      this.symbol = newVal;
      this.on_selected({i: 0, name: '1m'})
    },
    apiSecret: function(newVal, oldVal) {
      this.secret = newVal;
      this.on_selected({i: 0, name: '1m'})
    },
    apiKey: function(newVal, oldVal) {
      this.token = newVal;
      this.on_selected({i: 0, name: '1m'})
    }
  }
}

</script>
