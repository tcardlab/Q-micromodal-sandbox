<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <router-link to="/product/123">Product</router-link>
    <router-link to="/shipping">Shipping</router-link>
    <router-link to="/cart">Shopping cart</router-link>
    <br/>
    <br/>
    <route-wrapper></route-wrapper>
    <route-wrapper name="footer"></route-wrapper>
    <router-view name="modal"></router-view>
  </q-page>
</template>

<script>
// import routeWrapper from '../components/routeWrapper.js'
import myLayout from '../layouts/myLayout.vue'

export default {
  name: 'PageIndex',
  layout: myLayout
  // components: { routeWrapper }
}
</script>

<style lang="sass">
.box, %box
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  max-width: 400px;

#app
  @extend %box;

.product
  display: flex;
  align-items: flex-start;

.product__img
  display: inline-block;
  border: 1px dashed;
  padding: 20px;
  font-size: 25px;

.product__info
  padding: 0 20px;

.cart
  @extend %box;
  position: fixed;
  top: 100px;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: white;
  z-index: 2;

.shipping-calculator
  margin: 10px 0;

.glass
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.2);
  content: ' ';
  z-index: 1;

a
  //display: block;
  margin-right: 20px;

.footer
  margin-top: 30px;
</style>
