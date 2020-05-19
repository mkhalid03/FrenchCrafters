<template>
  <div>
    <SearchBar @submit="triggerSearch" />
    <p v-if="$fetchState.pending">Fetching shops...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else>
      Shops :
      <div v-for="shop in results.shops" :key="shop.id">
        {{ shop }}
      </div>
      Products :
      <div v-for="product in results.products" :key="product.id">
        {{ product }}
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "~/components/nav/SearchBar";
export default {
  components: {SearchBar},
  data() {
    return {
      results: {
        shops: [],
        products: [],
      }
    }
  },
  async fetch() {
    this.results = await this.$axios.$get(`/search/all`)
  },
  methods: {
    triggerSearch: function(opt) {
      if(opt.category === null) {
        this.$axios.$post(`/search/all`, {
          query: opt.query
        }).then(res => {
          this.results = res
        })
      } else if(opt.category === "products") {
        this.$axios.$post(`/search/products`, {
          query: opt.query
        }).then(res => {
          this.results = res
        })
      } else if(opt.category === "shops") {
        this.$axios.$post(`/search/shops`, {
          query: opt.query
        }).then(res => {
          this.results = res
        })
      } else {
        this.$axios.$post(`/search/shops`, {
          query: opt.query,
          categories: [opt.category],
        }).then(res => {
          this.results = res
        })
      }

      this.$axios.$post(`/search/all`, {
        query: opt.query,
        categories: opt.category === "" ? null : [opt.category]
      }).then(res => {
        this.results = res
      })
    }
  }
}
</script>
