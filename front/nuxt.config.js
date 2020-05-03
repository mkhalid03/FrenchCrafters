import customRoutes from "./router"

export default {
  mode: "universal",

  server: {
    port: process.env.FRONT_HOST_PORT,
    host: process.env.FRONT_HOST_URL,
  },
  env: {
    stripeApiKey: process.env.STRIPE_API_KEY,
    backendUrl: process.env.BACKEND_ENDPOINT,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "https://js.stripe.com/v3" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BACKEND_SERVER_ENDPOINT,
    browserBaseURL: process.env.BACKEND_API_ENDPOINT
  },
  router: {
    extendRoutes(routes, resolve) {
      const r = customRoutes(__dirname, resolve)
      r.forEach((route) => {
        routes.push(route)
      })
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
