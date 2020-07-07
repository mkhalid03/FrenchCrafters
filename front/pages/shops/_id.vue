<template>
  <div>
    <ElButton @click="$router.go(-1)">
      go back
    </ElButton>

    <client-only>
      <div v-for="product in shop.products">
        <ProductCard :product="product" />
      </div>
      <Cart />
    </client-only>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import Cart from "~/components/Cart.vue"
import ProductCard from "../../components/products/ProductCard";

export default {
  components: {
    ProductCard,
    Cart,
  },
  async fetch() {
    this.shop = await this.$axios.$get(`/shops/${this.$route.params.id}`)
  },
  data() {
    return {
      shop: {},
    }
  },
  methods: {
    seeProduct: function (productId) {
      this.$router.push(`/products/${productId}`)
    },
  },
}
</script>
