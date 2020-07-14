<template>
  <div>
    <div class="flex">
      <div class="w-1/5">
        <SearchBar
          class="fixed w-1/5 px-4"
          @submit="triggerSearch"
        />
      </div>
      <div class="w-4/5 pl-4 mb-16">
        <div v-if="$fetchState.pending || loading">
          <SearchResultsLoading/>
        </div>
        <div v-else-if="$fetchState.error">
          {{ $fetchState.error.message }}
        </div>
        <div v-else>
          <ShopsDisplay :shops="results.shops"/>
          <ProductsDisplay :products="results.products"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchBar from "~/components/nav/SearchBar"
  import SearchResultsLoading from "~/components/loading/SearchResultsLoading"
  import ProductsDisplay from "~/components/products/ProductsDisplay";
  import ShopsDisplay from "~/components/shops/ShopsDisplay";

  export default {
    head() {
      return {
        title: 'Recherche | FrenchCrafters',
        meta: [
          {hid: 'checkout', name: 'description', content: 'FrenchCrafters search page'}
        ]
      }
    },
    components: {ProductsDisplay, SearchResultsLoading, SearchBar, ShopsDisplay},
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
              targets: opt.targets,
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
