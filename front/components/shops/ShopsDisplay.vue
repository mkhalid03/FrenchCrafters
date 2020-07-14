<template>
  <div v-if="shops" class="mt-8">
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
    <div v-if="shops.length === 0" class="text-center mt-4">
      <div class="text-xl text-gray-800 text-bold">Oops.. Il semblerait qu'aucun magasin ne corresponde à votre demande.</div>
      <div class="text-md text-gray-600">Les mots recherchés ne sont peut-être liés à aucun magasin. Tentez une recherche avec des termes plus génériques ?</div>
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
