<template>
  <div class="px-4">
    <div class="m-4 pt-8" >
      <ElButton @click="$router.go(-1)">
        go back
      </ElButton>
    </div>

    <h2 class="text-4xl ml-4 font-mono">{{shop.name}}</h2>
    <div class="w-2/3 ml-4 text-gray-800 mt-6 mb-12">
      {{shop.description}}
    </div>

    <el-divider content-position="left">Les articles disponibles chez {{shop.name}} :</el-divider>

    <client-only>
      <div class="px-24">
        <div class="w-full flex flex-wrap">
          <ProductCard :product="product" v-for="product in shop.products" :key="product.id"/>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import Cart from "~/components/Cart.vue"
  import ProductCard from "../../components/products/ProductCard";

  export default {
    head() {
      return {
        title: `${this.shop.name} | FrenchCrafters`,
        meta: [
          {hid: 'checkout', name: 'description', content: `FrenchCrafters shop page for ${this.shop.name}`}
        ]
      }
    },
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
