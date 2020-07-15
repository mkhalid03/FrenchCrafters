<template>
  <div v-if="Object.keys(this.$route.params).length !== 0" id="thank-you">
    <SfCallToAction
      class="banner"
      title="Merci pour votre commande!"
      :image="{
        mobile: 'https://images.pexels.com/photos/2437287/pexels-photo-2437287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        desktop: 'https://images.pexels.com/photos/2437287/pexels-photo-2437287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }"
    >
      <template #description>
        <div class="banner__order-number">
          <span>Order N.</span>
          <strong>{{ order.id }}</strong>
        </div>
      </template>
    </SfCallToAction>
    <section class="section">
      <div class="order">
        <SfHeading
          title="Your Purchase"
          class="order__heading heading sf-heading--left"
          :level="3"
        />
        <p class="order__paragraph paragraph">
          Votre commande a bien été prise en compte !
          Vous pouvez suivre votre commande dans votre espace utilisateur.
          Un email vous sera envoyé lors de l'envoi de la commande par nos partenaires !
        </p>
        <div class="order__contact">
          <SfHeading
            :level="6"
            class="heading sf-heading--left sf-heading--no-underline"
            title="Les coordonnées pour cette commande :"
          ></SfHeading>
          <div class="contact mb-4">
            <p class="contact__email">{{ order.email }}</p>
            <p class="contact__street">{{ order.address.line1 }}</p>
            <p v-if="order.address.line2" class="contact__street">{{ order.address.line2 }}</p>
            <p class="contact__city">{{ order.address.city }}</p>
          </div>
        </div>
      </div>
      <div class="additional-info">
        <div>
          <SfHeading
            title="Votre Compte"
            class="heading sf-heading--left"
            :level="3"
          />
          <p class="paragraph">
            Vous retrouverez le détail de votre commande dans votre espace. Votre avis est important !
            En cas de problèmes, n'hésitez pas à remonter les informations auprès de notre équipe.
          </p>
        </div>
        <div>
          <SfHeading
            title="Et maintenant ?"
            class="heading sf-heading--left"
            :level="3"
          />
          <p class="paragraph">
            Vous pouvez à tout instant accéder à votre espace utilisateur !
          </p>
          <router-link :to="{ name: 'profile' }">
            <SfButton class="feedback-button color-secondary sf-button--full-width button-size">
              Espace Utilisateur
            </SfButton>
          </router-link>
        </div>
      </div>
    </section>
    <router-link :to="{ name: 'search' }">
      <SfButton class="back-button color-primary button-size">
        Continuer mes recherches !
      </SfButton>
    </router-link>
  </div>
</template>
<script>
  import { SfHeading, SfButton, SfCallToAction } from "@storefront-ui/vue";
  export default {
    components: {
      SfHeading,
      SfButton,
      SfCallToAction,
    },
    computed: {
      order: function(){
        return this.$route.params?.order
      }
    },
    beforeCreate: function(){
      if(Object.keys(this.$route.params).length === 0 && process.client){
        $nuxt.$router.push('/')
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "~@storefront-ui/vue/styles";
  #thank-you {
    box-sizing: border-box;
    @include for-desktop {
      max-width: 1272px;
      padding: 0 var(--spacer-sm);
      margin: 0 auto;
    }
  }
  .heading {
    --heading-padding: var(--spacer-base) 0;
  }
  .paragraph {
    margin: var(--spacer-xs) 0 var(--spacer-sm) 0;
    color: var(--c-dark-variant);
    font: var(--font-light) var(--font-base) / 1.6 var(--font-family-primary);
    @include for-desktop {
      font-weight: var(--font-normal);
      font-size: var(--font-sm);
    }
  }
  .banner {
    --call-to-action-color: var(--c-text);
    --call-to-action-title-font-size: var(--font-xl);
    --call-to-action-title-font-weight: var(--font-medium);
    --call-to-action-text-container-width: 50%;
    margin: 0 0 var(--spacer-base);
    &__order-number {
      display: flex;
      flex-direction: column;
      font: var(--font-light) var(--font-sm) / 1.4 var(--font-family-primary);
      @include for-desktop {
        flex-direction: row;
        font-size: var(--font-normal);
      }
    }
  }
  .section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @include for-desktop {
      flex-direction: row;
      padding: 0;
      background: var(--c-light);
    }
  }
  .order {
    @include for-desktop {
      width: 100%;
      padding: var(--spacer-xl) var(--spacer-xl) var(--spacer-2xl)
      var(--spacer-2xl);
    }
    &__heading,
    &__paragraph,
    &__contact {
      @include for-mobile {
        margin: 0;
        padding-left: var(--spacer-sm);
        padding-right: var(--spacer-sm);
        background: var(--c-light);
      }
    }
    &__contact {
      padding: var(--spacer-sm);
      @include for-desktop {
        padding: 0 var(--spacer-sm);
        border: 2px solid var(--c-white);
        border-width: 2px 0 2px 0;
      }
    }
    &__notifications-button {
      --button-width: calc(100% - (var(--spacer-sm) * 2));
      margin: var(--spacer-base) auto 0 auto;
      @include for-desktop {
        margin: var(--spacer-xl) 0 0 0;
      }
    }
  }
  .contact {
    color: var(--c-dark-variant);
    font: var(--font-light) var(--font-base) / 1.6 var(--font-family-secondary);
    @include for-desktop {
      font-weight: var(--font-normal);
      font-size: var(--font-sm);
    }
    &__name,
    &__street,
    &__city {
      margin: 0;
    }
    &__mail {
      margin: var(--spacer-sm) 0;
    }
  }
  .additional-info {
    padding: 0 var(--spacer-sm);
    @include for-desktop {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: var(--spacer-xl) var(--spacer-xl) var(--spacer-2xl)
      var(--spacer-2xl);
    }
  }
  .feedback-button {
    margin: var(--spacer-sm) 0;
    @include for-desktop {
      margin: var(--spacer-base) 0 0 0;
    }
  }
  .back-button {
    --button-width: calc(100% - (var(--spacer-sm) * 2));
    margin: 0 auto var(--spacer-sm) auto;
    @include for-desktop {
      --button-background: var(--c-secondary);
      margin: var(--spacer-xl) auto;
    }
  }
  .button-size {
    @include for-desktop {
      --button-width: 25rem;
    }
  }
</style>
