<template>
  <div>
    <div v-if="company.denomination_usuelle">
      <span>{{company.denomination_usuelle}}</span>
    </div>
    <div v-if="company.geo_adresse">
      <span>{{company.geo_adresse}}</span>
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
