<template>
  <button v-on:click="submitTrade" :disabled="hasPokemon">trade</button>
</template>

<script>
import poketraderApiService from '../../services/poketraderApi'

export default {
  name: 'TradeOperations',
  props: ['sideA', 'sideB'],
  computed: {
    hasPokemon() {
      return !(this.sideA.length > 0 && this.sideB.length > 0)
    }
  },
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