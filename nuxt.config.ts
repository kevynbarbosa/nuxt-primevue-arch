// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: [400, 700],
      Ubuntu: [400, 700],
      "Rubik Burned": [400, 700],
      "Open+Sans": [400, 700],
    },
    display: "swap", // ou 'block'
  },
  primevue: {
    options: {
      ripple: true,
    },
  },
  css: [
    // "primevue/resources/themes/lara-light-green/theme.css",
    "~/assets/theme/custom-nifty/theme.scss",
    "primeicons/primeicons.css",
    "primeflex/primeflex.min.css",
    "@/assets/css/main.css",
  ],
});
