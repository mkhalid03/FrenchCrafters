<template>
  <div class="uk-card uk-card-default uk-card-large uk-card-body">
    <form @submit.stop.prevent="handleSubmit">
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="paul.bocuse@gmail.com"
        />
      </div>

      <PasswordVerifySecurity @passwordChange="setPassword" />

      <div>
        <label for="siret">Siret</label>
        <el-input
          id="siret"
          v-model="form.siret"
          type="text"
          placeholder="XXX XXX XXX"
        />
        <el-button @click="checkCompany">Check my company</el-button>
      </div>

      <div v-if="company">
        Is this your Company ?
        <CompanyInfo :company="company"/>
        <el-checkbox v-model="checked">Yes, this is my company !</el-checkbox>
      </div>

      <div>
        <button :disabled="loading" type="submit">
          Submit
        </button>
      </div>

      <div>
        Want to login?
        <router-link :to="{ name: 'login' }">
          Redirect to Shop Panel
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import { mapMutations } from "vuex"
import strapi from "~/utils/strapi"
import PasswordVerifySecurity from "~/components/forms/elements/PasswordVerifySecurity"
import CompanyInfo from "../../components/company/CompanyInfo";

export default {
  components: {CompanyInfo, PasswordVerifySecurity },
  data() {
    return {
      form: {
        email: "",
        password: "",
        siret: "",
        checkCompany: false
      },
      company: null,
      loading: false,
    }
  },
  middleware: "logged",
  methods: {
    setPassword: function (pass) {
      this.password = pass
    },
    checkCompany: async function () {
      if(this.form.siret){
        try {
          this.company = await axios({
            method:'get',
            url:`${process.env.siretApiUrl}/${this.form.siret}`,
            baseURL: null,
          })
        } catch {
          console.log('Oops')
        }
      }
    },
    async handleSubmit() {
      try {
        this.loading = true
      } catch (err) {
        this.loading = false
        alert(err.message || "An error occurred.")
      }
    }
  },
}
</script>
