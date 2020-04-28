<template>
  <div class="uk-card uk-card-default uk-card-large uk-card-body">
    <form @submit.stop.prevent="handleSubmit">
      <div class="uk-margin">
        <label for="username">Username</label>
        <input
          v-model="username"
          id="username"
          type="text"
          placeholder="Name"
        />
      </div>

      <div class="uk-margin">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="paul.bocuse@gmail.com"
        />
      </div>

      <PasswordVerifySecurity @passwordChange="setPassword" />

      <div>
        <button
          :disabled="loading"
          type="submit"
        >
          Submit
        </button>
      </div>

      <div>
        Already have an account?
        <router-link :to="{ name: 'login' }">
          Login
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import strapi from "~/utils/strapi"
import PasswordVerifySecurity from "~/components/forms/elements/PasswordVerifySecurity";

export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      loading: false,
    }
  },
  middleware: "logged",
  components: { PasswordVerifySecurity },
  methods: {
    setPassword: function(pass) {
      this.password = pass
    },
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.go(-1)
      } catch (err) {
        this.loading = false
        alert(err.message || "An error occurred.")
      }
    },
    // Define all your needed mutations, here: auth/setUser
    ...mapMutations({
      setUser: "auth/setUser",
    }),
  },
}
</script>
