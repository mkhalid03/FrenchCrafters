<template>
  <div>
    <div>
      <el-input placeholder="Full Name" v-model="form.fullName" />
      <el-input placeholder="Email" v-model="form.email" />
      <el-input placeholder="Address" v-model="form.line1" />
      <el-input placeholder="Complementary Address" v-model="form.line2" />
      <el-input placeholder="City" v-model="form.city" />
      <el-input placeholder="Postal Code" v-model="form.postalCode" />
      <CountrySelect @change="setCountry"/>
    </div>
    <div id="card-element"></div>
    <div id="card-errors" role="alert"></div>
    <el-button @click="onSubmit">
      Pay
    </el-button>
  </div>
</template>

<script>
import strapi from "~/utils/strapi"
import { mapMutations } from "vuex"
import CountrySelect from "./elements/CountrySelect"

export default {
  name: "PaymentCard",
  components: {CountrySelect},
  props: {
    amount : null
  },
  data() {
    return {
      form: {
        city: "",
        country: "",
        email: "",
        fullName: "",
        line1: "",
        line2: "",
        postalCode: "",
      },
      stripe: '',
      elements: '',
      card: '',
      loading: false,
      stripeApiKey: process.env.stripeApiKey,
    }
  },
  mounted(){
    this.includeStripe('js.stripe.com/v3/', function(){
      this.configureStripe();
    }.bind(this) );
  },
  methods: {
    ...mapMutations({
      setItems: "cart/reset",
    }),
    setCountry(country) {
      this.form.country = country
    },
    emptyCart() {
      this.setItems()
    },
    includeStripe( URL, callback ){
      let documentTag = document, tag = 'script',
        object = documentTag.createElement(tag),
        scriptTag = documentTag.getElementsByTagName(tag)[0];
      object.src = '//' + URL;
      if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
      scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    configureStripe(){
      this.stripe = Stripe( this.stripeApiKey );
      this.elements = this.stripe.elements();
      this.card = this.elements.create('card', {
        hidePostalCode: true,
        style: this.style
      });

      this.card.mount('#card-element');
    },
    async onSubmit() {
      this.stripe.createToken(
        this.card,
        {
          address_city: this.form.city,
          address_country: this.form.country,
          address_line1: this.form.line1,
          address_line2: this.form.line2,
          address_zip: this.form.postalCode
        }
      ).then((result) => {
        if (result.error) {
          console.error('Error creating Stripe Payment Method: ', result.error);
        } else {
          this.stripePaymentMethodHandler(result.token);
        }
      });
    },
    stripePaymentMethodHandler(token) {
      this.loading = true
      strapi.createEntry("orders", {
        token: token.id,
        products: this.$store.getters["cart/items"],
        email: this.form.email,
        name: this.form.fullName,
      }).then(res => {
        this.manageStatus(res);
        this.loading = false
      }).catch((err) => {
        this.loading = false
        console.error('Error creating payment:', err);
      });
    },
    manageStatus(res) {
      console.log(res)
    }
  }
    // async handleSubmit() {
    //   this.loading = true
    //   let token
    //   try {
    //     const response = await createToken()
    //     token = response.token.id
    //   } catch (err) {
    //     console.log(err)
    //     alert("An error occurred.")
    //     this.loading = false
    //     return
    //   }
    //   try {
    //     await strapi.createEntry("orders", {
    //       amount: this.$store.getters["cart/price"],
    //       products: this.$store.getters["cart/items"],
    //       address: this.address,
    //       postalCode: this.postalCode,
    //       city: this.city,
    //       token,
    //     })
    //     alert("Your order have been successfully submitted.")
    //     this.$store.commit("cart/reset")
    //     this.$router.push("/")
    //   } catch (err) {
    //     this.loading = false
    //     alert("An error occurred.")
    //   }
    // },
}
</script>


