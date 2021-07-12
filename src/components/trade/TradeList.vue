<template>
  <dir>
    <trade-register
      v-for="trade in allTrades"
      :key="trade.id"
    >
    </trade-register>
  </dir>
</template>

<script>
import poketraderApi from '../../services/poketraderApi'

import TradeRegister from './TradeRegister.vue'

export default {
  name: 'TradeList',
  components: { TradeRegister },
  data() {
    return {
      allTrades: []
    }
  },
  methods: {
    getTrades() {
      poketraderApi.getTrades()
      .then(res => {
        this.allTrades = res.data;
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