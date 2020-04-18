<template>
  <div>

    <div>
          <form @submit.stop.prevent="handleSubmit">
              <legend class="uk-legend">Reset Password</legend>

              <div>
                <label>New Password</label>
                <input v-model="password1" type="password">
              </div>

              <div>
                <label>Repeat Password</label>
                <input v-model="password2" type="password">
              </div>

              <div>
                <button :disabled="loading" type="submit">Submit</button>
              </div>

          </form>
        </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      password1: '',
      password2: '',
      loading: false,
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        if(this.password1 === this.password2){
          axios
            .post(`${process.env.backendUrl}/auth/reset-password`, {
              code: this.$route.params.token,
              password: this.password1,
              passwordConfirmation: this.password2
            })
            .then(response => {
              console.log('Your user\'s password has been changed.');
            })
            .catch(error => {
              console.log('An error occurred:', error);
            });
        } else {
          this.loading = false
          alert('Pas identique')
        }
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    }
  }
}
</script>
