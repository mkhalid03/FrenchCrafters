<template>
  <div>
    My Profile
    {{ user }}
    <form @submit.stop.prevent="updateInfo">
      <div>
        <label for="updateFirstName">Your First Name:</label>
        <input id="updateFirstName" v-model="firstname" />
      </div>
      <div>
        <label for="updateLastName">Your Last Name :</label>
        <input id="updateLastName" v-model="lastname" />
      </div>
      <div>
        <label for="updateTitle">Your Title :</label>
        <input id="updateTitle" v-model="title" />
      </div>
      <button type="submit">
        Update info
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      firstname: null,
      lastname: null,
      title: null,
    }
  },
  created() {
    if(process.browser){
      this.$store.dispatch('auth/fetchProfile', {jwt: localStorage.getItem("jwt").replace(/"/ig, "")})
    }
  },
  middleware: "auth",
  computed: {
    user() {
      return this.$store.getters["auth/getUserInfo"]
    },
  },
  methods: {
    updateInfo: function(){
      this.$store.dispatch('auth/updateProfile', {
        jwt: localStorage.getItem("jwt").replace(/"/ig, ""),
        body: {
          firstname: this.firstname,
          lastname: this.lastname,
          title: this.title,
        }
      })
    }
  }
}
</script>
