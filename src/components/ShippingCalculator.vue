<template>
  <div class="shipping-calculator">
    <input size="3" v-model="x"> +
    <input size="3" v-model="y">
    = {{x*1+y*1}}$
  </div>
</template>

<script>
export default {
  data () {
    return {
      x: 5,
      y: 6
    }
  }
}
</script>

<style scoped>

</style>
