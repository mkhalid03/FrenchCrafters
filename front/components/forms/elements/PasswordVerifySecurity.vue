<template>
  <div>
    <div>
      <label>New Password</label>
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
      <label>Repeat Password</label>
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
          console.log("good")
        } else {
          // TODO: Return msg not same pass
          this.$emit("passwordChange", null)
          console.log("not equal!!")
        }
      } else {
        // TODO: Return msg better pass
        this.$emit("passwordChange", null)
        console.log("STRONGER!!")
      }
    },
  },
}
</script>
