<template>
  <div>
    <div class="text-center mt-32">
      <span class="text-2xl color-gray-600">Votre inscription sur French Crafters <br />est désormais complète !</span>
      <div class="flex justify-center w-full">
        <div class="mt-3 w-1/4 border-b-4 border-blue-600"></div>
      </div>
    </div>
    <div class="flex h-full mt-12 px-24">
      <div class="w-1/2">
        <div class="flex w-full justify-center">
          <img alt="" style="height:350px" class="object-contain" src="https://image.freepik.com/free-vector/isometric-3d-icon-online-shopping-system-with-laptop-wallet-trolley-money-card-other-online-shopping-illustration-vector_142963-46.jpg">
        </div>
        <div class="flex w-full justify-center">
          <div class="w-1/2 text-center">
            <div class="mb-8">Vous pouvez vous connecter à votre espace magasin et commencer à créer des produits.</div>
            <ElButton type="primary" @click="redirectToBack">Commencer mon magasin!</ElButton>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex w-full justify-center">
          <img alt="" style="height:350px" class="object-contain" src="https://elements-cover-images-0.imgix.net/78b0205c-704c-440a-8d86-f64769f3ffd9?auto=compress%2Cformat&fit=max&w=710&s=4c1599b8892f9d52b09c41b9ff78682d">
        </div>
        <div class="flex w-full justify-center">
          <div class="w-1/2 text-center">
            <div class="mb-8">Vous pouvez aussi vous connecter en tant qu'utilisateur et regarder les magasins et produits déjà disponibles.</div>
            <router-link :to="{ name: 'login' }">
              <ElButton type="primary">Découvrir le site!</ElButton>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    head() {
      return {
        title: 'Et Maintenant ? | FrenchCrafters',
        meta: [
          {hid: 'checkout', name: 'description', content: 'FrenchCrafters onboarding and tips page.'}
        ]
      }
    },
    methods: {
      redirectToBack: function () {
        window.open('http://api.frenchcrafters.company/admin', '_blank');
      }
    }
  }
</script>
