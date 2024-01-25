<template>
  <ul class="list-none p-3 m-0">
    <li>
      <div
        v-ripple
        v-styleclass="{
          selector: '@next',
          enterClass: 'hidden',
          enterActiveClass: 'slidedown',
          leaveToClass: 'hidden',
          leaveActiveClass: 'slideup',
        }"
        class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
      >
        <span class="font-medium">{{ name }}</span>
        <i class="pi pi-chevron-down"></i>
      </div>
      <ul class="list-none p-0 m-0 overflow-hidden">
        <slot></slot>
      </ul>
    </li>
  </ul>
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
