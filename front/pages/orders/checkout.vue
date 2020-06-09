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
  components: {
    PaymentCard,
    Cart,
  },
  middleware: "auth",
}
</script>
