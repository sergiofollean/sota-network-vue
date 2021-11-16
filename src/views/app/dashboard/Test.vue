<template>
  <div>
    <graph :width="1200" :height="800" :symbol-name="'BNBUAH'" :symbol-period="'1m'"
           :api-key="'cIOx48OYVU8ixZ6C7ZmXhxMDOdAcTOnO49Qk9drn3QfppGttCf00VR3Z2Mj4kNGR'"
           :api-secret="'rJZ80K7NEyGRrhZHgqR5IwNZBBFd54ihQZKdmX4gYDy14lIB2NgTI03iMMXCtxTa'">
    </graph>
    <p>{{ apiKey }}</p>
  <button v-on:click="setNewValue">Set new value</button>
  </div>
</template>
<script>
import graph from './Graph'
export default {
  components: {
    graph
  },
  data() {
    return {
      apiKey: 'cIOx48OYVU8ixZ6C7ZmXhxMDOdAcTOnO49Qk9drn3QfppGttCf00VR3Z2Mj4kNGR',
      symbolName: 'BNBUAH'
    }
  },
  methods: {
    setNewValue: function () {
      this.apiKey = 'cIOx48OYVU8ixZ6C7ZmXhxMDOdAcTOnO49Qk9drn3QfppGttCf00VR3Z2Mj4kNGR';
      this.symbolName = 'BNBUAH';
    }
  }

}
</script>