<template>
  <div>
      <div class="glass"></div>
      <div class="cart">
        You have some items in your cart
        <ul>
          <li>Awesome thing x 15 = 25$</li>
        </ul>
        <router-link :to="{name: 'calculator'}">Shipping Calculator</router-link>
        <router-view></router-view>
        <br/> <br/>
        <button @click="close">Close</button>
      </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(c => {
      c.$routerBookmark = c.$router.getBookmark()
    })
  },

  methods: {
    close () {
      console.log('called', this.$routerBookmark)
      this.$router.gotoBookmark(this.$routerBookmark)
    }
  }
}
</script>

<style scoped>

</style>
