<template>
  <div class="flex justify-content-center p-4">
    <div>
      <Button label="Submit teste" />
    </div>
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

<style scoped>
:deep(.p-button) {
  border-radius: 50px;
  border-style: hidden;
  background-image: linear-gradient(135.89deg, #d03355, #fb7a6b, #fb7a6b, #d03355);
  background-size: 200%;
  background-position: left;
  transition: all 0.3s ease-in;
}

:deep(.p-button:hover) {
  background-position: right;
}

:deep(.p-button:focus) {
  box-shadow: none;
}
</style>
