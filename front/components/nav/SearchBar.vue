<template>
  <div>
    <el-select class="w-full" v-model="selectedCategory" clearable placeholder="Catégories">
      <el-option v-if="$fetchState.pending" value="Loading.." />
      <el-option v-else-if="$fetchState.error" value="Error" />
      <div v-else>
        <el-option-group key="search-global" label="En général">
          <el-option
            key="search-global-shop"
            label="Parmi les Magasins"
            value="shops"
          />
          <el-option
            key="search-global-products"
            label="Parmi les Produits"
            value="products"
          />
        </el-option-group>
        <el-option-group key="search" label="Types de Produits">
          <el-option
            v-for="item in categories"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          />
        </el-option-group>
      </div>
    </el-select>

    <el-input
      class="my-3"
      v-model="searchInput"
      placeholder="Que recherchez-vous ?"
      prefix-icon="el-icon-search"
    />

    <el-checkbox-group v-model="targets" class="mb-3">
      <el-checkbox label="man" >Homme</el-checkbox>
      <el-checkbox label="woman">Femme</el-checkbox>
      <el-checkbox label="kid">Enfant</el-checkbox>
    </el-checkbox-group>

    <el-button type="primary" icon="el-icon-search" @click="submitSearch">
      Recherche
    </el-button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  async fetch() {
    this.categories = await this.$axios.$get(`/categories`)
  },
  data() {
    return {
      selectedCategory: "",
      searchInput: "",
      categories: [],
      targets: []
    }
  },
  methods: {
    submitSearch: function () {
      this.$emit("submit", {
        category: this.selectedCategory,
        query: this.searchInput,
        targets: this.targets,
      })
    },
  },
}
</script>
