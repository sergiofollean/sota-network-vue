(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f951"],{b3f0:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("base-tf-selector",{attrs:{charts:t.tfs,width:this.$props.width,height:this.$props.height,period:this.period},on:{selected:t.on_selected}}),a("trading-vue",{ref:"tradingVue",attrs:{data:t.chart,overlays:t.overlays,width:this.$props.width,height:this.$props.height,"title-txt":this.symbol,toolbar:!0,tf:this.period}})],1)},n=[],s=a("b85c"),h=a("1da1"),i=(a("96cf"),a("a9e3"),a("a434"),a("b0c0"),a("d81d"),a("4160"),a("159b"),a("0042")),c=a.n(i),d=a("5cd2"),o=a.n(d),l=a("b704"),u=a.n(l),m={name:"graph",components:{TradingVue:c.a},props:{symbolName:{type:String,default:"BTCUSDT"},symbolPeriod:{type:String,default:"1m"},width:{type:Number,default:500},height:{type:Number,default:600},apiKey:{type:String},apiSecret:{type:String}},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.binance=new o.a({apiKey:t.apiKey,apiSecret:t.apiSecret});case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{overlays:[u.a["EMA"],u.a["Ichi"],u.a["LongShortTrades"]],timer:"",symbol:this.symbolName,period:this.symbolPeriod,tfs:{"1m":{},"3m":{},"5m":{},"15m":{},"1h":{},"4h":{}},binance:null,chart:new i["DataCube"]({chart:{tf:"1m",data:[]}}),wk:1,wss:[]}},methods:{on_selected:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){var r,n,h,i,c,d,o,l,u,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.chart.set("chart.data",[]),e.wss.length>0){r=Object(s["a"])(e.wss);try{for(r.s();!(n=r.n()).done;)h=n.value,h(),e.wss.splice(0,1)}catch(p){r.e(p)}finally{r.f()}}return e.chart.set("chart.data",[]),e.period=t.name,e.chart.set("chart.tf",t.name),a.next=7,e.binance.candles({symbol:e.symbol,interval:e.period});case 7:return i=a.sent,e.chart.set("chart.data",i.map((function(t){return[t.openTime,Number(t.open),Number(t.high),Number(t.low),Number(t.close),Number(t.volume)]}))),e.chart.del("Trades"),e.chart.del("EMA"),e.chart.del("Ichi"),e.chart.add("onchart",{name:"EMA 33",type:"EMA",data:[],settings:{length:33,lineWidth:1}}),e.chart.add("onchart",{name:"EMA 55",type:"EMA",data:[],settings:{length:55,lineWidth:2}}),e.chart.add("onchart",{name:"EMA 120",type:"EMA",data:[],settings:{length:120,lineWidth:3}}),e.chart.add("onchart",{name:"Ichi",type:"Ichi",data:[]}),a.next=18,e.binance.ws.candles(e.symbol,e.period,(function(t){e.chart.data.chart.data[e.chart.data.chart.data.length-1].length&&e.chart.data.chart.data[e.chart.data.chart.data.length-1][0]===t.startTime?e.chart.data.chart.data.splice(e.chart.data.chart.data.length-1,1,[t.startTime,Number(t.open),Number(t.high),Number(t.low),Number(t.close),Number(t.volume)]):e.chart.data.chart.data.push([t.startTime,Number(t.open),Number(t.high),Number(t.low),Number(t.close),Number(t.volume)])}));case 18:if(c=a.sent,e.wss.length>0){d=Object(s["a"])(e.wss);try{for(d.s();!(o=d.n()).done;)l=o.value,l(),e.wss.splice(0,1)}catch(p){d.e(p)}finally{d.f()}}if(e.wss.push(c),e.$refs.tradingVue.resetChart(),!(e.apiKey&&e.apiKey.length>0&&e.apiSecret&&e.apiSecret.length>0)){a.next=29;break}return a.next=25,e.binance.allOrders({symbol:e.symbol});case 25:u=a.sent,m=[],u.forEach((function(t){if("FILLED"===t.status){var a="BUY"===t.side?1:3,r=t.cummulativeQuoteQty,n=t.executedQty,s=e.findNearestCandle(t.time);s&&m.push([s[0],a,r/n,r,s[1],s[2],s[3],s[4]])}})),e.chart.add("onchart",{name:"Trades",type:"LongShortTrades",data:m,settings:{"z-index":10,showLabel:!0}});case 29:case"end":return a.stop()}}),a)})))()},findNearestCandle:function(t){var e=0,a=this.chart.data.chart.data[1][0]-this.chart.data.chart.data[0][0],r=this.chart.data.chart.data[e];while(t-r[0]>0)r=this.chart.data.chart.data[e++];return r[0]-t<a?this.chart.data.chart.data[e++]:null}}},p=m,b=a("2877"),f=Object(b["a"])(p,r,n,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d20f951.b5da4f94.js.map