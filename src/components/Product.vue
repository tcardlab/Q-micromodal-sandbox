<template>
  <div class="product">
      <div class="product__img">
        <i class="fas fa-crown"></i>
      </div>
      <div class="product__info">
        Awesome product #{{productId}}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <router-link :to="{name: 'details'}">Details</router-link>
        <router-link :to="{name: 'dimensions'}">Dimensions</router-link>
        <route-wrapper></route-wrapper>
      </div>
  </div>
</template>

<script>
export default {
  props: ['productId']
}
</script>

<style scoped>

</style>
