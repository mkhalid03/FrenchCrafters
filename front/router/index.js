const customRoutes = (path, resolve) => {
  return [
    {
      name: "login",
      path: "/login",
      component: resolve(path, "pages/users/login.vue"),
    },
    {
      name: "shop-register",
      path: "/register/shop",
      component: resolve(path, "pages/users/shopRegister.vue"),
    },
    {
      name: "user-register",
      path: "/register",
      component: resolve(path, "pages/users/userRegister.vue"),
    },
    {
      name: "reset-password",
      path: "/reset-password/:token",
      component: resolve(path, "pages/users/resetPassword.vue"),
    },
    {
      name: "profile",
      path: "/profile",
      component: resolve(path, "pages/users/profile.vue"),
    },
  ]
}

export default customRoutes
