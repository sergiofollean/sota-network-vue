<template>
  <div>
    <future-graph :width="1200" :height="800" :symbol-name="message" :symbol-period="'1m'"
           :api-key="'cIOx48OYVU8ixZ6C7ZmXhxMDOdAcTOnO49Qk9drn3QfppGttCf00VR3Z2Mj4kNGR'"
           :api-secret="'rJZ80K7NEyGRrhZHgqR5IwNZBBFd54ihQZKdmX4gYDy14lIB2NgTI03iMMXCtxTa'">
    </future-graph>
    <p>{{ message }}</p>
  <button v-on:click="setNewValue">Set new value</button>
  </div>
</template>
<script>
import futureGraph from './FutureGraph'
export default {
  components: {
    futureGraph
  },
  data() {
    return {
      message: 'BTCUSDT'
    }
  },
  methods: {
    setNewValue: function () {
      this.message = 'XRPUSDT';
    }
  }

}
</script>