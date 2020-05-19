<template>
  <div>
    <el-select v-model="selectedCategory" clearable placeholder="Select">
      <el-option v-if="$fetchState.pending" value="Loading.."/>
      <el-option v-else-if="$fetchState.error" value="Error"/>
      <div v-else>
        <el-option-group
          key="search-global"
          label="En général">
          <el-option
            key="search-global-shop"
            label="Parmi les Magasins"
            value="shops">
          </el-option>
          <el-option
            key="search-global-products"
            label="Parmi les Produits"
            value="products">
          </el-option>
        </el-option-group>
        <el-option-group
          key="search"
          label="Types de Produits">
          <el-option
            v-for="item in categories"
            :key="item.id"
            :label="item.title"
            :value="item.id">
          </el-option>
        </el-option-group>
      </div>
    </el-select>

    <el-input
      placeholder="Que recherchez-vous ?"
      prefix-icon="el-icon-search"
      v-model="searchInput">
    </el-input>

    <el-button type="primary" @click="submitSearch" icon="el-icon-search">Recherche</el-button>

  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      selectedCategory: '',
      searchInput: '',
      categories: [],
    }
  },
  async fetch() {
    this.categories = await this.$axios.$get(`/categories`)
  },
  methods: {
    submitSearch: function() {
      this.$emit('submit', {
        category: this.selectedCategory,
        query: this.searchInput
      })
    }
  }
}
</script>
