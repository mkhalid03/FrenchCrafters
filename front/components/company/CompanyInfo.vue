<template>
  <div class="border border-gray-400 rounded-lg p-2 mt-4">
    <span class="block text-gray-700 text-sm font-bold mb-2">S'agit-il de votre entreprise ?</span>
    <div v-if="company.denomination_usuelle">
      <span class="text-sm">{{company.denomination_usuelle}}</span>
    </div>
    <div v-if="company.geo_adresse">
      <span class="text-sm">{{company.geo_adresse}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",
  props: {
    company: null
  }
}
</script>
