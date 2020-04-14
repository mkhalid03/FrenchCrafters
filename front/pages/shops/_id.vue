<template>
  <div>

    <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span> go back</a>

    <client-only>
      <div uk-grid>
        <div class="uk-width-1-3@m">

          <div v-for="product in shop.products" class="uk-margin">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img :src="'http://localhost:1337/' + product.image.url" alt="" />
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">{{ product.name }} <span class="uk-badge">{{ product.price }}€</span></h3>
                <p>{{ product.description }}</p>
              </div>
              <div class="uk-card-footer">
                <button class="uk-button uk-button-primary" @click="addToCart(product)">Add to cart</button>
              </div>
            </div>
          </div>

        </div>


        // Right card displaying you cart
        <div class="uk-width-expand@m">
          // Call a Cart component
          <Cart />
        </div>
      </div>

    </client-only>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Cart from '~/components/Cart.vue'
  import shopQuery from '~/apollo/queries/shop/shop'

  export default {
    data() {
      return {
        shop: Object
      }
    },
    apollo: {
      shop: {
        prefetch: true,
        query: shopQuery,
        variables () {
          return { id: this.$route.params.id }
        }
      }
    },
    components: {
      Cart
    },
    methods:{
      ...mapMutations({
        addToCart: 'cart/add',
        removeFromCart: 'cart/remove'
      }),
    }
  }
</script>
