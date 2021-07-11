<template>
  <button v-on:click="submitTrade">trade</button>
</template>

<script>
import poketraderApiService from '../../services/poketraderApi'

export default {
  name: 'TradeOperations',
  props: ['sideA', 'sideB'],
  methods: {
    submitTrade() {
      const command = this.buildCommand();
      poketraderApiService.newTrade(command)
      .then(res => {
        this.$log.debug(res.data);
      })
      .catch(err => {
        this.$log.debug(err);
      });
      this.pokemonName = '';
    },
    buildCommand() {
      return {
        sideA: this.sideA,
        sideB: this.sideB
      }
    }
  }
}
</script>