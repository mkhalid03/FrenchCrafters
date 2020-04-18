<template>
  <div>

    <div class="uk-child-width-1-2@m uk-grid">
          <form @submit.stop.prevent="handleSubmit">
              <legend class="uk-legend">Sign in</legend>

              <div class="uk-margin">
                <label>Email</label>
                <input v-model="email" type="email" placeholder="my-email@gmail.com">
              </div>

              <div class="uk-margin">
                <label>Password</label>
                <input v-model="password" type="password">
              </div>

              <div>
                <button :disabled="loading" type="submit">Submit</button>
              </div>

              <div class="uk-margin">
                <p>
                  No account yet?
                  <router-link :to="{ name: 'users-register'}">
                    Register
                  </router-link>
                </p>
              </div>
          </form>

        <div>
          <button @click="forgotMyPassword">I forgot my password</button>
          <ForgotPassword v-if="forgottenPassword" />
        </div>

        </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import strapi from '~/utils/strapi'
  import ForgotPassword from "~/components/ForgotPassword";

  export default {
    components: { ForgotPassword },
    data() {
      return {
        email: '',
        password: '',
        loading: false,
        forgottenPassword: false
      }
    },
    methods: {
      forgotMyPassword() {
        this.forgottenPassword = true
      },
      async handleSubmit() {
        try {
          this.loading = true
          const response = await strapi.login(
            this.email,
            this.password
          )
          this.loading = false
          this.setUser(response.user)
          this.$router.go(-1)
        } catch (err) {
          this.loading = false
          alert(err.message || 'An error occurred.')
        }
      },
      ...mapMutations({
        setUser: 'auth/setUser'
      })
    }
  }
</script>
