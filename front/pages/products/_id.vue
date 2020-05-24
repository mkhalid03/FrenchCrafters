<template>
  <div>
    <div>
      <ElButton @click="$router.go(-1)">go back</ElButton>
      <span>{{ product.name }} {{ product.price }}€</span>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <ElButton @click="addToCart(product)" >
        Add to cart
      </ElButton>
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
