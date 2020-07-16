<template>
  <div class="bg-blue-800" style="height:94vh">
    <div class="pt-12">
      <client-only>
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-700 text-center font-mono">French Crafters</h2>
            <p class="text-xl text-gray-600 text-center">Tentez l'aventure!</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 lg:w-1/4"></span>
              <a class="text-xs text-center text-gray-500 uppercase">Créer un compte Marchand</a>
              <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div class="mt-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Adresse Email</label>
              <input v-model="form.email"
                     class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                     type="email">
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                <PasswordVerifySecurity @passwordChange="setPassword"/>
              </div>
            </div>
            <div class="mt-4">
              <label for="siret" class="block text-gray-700 text-sm font-bold mb-2">Votre numéro de Siret :</label>
              <el-input id="siret" placeholder="XXXXXXXXXXXXXX" v-model="form.siret" class="input-with-select">
                <el-button @click="checkCompany" :disabled="loading" slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <div v-if="company">
                <CompanyInfo :company="company"/>
                <ElCheckbox v-model="form.checked">Oui c'est mon entreprise !</ElCheckbox>
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
              <router-link :to="{ name: 'user-register' }">
                <a class="text-xs text-gray-500 uppercase">Créer un compte utilisateur</a>
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
               style="background-image:url('https://fashionista.com/.image/t_share/MTYwOTk4NTYzNTg3ODI3Njg3/one-w-oh-store-view.jpg')"></div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import PasswordVerifySecurity from "~/components/forms/elements/PasswordVerifySecurity"
import CompanyInfo from "~/components/company/CompanyInfo";

export default {
  head () {
    return {
      title: 'Inscription Magasin | FrenchCrafters',
      meta: [
        { hid: 'checkout', name: 'description', content: 'FrenchCrafters shop register page.' }
      ]
    }
  },
  components: { CompanyInfo, PasswordVerifySecurity },
  data() {
    return {
      form: {
        email: "",
        password: "",
        siret: "",
        checked: false
      },
      company: null,
      loading: false,
    }
  },
  created() {
    if(this.$store.getters['auth/getUserInfo'].email && process.client){
      $nuxt.$router.push('/')
    }
  },
  middleware: "logged",
  methods: {
    setPassword: function (pass) {
      this.form.password = pass
    },
    checkCompany: async function () {
      if(this.form.siret){
        this.loading = true
        //GET Company info from SIRET
        axios({
          method:'get',
          url:`${process.env.siretApiUrl}/${this.form.siret}`,
          baseURL: null,
        }).then(res => {
          this.company = res.data.etablissement
          this.loading = false
        }).catch(e => {
          this.loading = false
          this.$message("Aucun commerce avec ce Siret n'a été trouvé")
        })
      }
    },
    async handleSubmit() {
      if(this.form.email !== "" && this.form.checked && this.form.password !== "") {
        this.loading = true
        await axios.post(`${process.env.backendUrl}/accounts`, {
          email: this.form.email,
          password: this.form.password
        }).then(res => {
          this.loading = false
          $nuxt.$router.push('/register/onboarding')
        }).catch(e => {
          this.loading = false
          this.$message('Ce mail est déjà utilisé ou un champ est un invalide')
        })
      }
    }
  },
}
</script>
