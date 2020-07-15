const customRoutes = (path, resolve) => {
  return [
    {
      name: "login",
      path: "/login",
      component: resolve(path, "pages/users/login.vue"),
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
    {
      name: "shop-register",
      path: "/register/shop",
      component: resolve(path, "pages/users/shops/register.vue"),
    },
    {
      name: "shop-onboarding",
      path: "/register/onboarding",
      component: resolve(path, "pages/users/shops/onboarding.vue"),
    },
    {
      name: "checkout",
      path: "/checkout",
      component: resolve(path, "pages/orders/checkout.vue"),
    },
    {
      name: "checkout-confirmation",
      path: "/checkout/confirmation",
      component: resolve(path, "pages/orders/confirmation.vue"),
    },
  ]
}

export default customRoutes
