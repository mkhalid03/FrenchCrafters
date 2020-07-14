<template>
  <div class="w-1/4 px-4 pb-4 mt-3">
    <div class="bg-white shadow-lg border-gray-200 border-2 rounded-lg">
      <div class="px-4 py-2">
        <div @click="seeProduct(product.id)" class="text-gray-900 font-bold text-2xl uppercase mt-1 cursor-pointer">{{product.name}}</div>
        <p class="text-gray-600 text-sm my-2 description">
          {{product.description}}
        </p>
      </div>
      <el-carousel :autoplay="false" trigger="click" height="220px">
        <el-carousel-item v-for="img in product.image" :key="img.id">
          <div>
            <img alt="" :src="img.url" class="object-cover h-full w-full">
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="rounded-b-lg items-center justify-between px-4 py-4 bg-gray-100">
        <div>
          <div>
            <span class="text-gray-600 text-sm">Catégorie :</span>
            <span class="text-gray-800 text-sm">{{product.category.title}}</span>
          </div>
          <span class="text-gray-600 text-sm">Vendu par :</span>
          <router-link class="hover:underline" :to="`/shops/${product.shop.id}`">
            <div class="text-gray-800 font-bold text-md">{{product.shop.name}}</div>
          </router-link>
        </div>
        <div class="text-right mt-2">
          <ElButton @click="seeProduct(product.id)">Voir l'article</ElButton>
        </div>
      </div>
    </div>
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
    }
  }
}
</script>

<style scoped>
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
</style>
