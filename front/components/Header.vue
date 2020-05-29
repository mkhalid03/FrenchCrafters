<template>
  <div>
    <client-only>
      <router-link tag="a" to="/" exact>
        Logo
      </router-link>
      <router-link tag="a" to="/search" exact>
        Search
      </router-link>
      <router-link tag="a" to="/profile" exact>
        Profile
      </router-link>

      {{ username }}

      <div v-if="username">
        <ul>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>

      <ul v-else>
        <li><a href="/register">Signup</a></li>
        <li><a href="/login">Signin</a></li>
      </ul>
    </client-only>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import Nav from "~/components/nav/Nav"

export default {
  components: { Nav },
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
