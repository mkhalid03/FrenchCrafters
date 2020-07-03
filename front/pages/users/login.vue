<template>
  <div>
    <div>
      <form @submit.stop.prevent="handleSubmit">
        <ElButton>
          Sign in
        </ElButton>

        <div>
          <label>Email</label>
          <ElInput
            v-model="email"
            type="email"
            placeholder="my-email@gmail.com"
          />
        </div>

        <div>
          <label>Password</label>
          <ElInput
            v-model="password"
            type="password"
            show-password
            placeholder="••••••••"
          />
        </div>

        <div>
          <ElButton :disabled="loading" type="submit">
            Submit
          </ElButton>
        </div>

        <div>
          <p>
            No account yet?
            <router-link :to="{ name: 'user-register' }">
              Register
            </router-link>
          </p>
        </div>
      </form>

      <div>
        <button @click="forgotMyPassword">
          I forgot my password
        </button>
        <ForgotPassword v-if="forgottenPassword" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import strapi from "~/utils/strapi"
import ForgotPassword from "~/components/forms/ForgotPassword"

export default {
  components: { ForgotPassword },
  middleware: "logged",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      forgottenPassword: false,
    }
  },
  methods: {
    forgotMyPassword() {
      this.forgottenPassword = true
    },
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(this.email, this.password)
        this.loading = false
        this.setUser(response.user)
        this.$router.go('home')
      } catch (err) {
        this.loading = false
        alert(JSON.stringify(err.message) || "An error occurred.")
      }
    },
    ...mapMutations({
      setUser: "auth/setUser",
    }),
  },
}
</script>
