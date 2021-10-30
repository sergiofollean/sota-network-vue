<template>
    <graph :width="1200" :height="800" :symbol-name="'XTZUSDT'" :symbol-period="'1m'"
           :api-key="'FBWtoSxHlmhWG12rsVHnR5vK86Ee9nx44xRVCi5LgywXPlHUm0SXS0Idg2ggf3gy'"
           :api-secret="'B1K9bu8CdWleVC5MbIqRELTpfAKoZXYtmCqw0RVPMhVYiUX2WL9g569J7BFoLPqk'">
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