<template>
  <div>
    <a @click="$router.go(-1)">go back</a>

    <client-only>
          <div v-for="product in shop.products">
            {{product}}
          </div>
    </client-only>
  </div>
</template>

<script>
import shopQuery from '~/apollo/queries/shop/shop'

export default {
  data() {
    return {
      shop: Object
    }
  },
  apollo: {
    shop: {
      prefetch: true,
      query: shopQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
