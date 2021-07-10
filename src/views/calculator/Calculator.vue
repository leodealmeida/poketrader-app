<template>
  <div>
    <add-pokemon :availablePokemons="pokemons"/>
    <trade-area :selectedPokemons="sideA" :availablePokemons="pokemons" />
    <trade-area :selectedPokemons="sideB" :availablePokemons="pokemons"/>
  </div>
</template>

<script>
import AddPokemon from '../../components/pokemon/AddPokemon.vue'
import TradeArea from '../../components/trade/TradeArea.vue'

export default {
  name: 'Calculator',
  components: { AddPokemon, TradeArea },
  data() {
    return {
      sideA: [],
      sideB: [],
      pokemons: []
    }
  }
}
</script>