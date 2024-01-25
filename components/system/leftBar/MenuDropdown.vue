<template>
  <li>
    <a
      v-ripple
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'slidedown',
        leaveToClass: 'hidden',
        leaveActiveClass: 'slideup',
      }"
      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
    >
      <i class="pi pi-chart-line mr-2"></i>
      <span class="font-medium">{{ name }}</span>
      <i class="pi pi-chevron-down ml-auto"></i>
    </a>
    <ul
      class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const variable = ref(null);
</script>
