<template>
  <div id="cart">
    <SfSidebar
      :visible="isCartSidebarOpen"
      title="Mon Panier"
      class="sf-sidebar--right sf-sidebar--icon"
      @close="() => {$emit('closeCart')}"
    >
      <template v-if="numberOfItems" #content-top>
        <SfProperty
          class="sf-property--large"
          name="Total des Produits"
          :value="numberOfItems"
        />
      </template>
      <transition name="sf-fade" mode="out-in">
        <div v-if="numberOfItems" key="my-cart" class="my-cart">
          <div class="collected-product-list">
            <transition-group name="sf-fade" tag="div">
              <SfCollectedProduct
                v-for="product in selectedProducts"
                :key="product.id"
                v-model="product.qty"
                :image="product.image"
                :title="product.title"
                :regular-price="product.price.regular"
                :special-price="product.price.special"
                class="collected-product"
                @click:remove="deleteProduct(product)"
                @input="setQuantity(product)"
              >
                <template #configuration>
                  <div class="collected-product__properties">
                    <SfProperty
                      v-for="(property, key) in product.configuration"
                      :key="key"
                      :name="property.name"
                      :value="property.value"
                    />
                  </div>
                </template>
                <!-- Custom Div template for data-->
                <template #actions></template>
              </SfCollectedProduct>
            </transition-group>
          </div>
        </div>
        <div v-else key="empty-cart" class="empty-cart">
          <div class="empty-cart__banner">
            <SfImage
              alt="Empty bag"
              class="empty-cart__image"
              :src="require('~/assets/img/empty_cart.png')"
            />
            <SfHeading
              title="Votre panier est vide"
              :level="2"
              class="empty-cart__heading"
              subtitle="Il semblerait que vous n'ayez pas encore ajouté de produits a votre panier. Commencez votre shopping en ajoutant un produit !"
            />
          </div>
        </div>
      </transition>
      <template #content-bottom>
        <transition name="sf-fade">
          <div v-if="numberOfItems">
            <SfProperty
              name="Total price"
              class="sf-property--full-width sf-property--large my-cart__total-price"
            >
              <template #value>
                <SfPrice :regular="price"/>
              </template>
            </SfProperty>
            <router-link :to="{ name: 'checkout' }">
              <SfButton @¢lick="goToCheckout" class="sf-button--full-width color-secondary">
                Valider mes achats
              </SfButton>
            </router-link>
          </div>
          <div v-else>
            <router-link :to="{ name: 'search' }">
              <SfButton class="sf-button--full-width color-primary">
                Aller a la page produits
              </SfButton>
            </router-link>
          </div>
        </transition>
      </template>
    </SfSidebar>
  </div>
</template>
<script>
  import {
    SfSidebar,
    SfButton,
    SfHeading,
    SfProperty,
    SfPrice,
    SfImage,
    SfCollectedProduct,
  } from "@storefront-ui/vue";
  import {mapMutations} from "vuex";

  export default {
    name: "Cart",
    components: {
      SfSidebar,
      SfButton,
      SfHeading,
      SfImage,
      SfProperty,
      SfPrice,
      SfCollectedProduct,
    },
    props: {
      isCartSidebarOpen: false
    },
    async created() {
      const products = this.$store.getters["cart/items"]
      if (products.length > 0) {
        const email = this.$store.getters['auth/getUserInfo'].email || null
        const owner = this.$store.getters['cart/getOwner']
        if (owner !== email) {
          await this.$store.dispatch('cart/resetCart')
          await this.$store.dispatch('cart/setOwner', email)
        }

        this.$store.commit('cart/setItems', await this.$axios.$post('/products/check', {products}))
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      price() {
        return `${this.$store.getters["cart/price"]} €`
      },
      numberOfItems() {
        return this.$store.getters["cart/numberOfItems"]
      },
      selectedProducts() {
        const products = this.$store.getters["cart/items"]
        const formattedProducts = []

        products.forEach(product => {
          const p = {
            title: product.name,
            id: product.id,
            image: product.image[0].url,
            price: {regular: `${product.price} €`},
            configuration: [
              {name: "Category", value: product?.category?.title},
              {name: "Size", value: product?.selectedSize?.name},
              {name: "Marchand", value: product?.shop?.name},
            ],
            qty: product.quantity,
            selectedSize: product.selectedSize
          }
          formattedProducts.push(p)
        })
        return formattedProducts
      },
    },
    methods: {
      ...mapMutations({
        addToCart: "cart/add",
        removeFromCart: "cart/remove",
        deleteProduct: "cart/delete",
        setProductQuantity: "cart/setProductQuantity",
      }),
      goToCheckout() {
        this.$router.push("/orders/checkout")
      },
      setQuantity(product){
        this.setProductQuantity(product)
      }
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@storefront-ui/vue/styles";

  #cart {
    @include for-desktop {
      & > * {
        --sidebar-bottom-padding: var(--spacer-base);
        --sidebar-content-padding: var(--spacer-base);
      }
    }
  }

  #cart *{
    z-index:1000;
  }

  .my-cart {
    flex: 1;
    display: flex;
    flex-direction: column;

    &__total-items {
      margin: 0;
    }

    &__total-price {
      --price-font-size: var(--font-xl);
      --price-font-weight: var(--font-semibold);
      margin: 0 0 var(--spacer-base) 0;
    }
  }

  .empty-cart {
    --heading-subtitle-margin: 0 0 var(--spacer-xl) 0;
    --heading-title-margin: 0 0 var(--spacer-base) 0;
    --heading-title-color: var(--c-primary);
    --heading-title-font-weight: var(--font-semibold);
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;

    &__banner {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }

    &__heading {
      padding: 0 var(--spacer-base);
    }

    &__image {
      --image-width: 13.1875rem;
      margin: 0 0 var(--spacer-2xl) 0;
    }

    @include for-desktop {
      --heading-title-font-size: var(--font-xl);
    }
  }

  .collected-product-list {
    flex: 1;
  }

  .collected-product {
    margin: 0 0 var(--spacer-sm) 0;

    &__properties {
      margin: var(--spacer-xs) 0 0 0;
    }

    &__actions {
      transition: opacity 150ms ease-in-out;
    }

    &__save,
    &__compare {
      --button-padding: 0;

      &:focus {
        --cp-save-opacity: 1;
        --cp-compare-opacity: 1;
      }
    }

    &__save {
      opacity: var(--cp-save-opacity, 0);
    }

    &__compare {
      opacity: var(--cp-compare-opacity, 0);
    }

    &:hover {
      --cp-save-opacity: 1;
      --cp-compare-opacity: 1;
    }
  }
</style>
