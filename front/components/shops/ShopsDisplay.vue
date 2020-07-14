<template>
  <div v-if="shops" class="my-8">
    <h2 class="text-2xl ml-4">Les Magasins :</h2>
    <div class="ml-4 text-gray-800 my-6">
      FrenchCrafters référence des magasins Français faisant du Made in France, et souhaitant vous partager leur univers, leur façon d'inover ainsi que leurs produits !
      <br />
      Chaque magasin est unique ! Découvrez ce que chacun a à vous proposer.
    </div>
    <div class="h-1"></div>
    <el-divider content-position="left">Nos Magasins partenaires :</el-divider>
    <div class="pl-4 pr-8 w-full flex flex-wrap">
      <ShopCard v-for="shop in shops" :key="shop.id" :shop="shop" />
    </div>
  </div>
</template>

<script>
  import ShopCard from "~/components/shops/ShopCard";

  export default {
    name: "ShopsDisplay",
    components: {ShopCard},
    props: {
      shops: null
    }
  }
</script>
