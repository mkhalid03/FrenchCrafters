<template>
  <div class="w-full">
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
      <el-input
        v-model="password1"
        type="password"
        @change="passChange"
        placeholder="••••••••••"
      />
      <client-only>
        <Password
          v-model="password1"
          :strength-meter-only="true"
          @score="setScore"
        />
      </client-only>
    </div>

    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2">Répéter le Mot de passe</label>
      <el-input
        v-model="password2"
        type="password"
        @change="passChange"
        placeholder="••••••••••"
      />
    </div>
  </div>
</template>

<script>
import Password from "vue-password-strength-meter"

export default {
  name: "PasswordVerifySecurity",
  components: { Password },
  data: () => ({
    password1: null,
    password2: null,
    score: 0,
  }),
  methods: {
    setScore: function (score) {
      this.score = score
    },
    passChange: function () {
      if (this.score >= 3) {
        console.log(
          this.password1,
          this.password2,
          this.password1 === this.password2
        )
        if (this.password1 === this.password2) {
          this.$emit("passwordChange", this.password1)
        } else {
          this.$emit("passwordChange", null)
          this.$message('Les 2 mots de passe ne sont pas identiques')
        }
      } else {
        this.$emit("passwordChange", null)
        this.$message('Votre mot de passe doit être plus sécurisé ! (couleur verte)')
      }
    },
  },
}
</script>
