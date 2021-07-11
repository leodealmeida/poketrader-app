<template>
  <div>
    <span>{{ tradeData.id }}</span>
    <span>{{ tradeData.status }}</span>
  </div>
</template>

<script>
export default {
  name: 'Trade',
  props: ['tradeData']
}
</script>
