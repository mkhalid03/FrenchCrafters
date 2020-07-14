<template>
    <div v-if="products" class="mt-8">
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
      <div v-if="products.length === 0" class="text-center mt-4">
        <div class="text-xl text-gray-800 text-bold">Oops.. Il semblerait qu'aucun produit ne corresponde à votre demande.</div>
        <div class="text-md text-gray-600">Vous devriez essayer d'effectuer une recherche avec moins de filtres.</div>
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
