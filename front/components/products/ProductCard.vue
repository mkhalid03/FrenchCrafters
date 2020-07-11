<template>
  <div>
    <img width="200" :src="getImageUrl()" alt="" />
    <div>{{ product.name }}</div>
    <div>{{ product.description }}</div>
    <div v-if="product.shop.name">Seller : {{ product.shop.name }}</div>
    <div v-if="product.category.title">Seen in Category : {{ product.category.title }}</div>
    <ElButton @click="seeProduct(product.id)">
      See more
    </ElButton>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      image: [],
      name: "",
      description: "",
      shop: {},
      category: {},
    },
  },
  methods: {
    seeProduct: function (productId) {
      this.$router.push(`/products/${productId}`)
    },
    getImageUrl: function () {
      try {
        return this.product.image[0].url
      } catch {
        return "https://designshack.net/wp-content/uploads/placeholder-image.png"
      }
    },
  },
}
</script>
