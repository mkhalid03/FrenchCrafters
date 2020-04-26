<template>
  <div>
    <div>
      <label>New Password</label>
      <input v-model="password1" @change="passChange" type="password">
      <client-only>
        <Password @score="setScore" v-model="password1" :strength-meter-only="true"/>
      </client-only>
    </div>

    <div>
      <label>Repeat Password</label>
      <input v-model="password2" @change="passChange" type="password">
    </div>

  </div>
</template>

<script>
  import Password from 'vue-password-strength-meter'

  export default {
    data: () => ({
      password1: null,
      password2: null,
      score: 0
    }),
    components: { Password },
    methods: {
      setScore: function(score){
        this.score = score
      },
      passChange: function(){
        if(this.score >= 3){
          console.log(this.password1, this.password2, this.password1 === this.password2)
          if(this.password1 === this.password2){
            this.$emit('passwordChange', this.password1)
            console.log("good")
          } else {
            // TODO: Return msg not same pass
            this.$emit('passwordChange', null)
            console.log("not equal!!")
          }
        }
        else {
          // TODO: Return msg better pass
          this.$emit('passwordChange', null)
          console.log("STRONGER!!")
        }
      }
    }
  }
</script>
