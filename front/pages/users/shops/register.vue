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
        <ElButton
          @click="checkCompany"
          :disabled="loading"
        >
          Check my company
        </ElButton>
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
import CompanyInfo from "~/components/company/CompanyInfo";

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
          console.log('Oops', e)
        })
      }
    },
    async handleSubmit() {
      console.log(this.form)
      if(this.form.email !== "" && this.form.checked && this.form.password !== "") {
        this.loading = true
        await axios.post(`${process.env.backendUrl}/accounts`, {
          email: this.form.email,
          password: this.form.password
        }).then(res => {
          this.loading = false
          console.log(res)
        }).catch(e => {
          this.loading = false
          alert(e.message || "An error occurred.")
        })
      }
    }
  },
}
</script>
