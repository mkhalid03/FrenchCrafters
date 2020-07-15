<template>
  <nav class="fixed top-0 w-full bg-white shadow-md h-16 flex justify-between z-50">
    <router-link class="w-full h-full flex items-center px-4" :to="{ name: 'index' }">
      <img class="h-12" src="~/assets/img/logo.png" alt="logo"/>
      <span class="ml-2 mt-1 text-xl text-black font-mono">French Crafters</span>
    </router-link>
    <div class="hidden md:flex w-full h-full justify-center">
      <router-link class="border-b-4 text-gray-400 outline-none" :to="{ name: 'index' }">
        <button class="menu-button h-full w-32 rounded-none outline-none rounded-md bg-transparent">
          <i class="el-icon-s-home text-3xl"></i>
        </button>
      </router-link>
      <router-link class="border-b-4 text-gray-400 outline-none" :to="{ name: 'search' }">
        <button class="menu-button h-full w-32 rounded-none outline-none rounded-md bg-transparent">
          <i class="el-icon-s-shop text-3xl"></i>
        </button>
      </router-link>
      <!--<router-link class="border-b-4 text-gray-400 outline-none" :to="{ name: '?' }">
        <button class="h-full w-32 rounded-none outline-none rounded-md bg-transparent">
          <i class="el-icon-s-opportunity text-3xl"></i>
        </button>
      </router-link>-->
    </div>
    <div class="w-full  h-full flex justify-end space-x-2 items-center px-3">
      <span class="text-bold mx-2 text-gray-700 font-mono">{{username}}</span>
      <button
        @click="openCart"
        class="relative w-10 h-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full flex items-center justify-center"
      >
        <i class="mt-1 text-xl el-icon-shopping-cart-full"></i>
        <div class="sticker absolute top-0 right-0 w-6 h-6 text-white text-sm -mr-2 rounded-full bg-red-500">{{this.$store.getters["cart/numberOfItems"]}}</div>
      </button>

      <Cart
        :isCartSidebarOpen="cartState"
        @closeCart="closeCart"
      />

      <el-dropdown @command="handleCommand">
        <button
          id="profile-button"
          class="w-8 h-8 lg:h-10 lg:w-10 bg-gray-300 focus:outline-none hover:bg-gray-400 rounded-full  flex items-center justify-center"
        >
          <i class="text-xl el-icon-user"></i>
        </button>
        <el-dropdown-menu slot="dropdown">
          <client-only>
            <div v-if="username">
              <el-dropdown-item icon="el-icon-user-solid">
                <router-link :to="{ name: 'profile' }">
                  Mon profil
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item
                icon="el-icon-switch-button"
                command="logout"
                divided
              >
                Se déconnecter
              </el-dropdown-item>
            </div>
            <div v-else>
              <el-dropdown-item icon="el-icon-user">
                <router-link :to="{ name: 'login' }">
                  Me Connecter
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-turn-off">
                <router-link :to="{ name: 'user-register' }">
                  M'inscrire
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-shopping-bag-1">
                <router-link :to="{ name: 'shop-register' }">
                  Créer un Magasin
                </router-link>
              </el-dropdown-item>
            </div>
          </client-only>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </nav>
</template>

<script>
  import {mapMutations} from "vuex"
  import Cart from "~/components/Cart"

  export default {
    components: {Cart},
    data() {
      return {
        activeIndex: null,
        cartState: false
      };
    },
    computed: {
      username() {
        return this.$store.getters["auth/getUserInfo"].username
      },
    },
    watch: {
      '$route' () {
        this.cartState = false
      }
    },
    methods: {
      ...mapMutations({
        logout: "auth/logout",
      }),
      handleCommand: function (command) {
        switch (command) {
          case 'logout':
            this.logout()
            break
        }
      },
      openCart: function(){
        this.cartState = true
      },
      closeCart: function(){
        this.cartState = false
      }
    },
  }
</script>

<style scoped>
  .nuxt-link-exact-active {
    @apply border-blue-500 text-blue-500;
  }

  .nuxt-link-exact-active #profile-button {
    @apply bg-blue-500 text-white;
  }

  .menu-button:active, .menu-button:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }

  .sticker{
    padding-top: 2px;
  }
</style>
