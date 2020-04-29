<template>
  <div>
    My Profile
    {{ user }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      query: "",
    }
  }
}
</script>
