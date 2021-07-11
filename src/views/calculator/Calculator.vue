<template>
  <div>
    <add-pokemon :availablePokemons="pokemons"/>
    <trade-area :selectedPokemons="sideA" :availablePokemons="pokemons" />
    <trade-area :selectedPokemons="sideB" :availablePokemons="pokemons"/>
    <fairness-display :sideA="sideA" :sideB="sideB" />
    <trade-operations :sideA="sideA" :sideB="sideB" />
  </div>
</template>

<script>
import AddPokemon from '../../components/pokemon/AddPokemon.vue'
import TradeArea from '../../components/trade/TradeArea.vue'
import FairnessDisplay from '../../components/trade/FairnessDisplay.vue'
import TradeOperations from '../../components/trade/TradeOperations.vue'

export default {
  name: 'Calculator',
  components: { AddPokemon, TradeArea, FairnessDisplay, TradeOperations },
  data() {
    return {
      sideA: [],
      sideB: [],
      pokemons: []
    }
  }
}
</script>