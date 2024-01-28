<template>
  <li>
    <a
      v-ripple
      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
    >
      <i :class="icon"></i>
      <span class="ml-2 font-medium">{{ name }}</span>
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

const variable = ref(null);
</script>
