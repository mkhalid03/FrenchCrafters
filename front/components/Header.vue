<template>
  <div>
    <client-only>
      <router-link tag="a" to="/" exact>
        Logo
      </router-link>
      <router-link tag="a" to="/shops" exact>
        Shops
      </router-link>
      <router-link tag="a" to="/profile" exact>
        Profile
      </router-link>

      {{username}}

      <ul v-if="username">
        <li><a href="#" @click="logout">Logout</a></li>
      </ul>

      <ul v-else>
        <li><a href="/register">Signup</a></li>
        <li><a href="/login">Signin</a></li>
      </ul>

    </client-only>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  computed: {
    username() {
      return this.$store.getters["auth/getUserInfo"].username
    },
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout",
    }),
  },
}
</script>
