<template>
    <div v-if="shops">
      Shops :
      <div v-for="shop in shops" :key="shop.id">
        <ShopCard :shop="shop" />
      </div>
    </div>
</template>

<script>
import ShopCard from "~/components/shops/ShopCard";

export default {
  name: "ShopsDisplay",
  components: { ShopCard },
  props: {
    shops: null
  },
}
</script>
