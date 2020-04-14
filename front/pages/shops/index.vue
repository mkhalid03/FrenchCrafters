<template>
  <div>
    <input v-model="query" type="search" placeholder="Search...">

    <div v-for="shop in filteredList" v-bind:key="shop.id">
      {{ shop }}
    </div>

    <div v-if="filteredList.length === 0">
      <p>No results</p>
    </div>
  </div>
</template>

<script>
  import shopsQuery from '~/apollo/queries/shop/shops.gql'

  export default {
    data() {
      return {
        shops: [],
        query: ''
      }
    },
    apollo: {
      shops: {
        prefetch: true,
        query: shopsQuery
      }
    },
    computed: {
      filteredList() {
        return this.shops.filter(shop => {
          return shop.name.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    }
  }
</script>
