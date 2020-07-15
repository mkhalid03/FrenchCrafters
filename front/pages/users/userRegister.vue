<template>
  <div class="bg-blue-800" style="height:94vh">
    <div class="pt-12">
      <client-only>
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-700 text-center font-mono">French Crafters</h2>
            <p class="text-xl text-gray-600 text-center">Bienvenue parmi nous!</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 lg:w-1/4"></span>
              <a class="text-xs text-center text-gray-500 uppercase">Créer un compte</a>
              <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div class="mt-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Adresse Email</label>
              <input v-model="email"
                     class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                     type="email">
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                <PasswordVerifySecurity @passwordChange="setPassword"/>
              </div>

            </div>
            <div class="mt-8">
              <button
                @click="handleSubmit"
                class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                M'inscrire
              </button>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <router-link :to="{ name: 'shop-register' }">
                <a class="text-xs text-gray-500 uppercase">Créer une boutique !</a>
              </router-link>
              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <router-link :to="{ name: 'login' }">
                <a class="text-xs text-gray-500 uppercase">Ou alors se connecter</a>
              </router-link>
              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
          <div class="hidden lg:block lg:w-1/2 bg-cover"
               style="background-image:url('https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
        </div>
      </client-only>
    </div>
  </div>

</template>

<script>
  import {mapMutations} from "vuex"
  import strapi from "~/utils/strapi"
  import PasswordVerifySecurity from "~/components/forms/elements/PasswordVerifySecurity"

  export default {
    head() {
      return {
        title: 'Inscription | FrenchCrafters',
        meta: [
          {hid: 'checkout', name: 'description', content: 'FrenchCrafters register page.'}
        ]
      }
    },
    components: {PasswordVerifySecurity},
    data() {
      return {
        email: "",
        password: "",
        username: "",
        loading: false,
      }
    },
    created() {
      if (this.$store.getters['auth/getUserInfo'].email && process.client) {
        $nuxt.$router.push('/')
      }
    },
    middleware: "logged",
    methods: {
      setPassword: function (pass) {
        this.password = pass
      },
      async handleSubmit() {
        if (this.password !== "" && this.password !== "" && this.password !== "") {
          try {
            this.loading = true
            await strapi.register(
              this.username,
              this.email,
              this.password
            )
            this.loading = false
            this.$router.push('/login')
          } catch (err) {
            this.loading = false
            alert(err.message || "An error occurred.")
          }
        }
      },
      ...mapMutations({
        setUser: "auth/setUser",
      }),
    },
  }
</script>
