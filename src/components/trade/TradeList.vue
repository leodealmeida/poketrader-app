<template>
  <div class="row">
    <trade
      v-for="trade in trades"
      v-bind:key="trade.id"
      v-bind:tradeData="trade"
    >
    </trade>
  </div>  
</template>

<script>
import poketraderApi from '../../services/poketraderApi'
import Trade from './Trade.vue'

export default {
  name: 'TradeList',
  components: { Trade },
  data() {
    return {
      trades: []
    }
  },
  methods: {
    getTrades() {
      poketraderApi.getTrades()
      .then(res => {
        this.trades = res.data;
      })
      .catch(err => {
        this.$log.debu(err);
      })
    }
  },
  mounted() {
    this.getTrades();
  }
}
</script>