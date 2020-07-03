<template>
  <div>
    <form>
      <div>
        <label for="email">Email</label>
        <ElInput
          id="email"
          v-model="form.email"
          type="email"
          placeholder="paul.bocuse@gmail.com"
        />
      </div>

      <PasswordVerifySecurity @passwordChange="setPassword" />

      <div>
        <label for="siret">Siret</label>
        <ElInput
          id="siret"
          v-model="form.siret"
          type="text"
          placeholder="XXXXXXXXXXXXXX"
        />
        <ElButton @click="checkCompany">Check my company</ElButton>
      </div>

      <div v-if="company">
        Is this your Company ?
        <CompanyInfo :company="company"/>
        <ElCheckbox v-model="form.checked">Yes, this is my company !</ElCheckbox>
      </div>

      <div>
        <ElButton :disabled="loading" @click="handleSubmit">
          Submit
        </ElButton>
      </div>

      <div>
        Want to login?
        <router-link :to="{ name: 'login' }">
          Log In
        </router-link>
      </div>
      <div>
        You want to create a customer account ?
        <router-link :to="{ name: 'user-register' }">
          Register as a customer
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import PasswordVerifySecurity from "~/components/forms/elements/PasswordVerifySecurity"
import CompanyInfo from "../../components/company/CompanyInfo";

export default {
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
  middleware: "logged",
  methods: {
    setPassword: function (pass) {
      this.password = pass
    },
    checkCompany: async function () {
      if(this.form.siret){
        try {
          axios({
            method:'get',
            url:`${process.env.siretApiUrl}/${this.form.siret}`,
            baseURL: null,
          }).then(res => {
            this.company = res.data.etablissement
          })
        } catch {
          console.log('Oops')
        }
      }
    },
    async handleSubmit() {
      try {
        this.loading = true
        //TODO: call to back to create shop and user
        this.loading = false
      } catch (err) {
        this.loading = false
        alert(err.message || "An error occurred.")
      }
    }
  },
}
</script>
