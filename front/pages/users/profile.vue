<template>
  <div>
    My Profile
    {{ user }}
    <form ref="editProfile" @submit.stop.prevent="updateInfo">
      <div>
        <label for="updateFirstName">Your First Name:</label>
        <input id="updateFirstName" name="firstname" v-model="firstname" />
      </div>
      <div>
        <label for="updateLastName">Your Last Name :</label>
        <input id="updateLastName" name="lastname" v-model="lastname" />
      </div>
      <div>
        <label for="updateTitle">Your Title :</label>
        <input id="updateTitle" name="title" v-model="title" />
      </div>
      <div>
        <label for="updateProfilePicture">Your New Picture image :</label>
        <input id="updateProfilePicture" name="files" type="file"/>
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
      let form = this.$refs["editProfile"];
      let formData = new FormData(form);
      this.$store.dispatch('auth/updateProfile', {
        jwt: localStorage.getItem("jwt").replace(/"/ig, ""),
        body: formData,
        userId: this.$store.getters['auth/getUserId']
      })
    }
  }
}
</script>
