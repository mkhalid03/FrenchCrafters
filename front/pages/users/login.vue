<template>
  <div class="pt-12">
    <client-only>
      <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="hidden lg:block lg:w-1/2 bg-cover"
             style="background-image:url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"></div>
        <div class="w-full p-8 lg:w-1/2">
          <h2 class="text-2xl font-semibold text-gray-700 text-center font-mono">French Crafters</h2>
          <p class="text-xl text-gray-600 text-center">Ravi de vous revoir!</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 lg:w-1/4"></span>
            <a class="text-xs text-center text-gray-500 uppercase">Se connecter</a>
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
              <label class="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
              <a @click="forgottenPassword = true" class="text-xs text-gray-500 cursor-pointer hover:underline">Mot de
                Passe oublié ?</a>

              <el-dialog title="Réinitialiser mon mot de passe" :visible.sync="forgottenPassword">
                <ForgotPassword/>
              </el-dialog>

            </div>
            <input v-model="password"
                   class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                   type="password">
          </div>
          <div class="mt-8">
            <button @click="handleSubmit"
                    class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Me connecter
            </button>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 md:w-1/4"></span>
            <router-link :to="{ name: 'user-register' }">
              <a class="text-xs text-gray-500 uppercase">Ou alors s'inscrire</a>
            </router-link>
            <span class="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import strapi from "~/utils/strapi"
  import ForgotPassword from "~/components/forms/ForgotPassword"

  export default {
    head() {
      return {
        title: 'Connexion | FrenchCrafters',
        meta: [
          {hid: 'checkout', name: 'description', content: 'FrenchCrafters login page.'}
        ]
      }
    },
    components: {ForgotPassword},
    middleware: "logged",
    data() {
      return {
        email: "",
        password: "",
        loading: false,
        forgottenPassword: false,
      }
    },
    created() {
      if(this.$store.getters['auth/getUserInfo'].email && process.client){
        $nuxt.$router.push('/')
      }
    },
    methods: {
      async handleSubmit() {
        try {
          this.loading = true
          const response = await strapi.login(this.email, this.password)
          this.loading = false
          this.setUser(response.user)
          this.$router.go('home')
        } catch (err) {
          this.loading = false
          alert(JSON.stringify(err.message) || "An error occurred.")
        }
      },
      ...mapMutations({
        setUser: "auth/setUser",
      }),
    },
  }
</script>
