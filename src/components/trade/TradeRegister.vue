<template>
  <div class="row">
    <div class="card">
      <div class="card-header">
        Trade ID - {{ this.tradeData.id }}
      </div>
      <div class="card-body">
        <h5 class="card-title">status - {{ this.tradeData.status }}</h5>
        <p class="card-text">Traded Pokemon: </p>
        <ul>
          <li v-for="p in this.tradeData.tradedPokemon"
            :key="p.id">{{ p.pokemonName }} - side {{ p.side }}
          </li>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['tradeData']
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>