<template>
  <div class="tf-selector" :style="{width: this.$props.width + 'px' }">
    <span class="timeframe" v-for="(tf, i) in this.timeframes"
          v-on:click="on_click(tf, i)"
          v-bind:style= "selectedTimeFrame === i ? {color: '#44c767'} : {}">
        {{tf}}
    </span>
  </div>
</template>

<script>

export default {
  name: 'TfSelector',
  props: ['charts', 'width', 'period'],
  mounted() {
    this.$emit('selected', {
      name: this.timeframes[this.selected],
      i: this.selected
    })
  },
  computed: {
    timeframes() {
      return Object.keys(this.$props.charts)
    },
    selectedTimeFrame() {

    }
  },
  methods: {
    on_click(tf, i) {
      this.selected = i
      this.$emit('selected', {
        name: this.timeframes[this.selected],
        i: this.selected
      })
    }
  },
  data() {
    return {
      selected: 0
    }
  }
}
</script>

<style>
.tf-selector {
  font: 16px -apple-system,BlinkMacSystemFont,
  Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
  Fira Sans,Droid Sans,Helvetica Neue,
  sans-serif;
  background: #34363b;
  color: #ccc;
  padding: 8px;
}
.timeframe {
  margin-right: 5px;
  user-select: none;
  cursor: pointer;
  font-weight: 200;
  max-width: 10px;
}
.timeframe:hover {
  color: #fff;
}
</style>