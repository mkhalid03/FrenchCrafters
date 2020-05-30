<template>
  <div>
    <div v-if="$fetchState.pending">
      <SeeProductLoading />
    </div>
    <div v-else-if="$fetchState.error">
      {{ $fetchState.error.message }}
    </div>
    <div v-else>
      <ElButton @click="$router.go(-1)">
        go back
      </ElButton>
      <span>{{ product.name }} {{ product.price }}€</span>
      <p>{{ product.description }}</p>
      <ElSelect
        v-if="product.sizes.length"
        v-model="selectedSize"
        placeholder="Select Size"
        value-key="id"
      >
        <ElOption
          v-for="(size, i) in product.sizes"
          :key="i"
          :label="size.name"
          :value="{ id: size.id, name: size.name }"
          :disabled="size.stock === 0 && size.infinite === false"
        >
          <span style="float: left;">
            {{ size.name }}
          </span>
          <span
            v-if="size.infinite !== true && size.stock !== 0"
            style="float: right; color: #8492a6; font-size: 13px;"
          >
            {{ size.stock }} in Stock
          </span>
        </ElOption>
      </ElSelect>
    </div>
    <div>
      <ElButton @click="() => addToCart(product, selectedSize)">
        Add to cart
      </ElButton>
      <Cart />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import Cart from "~/components/Cart.vue"
import SeeProductLoading from "~/components/loading/SeeProductLoading"

export default {
  components: {
    SeeProductLoading,
    Cart,
  },
  async fetch() {
    this.product = await this.$axios.$get(`/products/${this.$route.params.id}`)
  },
  data() {
    return {
      product: {},
      selectedSize: null,
    }
  },
  methods: {
    ...mapMutations({
      add: "cart/add",
      removeFromCart: "cart/remove",
    }),
    addToCart: function (product) {
      if (product.sizes.length && this.selectedSize === null) return
      product.selectedSize = this.selectedSize
      this.add(product)
    },
  },
}
</script>
