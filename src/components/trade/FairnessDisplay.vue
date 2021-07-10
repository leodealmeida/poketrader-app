<template>
  <div>
    <span>status: </span>
    <span v-if="isTradeFair()" class="badge badge-pill bg-success">fair</span>
    <span v-else class="badge bg-pill bg-danger">unfair</span>
  </div>
</template>

<script>
import constants from '../../constants'

export default {
  name: 'FairnessDisplay',
  props: ['sideA', 'sideB'],
  methods: {
    isTradeFair() {
      const scoresA = this.sideA.map(pokemon => pokemon.base_experience);
      const scoresB = this.sideB.map(pokemon => pokemon.base_experience);
      const absValue = Math.abs(scoresA - scoresB);
      return absValue < constants.FAIRNESS_RATE;
    }
  }
}
</script>