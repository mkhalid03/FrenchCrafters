<template>
  <div>
    <div v-if="!isSent">
      <form @submit.stop.prevent="submit">
        <label for="resetMail">Your account email :</label>
        <input id="resetMail" v-model="resetMail" type="email" >
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
    submit() {
      axios
        .post(`${process.env.backendUrl}/auth/forgot-password`, {
          email: this.resetMail,
          url: "/reset-password",
        })
        .then((response) => {
          console.log(response, "info-updated")
        })
        .catch((error) => {
          console.log("An error occurred:", error)
        })
    },
  },
}
</script>
