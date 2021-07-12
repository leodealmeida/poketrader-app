<template>
  <div class="row">
    <div class="col-md-8 mx-auto">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name" v-model="pokemonName" />
        <div class="input-group-append m">
          <button class="btn btn-outline-secondary" type="button"
            @click="addPokemon" :disabled="!pokemonName.length > 0">
            Add
          </button>
        </div>
      </div>
      <p>{{ this.statusMessage }}</p>
      <span v-if="hasErrors">{{ this.errors[0] }}</span>
    </div>
  </div>
</template>

<script>
import poketraderApiService from '../../services/poketraderApi'

export default {
  name: 'AddPokemon',
  props: ['availablePokemons'],
  data() {
    return {
      pokemonName: '',
      hasErrors: false,
      errors: [],
      statusMessage: ''
    }
  },
  methods: {
    addPokemon() {
      this.statusMessage = ''
      poketraderApiService.newPokemon(this.pokemonName)
      .then(res => {
        this.statusMessage = 'Success!'
        this.errors = [];
        this.hasErrors = false;
        this.availablePokemons.push(res.data);
      })
      .catch(err => {
        const responseError = { ...err.response.data };
        const errorMessage = responseError.message;
        this.errors.push(errorMessage);
        this.hasErrors = true;
      });
      this.pokemonName = '';
    }
  }
}
</script>