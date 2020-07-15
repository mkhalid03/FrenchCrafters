<template>
  <div>
    <Header />
    <div class="mt-16">
      <nuxt />
    </div>
    <div class="fixed bottom-0 left-0 p-4">
      <div style="font-size:10px" class="bg-white p-1 rounded-sm">
        <div>Tous les visuels sont utilisés pour une démo crédible.</div>
        <div>Les visuels seront supprimés si le site est voué à rester en ligne.</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header"

export default {
  components: { Header },
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
