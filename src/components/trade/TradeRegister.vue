<template>
  <div class="row mt-3">
    <div class="card">
      <div class="card-header">
        Trade ID - {{ this.tradeData.id }}
      </div>
      <div class="card-body">
        <h5 class="card-title">status - 
          <span v-if="this.tradeData.status" class="badge badge-pill bg-success">fair</span>
          <span v-else class="badge bg-pill bg-danger">unfair</span>
        </h5>
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