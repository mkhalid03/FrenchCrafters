<template>
  <div>
    {{JSON.stringify(this.company)}}
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
