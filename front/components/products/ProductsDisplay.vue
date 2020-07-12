<template>
    <div v-if="products">
      Products :
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
</template>

<script>
import ProductCard from "~/components/products/ProductCard";

export default {
  name: "ProductsDisplay",
  components: { ProductCard },
  props: {
    products: null
  },
}
</script>
