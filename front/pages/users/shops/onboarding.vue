<template>
  <div>
    <div>
      <span>Log on this website to begin the creation of your Shop and Products.</span>
      <ElButton @click="redirectToBack">Start my Shop!</ElButton>
    </div>
    <div>
        <span>You can connect as an User to see your Shop on this website.</span>
        <router-link :to="{ name: 'user-register' }">
          <ElButton>Login</ElButton>
        </router-link>
      </div>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Et Maintenant ? | FrenchCrafters',
      meta: [
        { hid: 'checkout', name: 'description', content: 'FrenchCrafters onboarding and tips page.' }
      ]
    }
  },
  methods: {
    redirectToBack: function(){
      window.open('http://localhost:1337/admin', '_blank');
    }
  }
}
</script>
