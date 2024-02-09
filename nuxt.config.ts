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
    "primevue/resources/themes/md-light-deeppurple/theme.css",
    // "primevue/resources/themes/lara-light-green/theme.css",
    // "~/assets/theme/custom-nifty/theme.scss",
    "primeicons/primeicons.css",
    "primeflex/primeflex.min.css",
    "@/assets/css/main.css",
  ],
});

// Temas disponiveis no primevue
// primevue/resources/themes/md-light-indigo/theme.css
// primevue/resources/themes/md-light-deeppurple/theme.css
// primevue/resources/themes/md-dark-indigo/theme.css
// primevue/resources/themes/md-dark-deeppurple/theme.css
// primevue/resources/themes/mdc-light-indigo/theme.css
// primevue/resources/themes/mdc-light-deeppurple/theme.css
// primevue/resources/themes/mdc-dark-indigo/theme.css
// primevue/resources/themes/mdc-dark-deeppurple/theme.css
// primevue/resources/themes/aura-light-blue/theme.css
// primevue/resources/themes/aura-light-indigo/theme.css
// primevue/resources/themes/aura-light-purple/theme.css
// primevue/resources/themes/aura-light-teal/theme.css
// primevue/resources/themes/aura-light-green/theme.css
// primevue/resources/themes/aura-light-amber/theme.css
// primevue/resources/themes/aura-light-cyan/theme.css
// primevue/resources/themes/aura-light-pink/theme.css
// primevue/resources/themes/aura-light-lime/theme.css
// primevue/resources/themes/aura-light-noir/theme.css
// primevue/resources/themes/aura-dark-blue/theme.css
// primevue/resources/themes/aura-dark-indigo/theme.css
// primevue/resources/themes/aura-dark-purple/theme.css
// primevue/resources/themes/aura-dark-teal/theme.css
// primevue/resources/themes/aura-dark-green/theme.css
// primevue/resources/themes/aura-dark-amber/theme.css
// primevue/resources/themes/aura-dark-cyan/theme.css
// primevue/resources/themes/aura-dark-pink/theme.css
// primevue/resources/themes/aura-dark-lime/theme.css
// primevue/resources/themes/aura-dark-noir/theme.css
// primevue/resources/themes/lara-light-blue/theme.css
// primevue/resources/themes/lara-light-indigo/theme.css
// primevue/resources/themes/lara-light-purple/theme.css
// primevue/resources/themes/lara-light-teal/theme.css
// primevue/resources/themes/lara-light-green/theme.css
// primevue/resources/themes/lara-light-amber/theme.css
// primevue/resources/themes/lara-light-cyan/theme.css
// primevue/resources/themes/lara-light-pink/theme.css
// primevue/resources/themes/lara-dark-blue/theme.css
// primevue/resources/themes/lara-dark-indigo/theme.css
// primevue/resources/themes/lara-dark-purple/theme.css
// primevue/resources/themes/lara-dark-teal/theme.css
// primevue/resources/themes/lara-dark-green/theme.css
// primevue/resources/themes/lara-dark-amber/theme.css
// primevue/resources/themes/lara-dark-cyan/theme.css
// primevue/resources/themes/lara-dark-pink/theme.css
