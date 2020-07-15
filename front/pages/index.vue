<template>
  <div id="home">
    <SfHero class="hero">
      <SfHeroItem
        v-for="(img, index) in heroes"
        :key="index"
        :image="img.image"
        :title="img.title"
        :button-text="img.buttonText"
        :background="img.background"
        :class="img.className"
      />
    </SfHero>
    <SfBannerGrid class="banner-grid">
      <template v-for="banner in banners" #[banner.slot]>
        <SfBanner
          :key="banner.slot"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :description="banner.description"
          :button-text="banner.buttonText"
          :image="banner.image"
          :class="banner.class"
        />
      </template>
    </SfBannerGrid>
  </div>
</template>
<script>
  import {
    SfButton,
    SfHero,
    SfBannerGrid,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
  } from "@storefront-ui/vue";
  export default {
    name: "Home",
    components: {
      SfButton,
      SfHero,
      SfBannerGrid,
      SfBanner,
      SfCallToAction,
      SfSection,
      SfCarousel,
      SfProductCard,
      SfImage,
    },
    head () {
      return {
        title: 'Accueil | FrenchCrafters',
        meta: [
          { hid: 'checkout', name: 'description', content: 'FrenchCrafters home page.' }
        ]
      }
    },
    data() {
      return {
        heroes: [
          {
            background: "rgb(0, 239, 241)",
            image: "https://www.orijns.fr/themes/leo_alaska/img/modules/leoslideshow/ORIJNS-2016-slider-5.jpg",
            className:
              "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
          },
          {
            background: "rgb(239, 235, 233)",
            image: "https://www.orijns.fr/themes/leo_alaska/img/modules/leoslideshow/ORIJNS-2016-slider-4.jpg",
            className:
              "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
          },
          {
            background: "rgb(236, 239, 241)",
            image: "https://www.orijns.fr/themes/leo_alaska/img/modules/leoslideshow/ORIJNS-2016-slider-6.jpg",
            className:
              "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
          },
        ],
        banners: [
          {
            slot: "banner-A",
            subtitle: "Collection",
            title: "Collection enfant",
            description:
              "De nombreux de nos partenaires ont sorti des collections enfant ces temps-ci ! Découvrez leurs articles phare !",
            buttonText: "Découvrir",
            image: "https://shopjustice.scene7.com/is/image/justiceProdATG/20200713-asset-01?extend=-870,0,0,0",
            class: "text-white"
          },
          {
            slot: "banner-B",
            subtitle: "Bon Plan",
            title: "Tous nos bon plans en france métropolitaine",
            description:
              "Découvrez tous les bons plans proposés par French Crafters ! Partout en France métropolitaine des partenaires proposent des offres sur leurs produits",
            buttonText: "Découvrir",
            image: "https://image.freepik.com/free-photo/abstract-blurred-background-interior-clothing-store-shopping-mall_44943-543.jpg",
          },
          {
            slot: "banner-C",
            subtitle: "Collection",
            title: "Du haut de gamme chez French Crafters",
            image: "https://www.shoplo.com/blog/wp-content/uploads/2016/05/9_tips_for_promoting_your-900x400.jpg",
          },
          {
            slot: "banner-D",
            subtitle: "Collection",
            title: "Des POLO Made in France !",
            image: "https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_1284,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Ffr-FR%2F%7B3309BF0C-7650-44E8-ACA8-58AC21F885CF%7D",
          },
        ],
        products: [
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productA.jpg",
            price: { regular: "$ 50.00 " },
            rating: { max: 5, score: 4 },
            isOnWishlist: true,
            reviews: 8,
            badgeLabel: "",
            badgeColor: "color-primary",
          },
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productB.jpg",
            price: { regular: "$ 50.00 ", special: "$ 25.00 " },
            rating: { max: 5, score: 4 },
            isOnWishlist: true,
            reviews: 8,
            badgeLabel: "-50%",
            badgeColor: "color-primary",
          },
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productC.jpg",
            price: { regular: "$ 50.00 " },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
            reviews: 8,
            badgeLabel: "",
            badgeColor: "color-primary",
          },
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productA.jpg",
            price: { regular: "$ 50.00 " },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
            reviews: 8,
            badgeLabel: "",
            badgeColor: "color-primary",
          },
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productB.jpg",
            price: { regular: "$ 50.00 ", special: "$ 45.00" },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
            reviews: 8,
            badgeLabel: "-10%",
            badgeColor: "color-primary",
          },
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productC.jpg",
            price: { regular: "$ 50.00 " },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
            reviews: 8,
            badgeLabel: "",
            badgeColor: "color-primary",
          },
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productA.jpg",
            price: { regular: "$ 50.00 " },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
            reviews: 8,
            badgeLabel: "",
            badgeColor: "color-primary",
          },
          {
            title: "Cream Beach Bag",
            image: "assets/storybook/Home/productB.jpg",
            price: { regular: "$ 50.00 " },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
            reviews: 8,
            badgeLabel: "",
            badgeColor: "color-primary",
          },
        ],
        instagramFeed: [
          [
            {
              content: "angelina_trn",
              mobile: {
                url: "/assets/storybook/Home/imageA.png",
              },
              desktop: {
                url: "/assets/storybook/Home/imageA.png",
              },
            },
            {
              content: "angelina_trn",
              mobile: {
                url: "/assets/storybook/Home/imageB.png",
              },
              desktop: {
                url: "/assets/storybook/Home/imageB.png",
              },
            },
          ],
          [
            {
              content: "angelina_trn",
              mobile: {
                url: "/assets/storybook/Home/imageC.jpg",
              },
              desktop: {
                url: "/assets/storybook/Home/imageC.jpg",
              },
            },
            {
              content: "angelina_trn",
              mobile: {
                url: "/assets/storybook/Home/imageD.jpg",
              },
              desktop: {
                url: "/assets/storybook/Home/imageD.jpg",
              },
            },
          ],
        ],
      };
    },
    methods: {
      toggleWishlist(index) {
        return (this.products[index].isOnWishlist = !this.products[index]
          .isOnWishlist);
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@storefront-ui/vue/styles";
  .carousel {
    margin: 0 calc(var(--spacer-sm) * -1) 0 0;
    @include for-desktop {
      margin: 0;
    }
    &__item {
      margin: 1.9375rem 0 2.4375rem 0;
    }
  }
  .banner-grid {
    margin: var(--spacer-base) 0;
    @include for-desktop {
      margin: var(--spacer-2xl) 0;
    }
  }
  .call-to-action {
    display: flex;
  }
  .instagram-grid {
    max-width: 60rem;
    margin: 0 auto;
    &__row {
      display: flex;
      & + & {
        margin: var(--spacer-xs) 0 0 0;
        @include for-desktop {
          margin: calc(var(--spacer-xl) / 2) 0 0 0;
        }
      }
    }
    &__col {
      flex: 1;
      margin: 0;
      & + & {
        margin: 0 0 0 var(--spacer-xs);
        @include for-desktop {
          margin: 0 0 0 calc(var(--spacer-xl) / 2);
        }
      }
    }
  }
  .app-banner {
    --banner-container-width: 100%;
    --banner-title-margin: var(--spacer-base) 0 var(--spacer-xl) 0;
    --banner-padding: 0 var(--spacer-2xl);
    --banner-title-font-size: var(--h1-font-size);
    --banner-subtitle-font-size: var(--font-xl);
    --banner-title-font-weight: var(--font-semibold);
    --banner-subtitle-font-weight: var(--font-medium);
    --banner-title-text-transform: capitalize;
    --banner-subtitle-text-transform: capitalize;
    display: block;
    min-height: 26.25rem;
    max-width: 65rem;
    margin: 0 auto;
    padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);
    &__call-to-action {
      --button-background: transparent;
      display: flex;
    }
    &__button {
      --image-width: 8.375rem;
      --image-height: 2.75rem;
      --button-padding: 0;
      & + & {
        margin: 0 0 0 calc(var(--spacer-xl) / 2);
      }
    }
  }
</style>
