<template>
  <div>
    <client-only>
      <div>
        <PaymentCard />
      </div>
      <div>
        <Cart />
      </div>
    </client-only>
  </div>
</template>

<script>
import Cart from "~/components/Cart.vue"
import PaymentCard from "~/components/forms/PaymentCard";

export default {
  head () {
    return {
      title: 'Check-out | FrenchCrafters',
      meta: [
        { hid: 'checkout', name: 'description', content: 'FrenchCrafters checkout page.' }
      ]
    }
  },
  components: {
    PaymentCard,
    Cart,
  },
  middleware: "auth",
}
</script>
