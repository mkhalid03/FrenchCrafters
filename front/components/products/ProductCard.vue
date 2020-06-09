<template>
  <div>
    <img width="200" :src="getImageUrl()" alt="" />
    <div>{{ product.name }}</div>
    <div>{{ product.description }}</div>
    <div>Seller : {{ product.shop.name }}</div>
    <div>Seen in Category : {{ product.category.title }}</div>
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
        return process.env.backendUrl + this.product.image[0].url
      } catch {
        return "https://designshack.net/wp-content/uploads/placeholder-image.png"
      }
    },
  },
}
</script>
