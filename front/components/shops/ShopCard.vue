<template>
  <div>
    <img width="200" :src="getImageUrl()" alt="" />
    <div>{{ shop.name }}</div>
    <div>{{ shop.description }}</div>
    <div v-if="shop.tags">Tags :
      <span v-for="tag in shop.tags">{{tag.name}}</span>
    </div>
    <ElButton @click="seeShop(shop.id)">
      See this shop
    </ElButton>
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
    getImageUrl: function () {
      try {
        return process.env.backendUrl + this.shop.image[0].url
      } catch {
        return "https://designshack.net/wp-content/uploads/placeholder-image.png"
      }
    },
  },
}
</script>
