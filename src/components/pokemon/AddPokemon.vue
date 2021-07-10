<template>
  <div class="row">
    <div class="col-md-8 mx-auto">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name" v-model="pokemonName" />
        <div class="input-group-append m">
          <button class="btn btn-outline-secondary" type="button" @click="addPokemon">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import poketraderApiService from '../../services/poketraderApi'

export default {
  name: 'AddPokemon',
  data() {
    return {
      pokemonName: ''
    }
  },
  methods: {
    async addPokemon() {
      try {
        const res = await poketraderApiService.newPokemon(this.pokemonName);
        this.$log.debug(res.data);
      } catch (error) {
        this.$log.debug(error);
      }
      this.pokemonName = '';
    }
  }
}
</script>