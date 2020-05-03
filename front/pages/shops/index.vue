<template>
  <div>
    <SearchBar />
    <p v-if="$fetchState.pending">Fetching shops...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else>
      <div v-for="shop in shops" :key="shop.id">
        {{ shop }}
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "~/components/SearchBar";
export default {
  components: {SearchBar},
  data() {
    return {
      shops: []
    }
  },
  async fetch() {
    this.shops = await this.$axios.$get(`/shops`)
  }
}
</script>
