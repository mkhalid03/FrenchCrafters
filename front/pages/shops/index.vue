<template>
  <div>
    <div v-for="shop in shops" :key="shop.id">
      {{ shop }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      shops: []
    }
  },
  async fetch () {
    const { data } = await axios.get(`${process.env.backendUrl}/shops`)
    this.shops = data
  },
  fetchOnServer: true
}
</script>
