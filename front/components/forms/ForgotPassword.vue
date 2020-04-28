<template>
  <div>
    <div v-if="!isSent">
      <form @submit.stop.prevent="sendResetMail">
        <label for="resetMail">Your account email :</label>
        <input id="resetMail" v-model="resetMail" type="email" />
        <button type="submit">
          Reset my password
        </button>
      </form>
    </div>
    <div v-else>
      Mail Sent !
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data: function () {
    return {
      isSent: false,
      resetMail: "",
    }
  },
  methods: {
    sendResetMail() {
      axios
        .post(`${process.env.backendUrl}/auth/forgot-password`, {
          email: this.resetMail,
          url: "/reset-password",
        })
        .then((response) => {
          // Handle success.
          console.log("Your user received an email")
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error)
        })
    },
  },
}
</script>
