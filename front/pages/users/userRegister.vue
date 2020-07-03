<template>
  <div>
    <form>
      <div>
        <label for="username">Username</label>
        <ElInput
          id="username"
          v-model="username"
          type="text"
          placeholder="Name"
        />
      </div>

      <div>
        <label for="email">Email</label>
        <ElInput
          id="email"
          v-model="email"
          type="email"
          placeholder="paul.bocuse@gmail.com"
        />
      </div>

      <PasswordVerifySecurity @passwordChange="setPassword" />

      <div>
        <ElButton @click="handleSubmit">
          Submit
        </ElButton>
      </div>

      <div>
        Already have an account?
        <router-link :to="{ name: 'login' }">
          Login
        </router-link>
      </div>
      <div>
        You are a Company ?
        <router-link :to="{ name: 'shop-register' }">
          Register as a merchant
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import strapi from "~/utils/strapi"
import PasswordVerifySecurity from "~/components/forms/elements/PasswordVerifySecurity"

export default {
  components: { PasswordVerifySecurity },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      loading: false,
    }
  },
  middleware: "logged",
  methods: {
    setPassword: function (pass) {
      this.password = pass
    },
    async handleSubmit() {
      if(this.password !== "" && this.password !== "" && this.password !== "") {
        try {
          this.loading = true
          await strapi.register(
            this.username,
            this.email,
            this.password
          )
          this.loading = false
          this.$router.push('/login')
        } catch (err) {
          this.loading = false
          alert(err.message || "An error occurred.")
        }
      }
    },
    ...mapMutations({
      setUser: "auth/setUser",
    }),
  },
}
</script>
