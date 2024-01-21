<template>
  <div
    class="flex justify-content-between align-items-center px-4 text-white border-bottom-1 surface-border relative lg:static font-custom"
    style="height: 60px; background-color: #25476a"
  >
    <!-- Top bar -->
    Validation
    <br />
    <span class="font-2">
      Technical process where a web-form checks if the information provided by a user is correct.
    </span>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps([]);

const someVar = ref(null);

onMounted(() => {
  // Mounted
});
</script>

<style scoped>
.font-custom {
  /* Nifty */
  /* font-family: "Poppins", "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji"; */

  /* Nuxt UI  */
  /* font-family: DM Sans, DM Sans fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji; */

  /* font-family: "Rubik Burned"; */
  font-family: "Ubuntu";
  font-size: 32px;
  font-weight: 400;
}

.font-2 {
  font-family: "Poppins";
  font-size: 15px;
  font-weight: 400;
  color: rgb(207, 214, 223);
}
</style>
