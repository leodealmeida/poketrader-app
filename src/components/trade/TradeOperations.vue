<template>
  <div>
    <button v-on:click="submitTrade" :disabled="hasPokemon">trade</button>
    <p>{{ this.statusMessage }}</p>
    <p v-if="hasErrors">{{ this.errors[0] }}</p>
  </div>
</template>

<script>
import poketraderApiService from '../../services/poketraderApi'

export default {
  name: 'TradeOperations',
  props: ['sideA', 'sideB'],
  data() {
    return {
      hasErrors: false,
      errors: [],
      statusMessage: ''
    }
  },
  computed: {
    hasPokemon() {
      return !(this.sideA.length > 0 && this.sideB.length > 0)
    }
  },
  methods: {
    submitTrade() {
      this.statusMessage = '';
      const command = this.buildCommand();
      poketraderApiService.newTrade(command)
      .then(() => {
        this.statusMessage = 'Trade registered!';
      })
      .catch(err => {
        const responseError = { ...err.response.data };
        const errorMessage = responseError.message;
        this.errors.push(errorMessage);
        this.hasErrors = true;
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