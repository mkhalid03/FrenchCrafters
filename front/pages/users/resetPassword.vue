<template>
  <div>
    <div>
      <form @submit.stop.prevent="handleSubmit">
        <legend class="uk-legend">
          Reset Password
        </legend>

        <PasswordVerifySecurity @passwordChange="setPassword" />

        <div>
          <button :disabled="loading" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import PasswordVerifySecurity from "~/components/forms/elements/PasswordVerifySecurity"

export default {
  components: { PasswordVerifySecurity },
  data() {
    return {
      password: "",
      loading: false,
    }
  },
  methods: {
    setPassword: function (pass) {
      this.password = pass
    },
    async handleSubmit() {
      try {
        this.loading = true
        if (this.password !== null) {
          axios
            .post(`${process.env.backendUrl}/auth/reset-password`, {
              code: this.$route.params.token,
              password: this.password,
              passwordConfirmation: this.password,
            })
            .then((response) => {
              console.log("Your user's password has been changed.")
            })
            .catch((error) => {
              console.log("An error occurred:", error)
            })
        } else {
          this.loading = false
          alert("Pas identique")
        }
      } catch (err) {
        this.loading = false
        alert(err.message || "An error occurred.")
      }
    },
  },
}
</script>
