<template>
  <div>
    <ElButton @click="$router.go(-1)">
      go back
    </ElButton>

    <client-only>
      <div v-for="product in shop.products" class="uk-margin">
        <div>
          <span>{{ product.name }} {{ product.price }}€</span>
          <p>{{ product.description }}</p>
        </div>
        <div class="uk-card-footer">
          <button @click="addToCart(product)">
            Add to cart
          </button>
        </div>
      </div>
      <Cart />
    </client-only>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import Cart from "~/components/Cart.vue"

export default {
  components: {
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
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
}
</script>
