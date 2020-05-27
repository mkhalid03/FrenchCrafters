<template>
  <div>
    <div>
      <ElButton @click="$router.go(-1)">go back</ElButton>
      <span>{{ product.name }} {{ product.price }}€</span>
      <p>{{ product.description }}</p>
      <ElSelect
        v-model="size"
        placeholder="Select Size"
        value-key='id'
      >
        <ElOption
          v-for="size in product.sizes"
          :label="size.name"
          :value="{id: size.id, name: size.name}"
          :disabled="size.stock === 0 && size.infinite === false"
        >
          <span style="float: left">
            {{ size.name }}
          </span>
          <span v-if="size.infinite !== true && size.stock !== 0" style="float: right; color: #8492a6; font-size: 13px">
            {{ size.stock }} in Stock
          </span>
        </ElOption>
      </ElSelect>
    </div>
    <div>
      <ElButton @click="addToCart(product, size)" >
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
      size: null,
    }
  },
  async fetch () {
    this.product = await this.$axios.$get(`/products/${this.$route.params.id}`)
  },
  methods: {
    ...mapMutations({
      add: "cart/add",
      removeFromCart: "cart/remove",
    }),
    addToCart: function(product, v) {
      product.size = v
      this.add(product)
    }
  },
}
</script>
