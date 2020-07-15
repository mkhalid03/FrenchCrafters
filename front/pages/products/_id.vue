<template>
  <div v-if="$fetchState.pending">
    <SeeProductLoading/>
  </div>
  <div v-else-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </div>
  <div v-else>
    <div id="product">
      <div class="product">
        <SfGallery :images="getImages" class="product__gallery"/>
        <div class="product__info">
          <div class="product__header pt-16">
            <SfHeading
              :title="product.name"
              :level="3"
              class="sf-heading--no-underline sf-heading--left"
            />
            <SfIcon
              icon="drag"
              size="xl"
              color="gray-secondary"
              class="product__drag-icon mobile-only"
            />
          </div>
          <div class="product__price-and-rating">
            <SfPrice :regular="`${product.price}‎€`"/>
          </div>
          <div>
            <p class="product__description desktop-only">
              {{ product.description }}
            </p>
            <ElSelect
              class="my-4 w-full"
              v-if="product.sizes.length"
              v-model="selectedSize"
              placeholder="Select Size"
              value-key="id"
            >
              <ElOption
                v-for="(size, i) in product.sizes"
                :key="i"
                :label="size.name"
                :value="{ id: size.id, name: size.name }"
                :disabled="size.stock === 0 && size.infinite === false"
              >
          <span style="float: left;">
            {{ size.name }}
          </span>
                <span
                  v-if="size.infinite !== true && size.stock !== 0"
                  style="float: right; color: #8492a6; font-size: 13px;"
                >
            {{ size.stock }} in Stock
          </span>
              </ElOption>
            </ElSelect>
            <SfButton
              class="product__add-to-cart"
              @click="() => addToCart(product, selectedSize)"
            >
              Ajouter au Panier
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    SfGallery,
    SfHeading,
    SfPrice,
    SfRating,
    SfIcon,
    SfTabs,
    SfProperty,
    SfButton,
    SfReview,
    SfAddToCart,
    SfColor,
    SfSelect,
    SfProductOption,
    SfBreadcrumbs,
  } from "@storefront-ui/vue";
  import {mapMutations} from "vuex";

  import SeeProductLoading from '~/components/loading/SeeProductLoading'

  export default {
    name: "Product",
    components: {
      SeeProductLoading,
      SfGallery,
      SfHeading,
      SfPrice,
      SfRating,
      SfIcon,
      SfTabs,
      SfProperty,
      SfButton,
      SfReview,
      SfAddToCart,
      SfColor,
      SfSelect,
      SfProductOption,
      SfBreadcrumbs,
    },
    head() {
      return {
        title: `${this.product.name} | FrenchCrafters`,
        meta: [
          {hid: 'checkout', name: 'description', content: `FrenchCrafters product page for ${this.product.name}`}
        ]
      }
    },
    async fetch() {
      this.product = await this.$axios.$get(`/products/${this.$route.params.id}`)
    },
    data() {
      return {
        product: {},
        selectedSize: null,
      }
    },
    methods: {
      ...mapMutations({
        add: "cart/add",
        removeFromCart: "cart/remove",
      }),
      addToCart: function (product) {
        if (product.sizes.length && this.selectedSize === null) return
        product.selectedSize = this.selectedSize
        this.add(product)
      },
    },
    computed: {
      getImages: function () {
        if (!this.product?.image) return []
        const imgs = []
        this.product.image.forEach(img => {
          imgs.push({mobile: {url: img.url}, desktop: {url: img.url}})
        })
        return imgs
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@storefront-ui/vue/styles";

  #product {
    box-sizing: border-box;
    @include for-desktop {
      max-width: 1272px;
      padding: 0 var(--spacer-sm);
      margin: 0 auto;
    }
  }

  .product {
    @include for-desktop {
      display: flex;
    }

    &__info {
      margin: var(--spacer-sm) auto var(--spacer-xs);
      @include for-desktop {
        max-width: 32.625rem;
        margin: 0 0 0 7.5rem;
      }
    }

    &__header {
      margin: 0 var(--spacer-sm);
      display: flex;
      justify-content: space-between;
      @include for-desktop {
        margin: 0 auto;
      }
    }

    &__drag-icon {
      animation: moveicon 1s ease-in-out infinite;
    }

    &__price-and-rating {
      margin: var(--spacer-xs) var(--spacer-sm) var(--spacer-base);
      align-items: center;
      @include for-desktop {
        display: flex;
        justify-content: space-between;
        margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
      }
    }

    &__rating {
      display: flex;
      align-items: center;
      margin: var(--spacer-xs) 0 0 0;
    }

    &__count {
      @include font(
          --count-font,
          var(--font-normal),
          var(--font-sm),
          1.4,
          var(--font-family-secondary)
      );
      color: var(--c-text);
      text-decoration: none;
      margin: 0 0 0 var(--spacer-xs);
    }

    &__description {
      color: var(--c-link);
      @include font(
          --product-description-font,
          var(--font-light),
          var(--font-base),
          1.6,
          var(--font-family-primary)
      );
    }

    &__select-size {
      margin: 0 var(--spacer-sm);
      @include for-desktop {
        margin: 0;
      }
    }

    &__colors {
      @include font(
          --product-color-font,
          var(--font-normal),
          var(--font-lg),
          1.6,
          var(--font-family-secondary)
      );
      display: flex;
      align-items: center;
      margin-top: var(--spacer-xl);
    }

    &__color-label {
      margin: 0 var(--spacer-lg) 0 0;
    }

    &__color {
      margin: 0 var(--spacer-2xs);
    }

    &__add-to-cart {
      margin: var(--spacer-base) var(--spacer-sm) 0;
      @include for-desktop {
        margin-top: var(--spacer-2xl);
      }
    }

    &__guide,
    &__compare,
    &__save {
      display: block;
      margin: var(--spacer-xl) 0 var(--spacer-base) auto;
    }

    &__compare {
      margin-top: 0;
    }

    &__tabs {
      margin: var(--spacer-lg) auto var(--spacer-2xl);
      @include for-desktop {
        margin-top: var(--spacer-2xl);
        --tabs-content-tab-padding: 3.5rem 0 0 0;
      }
    }

    &__property {
      margin: var(--spacer-base) 0;
    }

    &__review {
      padding-bottom: 24px;
      border-bottom: var(--c-light) solid 1px;
      margin-bottom: var(--spacer-base);

      &:last-of-type {
        border: none;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      @include for-desktop {
        padding-bottom: 0;
      }
    }

    &__additional-info {
      @include font(
          --additional-info-font,
          var(--font-light),
          var(--font-base),
          1.6,
          var(--font-family-primary)
      );

      &__title {
        font-weight: var(--font-bold);
        margin: 0 0 var(--spacer-sm);

        &:not(:first-child) {
          margin-top: 3.5rem;
        }
      }

      &__paragraph {
        margin: 0;
      }
    }

    &__gallery {
      flex: 1;
    }
  }

  .breadcrumbs {
    margin: var(--spacer-base) auto var(--spacer-lg);
  }

  @keyframes moveicon {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, 30%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
