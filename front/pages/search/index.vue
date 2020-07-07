<template>
  <div>
    <div v-if="$fetchState.pending">
      <SearchResultsLoading />
    </div>
    <div v-else-if= "$fetchState.error">
      {{ $fetchState.error.message }}
    </div>
    <div v-else>
      <div v-if="loading">
        <SearchResultsLoading />
      </div>
      <div v-else>
        <div class="flex">
          <div class="w-1/5">
            <SearchBar
              class="fixed w-1/5 px-4"
              @submit="triggerSearch"
            />
          </div>
          <div class="w-4/5">
            <div v-if="results.shops">
              Shops :
              <div v-for="shop in results.shops" :key="shop.id">
                <ShopCard :shop="shop" />
              </div>
            </div>
            <div v-if="results.products">
              Products :
              <div v-for="product in results.products" :key="product.id">
                <ProductCard :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "~/components/nav/SearchBar"
import SearchResultsLoading from "~/components/loading/SearchResultsLoading"
import ProductCard from "~/components/products/ProductCard"
import ShopCard from "~/components/shop/ShopCard"

export default {
  components: { ProductCard, SearchResultsLoading, SearchBar, ShopCard },
  async fetch() {
    this.results = await this.$axios.$get(`/search/all`)
  },
  data() {
    return {
      results: {
        shops: [],
        products: [],
      },
      loading: false,
    }
  },
  methods: {
    triggerSearch: function (opt) {
      this.loading = false
      if (opt.category === "") {
        this.$axios
          .$post(`/search/all`, {
            query: opt.query,
            targets: opt.targets,
          })
          .then((res) => {
            this.results = res
            this.loading = false
          })
      } else if (opt.category === "products") {
        this.$axios
          .$post(`/search/products`, {
            query: opt.query,
            targets: opt.targets,targets: opt.targets,
          })
          .then((res) => {
            this.results = res
            this.loading = false
          })
      } else if (opt.category === "shops") {
        this.$axios
          .$post(`/search/shops`, {
            query: opt.query,
            targets: opt.targets,
          })
          .then((res) => {
            this.results = res
            this.loading = false
          })
      } else if (opt.category !== null) {
        this.$axios
          .$post(`/search/products`, {
            query: opt.query,
            targets: opt.targets,
            categories: [opt.category],
          })
          .then((res) => {
            this.results = res
            this.loading = false
          })
      } else {
        this.$axios
          .$post(`/search/all`, {
            query: opt.query,
            targets: opt.targets,
            categories: [opt.category],
          })
          .then((res) => {
            this.results = res
            this.loading = false
          })
      }
    },
  },
}
</script>
