<template>
  <div class="row">
  </div>  
</template>

<script>
import poketraderApi from '../../services/poketraderApi'

export default {
  name: 'HistoryList',
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