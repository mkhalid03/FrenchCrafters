<template>
  <div class="p-8">
    <span class="text-bold text-2xl text-gray-800">Espace Utilisateur :</span>
    <el-tabs type="border-card" class="mt-6">
      <el-tab-pane label="Mon profil">

        <div class="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-md mx-auto">
          <div class="relative h-40">
            <img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80">
          </div>
          <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80">
          </div>
          <div class="mt-16">
            <h1 class="text-lg text-center font-semibold">{{user.firstName}} {{user.lastName}}</h1>
            <p class="text-sm text-gray-600 text-center">{{user.title}}</p>
          </div>
        </div>

      </el-tab-pane>

      <el-tab-pane label="Modifier mon Profil">
        <label for="updateFirstName">Prénom:</label>
        <ElInput id="updateFirstName" :placeholder="user.firstName" v-model="firstname" name="firstname"/>

        <label for="updateLastName">Nom:</label>
        <ElInput id="updateLastName" :placeholder="user.lastName" v-model="lastname" name="lastname"/>

        <label for="updateTitle">Titre d'affichage:</label>
        <ElInput id="updateTitle" :placeholder="user.title" v-model="title" name="title"/>

        <ElButton type="primary" class="mt-6" @click="updateInfo">
          Update info
        </ElButton>
      </el-tab-pane>

      <el-tab-pane label="Mes commandes">
        <OrdersList/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import OrdersList from "~/components/orders/OrdersList"

  export default {
    head() {
      return {
        title: `${this.user.username} Profile | FrenchCrafters`,
        meta: [
          {hid: 'checkout', name: 'description', content: `FrenchCrafters profile page for ${this.user.name}`}
        ]
      }
    },
    components: {OrdersList},
    data: function () {
      return {
        firstname: null,
        lastname: null,
        title: null,
      }
    },
    computed: {
      user: function () {
        return this.$store.getters["auth/getUserInfo"]
      },
    },
    created() {
      if (process.browser) {
        try {
          const jwt = localStorage.getItem("jwt").replace(/"/gi, "")
          this.$store.dispatch("auth/fetchProfile", {jwt})
          this.$store.dispatch("user/fetchOrders", {jwt})
        } catch {
          this.$store.commit("auth/logout")
        }
      }
    },
    middleware: "auth",
    methods: {
      updateInfo: function () {
        let form = this.$refs["editProfile"]
        let formData = new FormData(form)
        this.$store.dispatch("auth/updateProfile", {
          jwt: localStorage.getItem("jwt").replace(/"/gi, ""),
          body: formData,
          userId: this.$store.getters["auth/getUserId"],
        })
      },
    },
  }
</script>
