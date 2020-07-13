<template>
  <div>
    <client-only>
      <div v-if="price > 0">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Price (unit)</th>
            <th>
              Size
            </th>
            <th>Quantity</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, i) in selectedProducts" :key="i">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}€</td>
            <td v-if="product.sizes">
              {{ product.selectedSize ? product.selectedSize.name : "" }}
            </td>
            <td>{{ product.quantity }}</td>
            <td>
              <a>
                <span @click="addToCart(product)">+</span>
              </a>
              <a>
              <span style="background: #f0506e;" @click="removeFromCart(product)">
                -
              </span>
              </a>
            </td>
          </tr>
          </tbody>
        </table>

        <button name="button" @click="goToCheckout">
          Process to checkout ({{ price }}€)
        </button>
      </div>
    </client-only>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"

  export default {
    async created() {
      const products = this.$store.getters["cart/items"]
      if (products.length > 0) {
        const email = this.$store.getters['auth/getUserInfo'].email || null
        const owner = this.$store.getters['cart/getOwner']
        if (owner !== email) {
          await this.$store.dispatch('cart/resetCart')
          await this.$store.dispatch('cart/setOwner', email)
        }

        this.$store.commit('cart/setItems', await this.$axios.$post('/products/check', {products}))
      }
    },
    methods: {
      ...mapMutations({
        addToCart: "cart/add",
        removeFromCart: "cart/remove",
      }),
      goToCheckout() {
        this.$router.push("/orders/checkout")
      },
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      price() {
        return this.$store.getters["cart/price"]
      },
      numberOfItems() {
        return this.$store.getters["cart/numberOfItems"]
      },
      selectedProducts() {
        return this.$store.getters["cart/items"]
      },
    },
  }
</script>
