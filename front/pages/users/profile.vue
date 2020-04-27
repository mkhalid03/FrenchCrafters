<template>
  <div>
    My Profile
    {{ user }}
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["auth/getUserInfo"]
    },
  }
}
</script>
