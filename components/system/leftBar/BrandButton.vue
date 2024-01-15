<template>
  <div class="flex align-items-center px-5 pt-3 flex-shrink-0" :style="{ height: topBarSize + 'px' }">
    <img src="/images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps(["topBarSize"]);

const someVar = ref(null);

onMounted(() => {
  // Mounted
});
</script>
