<template>
  <div>
    <div>
      <a @click="$router.go(-1)">go back</a>
      <span>{{ product.name }} {{ product.price }}€</span>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <button @click="addToCart(product)" >
        Add to cart
      </button>
      <Cart />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import Cart from "~/components/Cart.vue"

export default {
  components: {
    Cart,
  },
  data() {
    return {
      product: {},
    }
  },
  async fetch () {
    this.product = await this.$axios.$get(`/products/${this.$route.params.id}`)
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
}
</script>
