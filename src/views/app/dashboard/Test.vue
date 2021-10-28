<template>
    <graph :width="1200" :height="800" :symbol-name="'ETHUSDT'" :symbol-period="'1m'">
    </graph>

</template>
<script>
import graph from './Graph'
export default {
  components: {
    graph
  },
  data () {
    return {}
  },
}
</script>