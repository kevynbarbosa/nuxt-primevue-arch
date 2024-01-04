<template>
  <div class="flex justify-content-center">
    <Button label="Submit teste" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps([]);

const date = ref(null);

onMounted(() => {
  // Mounted
});
</script>
