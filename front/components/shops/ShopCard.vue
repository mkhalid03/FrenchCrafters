<template>
  <div class="w-full mb-4">
      <div class="relative h-full rounded-lg block flex items-center bg-gray-100 shadow-xl border-gray-200 border-2">
        <div class="relative w-2/5 h-full overflow-hidden rounded-t-lg">
          <el-carousel
            class="rounded-bl-lg absolute inset-0 w-full h-full object-cover object-center"
            :autoplay="false"
            trigger="click"
            height="220px"
            arrow="never"
          >
            <el-carousel-item v-for="img in shop.image" :key="img.id">
              <div>
                <img alt="" :src="img.url" class="object-cover h-full w-full">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
          <div class="pr-24 pl-16 py-4">
            <p class="text-gray-600">
            <div @click="seeShop(shop.id)" class="text-gray-900 text-bold text-xl cursor-pointer">{{shop.name}}</div>
            <div class="text-gray-700 mt-2 description">{{shop.description}}</div>
            <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
              <span class="" @click="seeShop(shop.id)">Découvrir {{shop.name}}</span>
              <span class="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg class="block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12 z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ShopCard",
  props: {
    shop: {
      image: [],
      name: "",
      description: "",
      tags: []
    },
  },
  methods: {
    seeShop: function (shopId) {
      this.$router.push(`/shops/${shopId}`)
    },
  },
}
</script>

<style scoped>
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
</style>
