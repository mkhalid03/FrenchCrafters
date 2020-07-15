<template>
  <div>
    <label for="resetMail">Email de votre compte :</label>
    <ElInput class="mb-4" id="resetMail" v-model="resetMail" type="email"/>
    <ElButton type="primary" @click="sendResetMail">
      Réinitialiser mon Mot de passe !
    </ElButton>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data: function () {
      return {
        resetMail: "",
      }
    },
    methods: {
      sendResetMail() {
        if(this.resetMail === "")
        axios
          .post(`${process.env.backendUrl}/auth/forgot-password`, {
            email: this.resetMail,
            url: "/reset-password",
          })
          .then((response) => {
            this.$message('Un mail a été envoyé à cette adresse');
          })
          .catch((error) => {
            this.$message('Une erreur est survenue durant la réinialisation. Votre email est-il valide ?');
          })
      },
    },
  }
</script>
