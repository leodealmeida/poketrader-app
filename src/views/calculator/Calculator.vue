<template>
  <div>
    <add-pokemon :availablePokemons="pokemons"/>
    <div class="row">
      <div class="col-sm">
        <span>Side A</span>
        <trade-area :selectedPokemons="sideA" :availablePokemons="pokemons" />
      </div>
      <div class="col-sm">
        <span>Side B</span>
        <trade-area :selectedPokemons="sideB" :availablePokemons="pokemons"/>
      </div>
    </div>
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