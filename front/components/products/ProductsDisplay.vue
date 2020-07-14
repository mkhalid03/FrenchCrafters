<template>
    <div v-if="products">
      <h2 class="text-2xl ml-4">Les produits :</h2>
      <div class="ml-4 text-gray-800 my-6">
        FrenchCrafters propose à ses partenaires de vendre sur la plateforme leurs produits phares !
        <br />
        Retrouvez des produits de très bonne qualité, et toujours Made in France !
      </div>
      <div class="h-1"></div>
      <el-divider content-position="left">Résultats de votre Recherche :</el-divider>
      <div class="w-full flex flex-wrap">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
