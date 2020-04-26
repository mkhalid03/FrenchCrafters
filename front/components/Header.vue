<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/" exact>
              Logo
            </router-link>
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/shops" exact>
              Shops
            </router-link>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul v-if="username" class="uk-navbar-nav">
          <li><a href="#" @click="logout">Logout</a></li>
        </ul>

        <ul v-else class="uk-navbar-nav">
          <li><a href="/register">Signup</a></li>
          <li><a href="/login">Signin</a></li>
        </ul>
      </div>
    </nav>
  </client-only>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  computed: {
    username() {
      return this.$store.getters["auth/username"]
    },
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout",
    }),
  },
}
</script>
