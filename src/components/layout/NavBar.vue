<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <router-link to="/" class="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">PokeTrader</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/calculator" class="nav-link">Calculator</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/history" class="nav-link">History</router-link>
        </li>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background-color: #79f !important;
}
</style>