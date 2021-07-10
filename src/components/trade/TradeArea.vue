<template>
  <div>
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class='tag-input'>
          <div v-for='(pokemon, index) in selectedPokemons' :key='pokemon.name' class='tag-input__tag'>
            <span @click='removePokemon(index)'>x</span>
            {{ pokemon.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mx-auto">
        <select 
          v-model="selected"
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          @change="pushPokemon"
        >
          <option v-for="pokemon in availablePokemons" :key="pokemon.name" :label="pokemon.name" :value="pokemon.name" />
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradeDisplay',
  props: ['selectedPokemons', 'availablePokemons'],
  data () {
    return {
      selected: '',
      selectedPokemonData: {}
    }
  },
  methods: {
    pushPokemon() {
      this.availablePokemons.map(pokemon => {
        console.log(pokemon, pokemon.name);
        if (pokemon.name === this.selected) {
          this.selectedPokemonData = pokemon;
          this.selectedPokemons.push(pokemon);
        }
      })
    },
    removePokemon(index) {
      this.selectedPokemons.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 80px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>