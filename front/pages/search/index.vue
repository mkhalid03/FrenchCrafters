<template>
  <div>
    <SearchBar @submit="triggerSearch" />
    <div v-if="$fetchState.pending">
      <SearchResultsLoading />
    </div>
    <div v-else-if="$fetchState.error">{{ $fetchState.error.message }}</div>
    <div v-else>
      <div v-if="loading">
        <SearchResultsLoading />
      </div>
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
  </div>
</template>

<script>
import SearchBar from "~/components/nav/SearchBar";
import SearchResultsLoading from "../../components/loading/SearchResultsLoading";
export default {
  components: {SearchResultsLoading, SearchBar},
  data() {
    return {
      results: {
        shops: [],
        products: [],
      },
      loading: false
    }
  },
  async fetch() {
    this.results = await this.$axios.$get(`/search/all`)
  },
  methods: {
    triggerSearch: function(opt) {
      this.loading = false
      if(opt.category === "") {
        this.$axios.$post(`/search/all`, {
          query: opt.query
        }).then(res => {
          this.results = res
          this.loading = false
        })
      } else if(opt.category === "products") {
        this.$axios.$post(`/search/products`, {
          query: opt.query
        }).then(res => {
          this.results = res
          this.loading = false
        })
      } else if(opt.category === "shops") {
        this.$axios.$post(`/search/shops`, {
          query: opt.query
        }).then(res => {
          this.results = res
          this.loading = false
        })
      } else {
        this.$axios.$post(`/search/all`, {
          query: opt.query,
          categories: [opt.category],
        }).then(res => {
          this.results = res
          this.loading = false
        })
      }
    }
  }
}
</script>
